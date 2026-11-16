
## Testing e2e

Good e2e tests target actual end user behavior we care about,
codifying/protecting desired user interactions and their desired outcomes.

To this end, we use Playwright in Chrome and only Chrome. Why?

First of all, what behavior are we trying to test?
- popup: managing inventory via UI, etc
- content script:  on-page changes, highlights, etc

Ultimately most browsers / protocols are limited in their ability to interact with popups. Chrome DevTools Protocol is the only one that can actually test the user interactions we care about, so even though WebDriver BiDi is becoming a modern standard for browser testing in general, for extensions specifically we stick with CDP in Chrome, for which Playwright has the most intuitive interface.

This ultimately means using Playwright on Chrome, and not testing Firefox because
it doesn't support the interactions we care about yet. We may decide to test Firefox in the future, but not yet.

This conclusion was reached by investigating the entire ecosystem of automating browser testing, which is described in more detail in [browser-extension-ecosystem.md](./browser-extension-ecosystem.md).

Note: there's the additional benefit of using Playwright as it's the most used web development test ecosystem in general, though that's because everyone's converging to Chrome, which I don't love, so while I'd like to support open-source W3C standards in general, for devs it may be nicer to stick with the more common tool Playwright.
