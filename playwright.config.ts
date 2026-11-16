import { defineConfig } from '@playwright/test';

// See https://playwright.dev/docs/test-configuration
export default defineConfig({
  testDir: 'e2e',
  forbidOnly: !!process.env.CI,
  use: {
    trace: 'retain-on-failure',
  },
});
