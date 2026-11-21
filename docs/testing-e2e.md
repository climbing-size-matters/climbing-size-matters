
## Testing e2e

Good e2e tests target actual end user behavior we care about,
codifying/protecting desired user interactions and their desired outcomes.

To this end, we use Playwright in chromium and only chromium. Why?

First of all, what behavior are we trying to test?
- popup: managing inventory via UI, etc
- content script:  on-page changes, highlights, etc

Ultimately most browsers / protocols are limited in their ability to open the popup from the toolbar. Chrome DevTools Protocol is the only one that can actually test the user interactions we care about, so even though WebDriver BiDi is becoming a modern standard for browser testing in general, for extensions specifically we stick with CDP in chromium. Puppeteer is the only one that actually exposes the CDP API to open the real toolbar pop-up; but Playwright is recommended by WXT and is more widely used. Any browser can interact with the popup if it opens it as its own page, which is what we do with Playwright even though it's not exactly what a user experiences.

A limitation of choosing Playwright is that we skip testing Firefox, as Playwright cannot install an add-on in Firefox. But given that we're not even officially uploading to the Firefox store yet, this seems like an ok tradeoff to use a more widely supported testing ecosystem.

This conclusion was reached by investigating the entire ecosystem of automating browser testing, which is described in more detail in [browser-extension-ecosystem.md](./browser-extension-ecosystem.md).

Note: there's the additional benefit of using Playwright as it's the most used web development test ecosystem in general, so though it doesn't fully support the BiDi W3C standard and I'd like to support open-source W3C standards in general, for devs it may be nicer to stick with the more common tool Playwright.
