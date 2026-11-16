// Loads the built extension into Chromium.
// See https://playwright.dev/docs/chrome-extensions
import {
  test as base,
  chromium,
  type BrowserContext,
  type Page,
} from '@playwright/test';
import path from 'path';

const pathToExtension = path.resolve('dist/chrome-mv3');

export const test = base.extend<{
  context: BrowserContext;
  extensionId: string;
  popup: Page;
}>({
  // Playwright requires the destructuring pattern, even when empty
  // eslint-disable-next-line no-empty-pattern
  context: async ({}, use) => {
    const context = await chromium.launchPersistentContext('', {
      // the bundled Chromium; branded Chrome ignores --load-extension
      channel: 'chromium',
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });
    await use(context);
    await context.close();
  },
  extensionId: async ({ context }, use) => {
    let [serviceWorker] = context.serviceWorkers();
    if (!serviceWorker)
      serviceWorker = await context.waitForEvent('serviceworker');
    // chrome-extension://<id>/background.js
    await use(new URL(serviceWorker.url()).host);
  },
  // The popup, opened in a tab. Fails the test on any console error.
  popup: async ({ context, extensionId }, use) => {
    const page = await context.newPage();
    // Chrome caps popups at 600px tall
    await page.setViewportSize({ width: 800, height: 600 });
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(`chrome-extension://${extensionId}/popup.html`);
    await use(page);
    expect(errors).toEqual([]);
  },
});

export const expect = test.expect;
