# Browser extension ecosystem

What browsers do we develop for/test, and why?

What are the layers involved in automating browser testing?
- browser (chrome, firefox)
- protocol to speak to browser
  - WebDriver Classic: HTTP to browser driver (chromedriver, geckodriver). initially intended for
    user actions, did not include dev tools info, leading to browsers implementing their own;
    and is unidirectional, hence being superseded by BiDi
  - browser-specific: Chrome DevTools Protocol, Firefox Remote Debugging Protocol, WebKit Inspector Protocol, Juggler
  - WebDriver BiDi: modern bidirectional standard including both user actions and dev tools,
    slowly being implemented by browsers and automation libraries since 2022
- automation library: has to implement protocol to speak to / control browser
    (Selenium, WebdriverIO, Puppeteer, Cypress, Playwright)
- test runner: arrange, act, assert. sometimes the same project as the automation library (Playwright Test),
    sometimes not (Puppeteer needs to be paired with Vitest, Jest, etc)

What are the extra layers involved in browser _extension_ testing?
- web-ext: dev tool for installing + launching extensions in browsers
- WXT: opinionated framework/interface for web extensions; builds with Vite, launches with `web-ext`
- channel for communicating: HTTP too permissive, process pipes required by Chrome
  for installing extensions so only the parent process has access
- components/interactions specific to extensions
  - interact with popup: `triggerAction` in CDP; no support in BiDi, but can work around to load entire popup as its own page if we want

Why would we use one set of tools over another?
- multi-browser support
- dev ecosystem support
- support for our set of actions (not all tools can interact with popup)

What do we suggest, or what do the components of our ecosystem suggest?
- WXT: Playwright for Chrome. no suggestions for Firefox.
- Chrome extension guide: Puppeteer

What if we don't want to use two different tools?
- WebDriver BiDi is developing standard. WebdriverIO, Selenium, Puppeteer support, Playwright lags

Current options for single tool:
- Puppeteer + Vitest: Chrome and Firefox (BiDi). No built-in assertions or test runner, so Vitest
- WebdriverIO 10: Chrome and Firefox (BiDi). Includes test runner (Oct 2026)
- wait for Playwright support (???) -- see [tracker](https://bugzilla.mozilla.org/show_bug.cgi?id=1917540)

## Current State: Automation Tools <-protocol-> Browsers

| Tool                | npm/month | Chrome | Firefox                                      |
| ------------------- | --------- | ------ | -------------------------------------------- |
| WebdriverIO (2011-) | 12M | BiDi, falls back to Classic (default since v9; `installExtension` uses BiDi) | BiDi, falls back to Classic |
| Selenium 4 (2004-)  | 8M  | Classic, plus BiDi where enabled | Classic, plus BiDi |
| Puppeteer  (2017-)  | 58M | CDP by default; BiDi only with `protocol: 'webDriverBiDi'` (no fallback, no `triggerAction`) | BiDi only (no fallback) |
| Playwright (2019-)  | 626M | CDP | Juggler (its own Firefox), BiDi experimental |
| Cypress (2017-)     | 29M | CDP | BiDi (default since 14.1) |

"No fallback": APIs BiDi doesn't cover yet throw `UnsupportedOperation` instead of using another protocol. Chrome's BiDi is a translation layer on top of CDP ([chromium-bidi](https://github.com/GoogleChromeLabs/chromium-bidi)); Firefox implements BiDi natively.

## Timeline

- **Aug 2011**: [WebdriverIO](https://github.com/webdriverio/webdriverio) starts: a Node.js test framework on the WebDriver standard (the protocol Selenium uses).
- **Feb 2016**: Mozilla starts [web-ext](https://github.com/mozilla/web-ext), a CLI to run and build Firefox add-ons. Chromium support came later.
- **May 2017**: Google's Chrome DevTools team starts [Puppeteer](https://github.com/puppeteer/puppeteer). Chrome only, via the Chrome DevTools Protocol (CDP).
- **Nov 2019**: Former Puppeteer authors start [Playwright](https://github.com/microsoft/playwright) at Microsoft ([1.0 in May 2020](https://www.infoq.com/news/2020/05/playwright-10-browser-automation)). It supports Chromium, Firefox, and WebKit, using its own patched Firefox and WebKit builds.
- **May 2020**: The W3C starts the [WebDriver BiDi](https://github.com/w3c/webdriver-bidi) spec: one standard protocol for any tool to control any browser. Still in progress.
- **May 2022**: Firefox 101 [enables BiDi by default](https://groups.google.com/a/mozilla.org/g/dev-webdriver/c/EUzY7k60Www).
- **Jun 2023**: [WXT](https://github.com/wxt-dev/wxt) starts. It uses web-ext to open the browser for `wxt dev`.
- **Jul 2023**: ChromeDriver 115 supports BiDi ([thirtyfour docs](https://stevepryde.github.io/thirtyfour/bidi/overview.html); Chrome's BiDi layer, [chromium-bidi](https://github.com/GoogleChromeLabs/chromium-bidi), started in 2021).
- **Jun 2024 → May 2025**: Chrome replaces the `--load-extension` flag with loading extensions over CDP (`Extensions.loadUnpacked`, via a process pipe), from Chrome 126 to 137. Tools follow: [web-ext 10](https://github.com/mozilla/web-ext/issues/3388) (Jun 2025), and [Playwright's docs](https://playwright.dev/docs/chrome-extensions) say to use bundled Chromium.
- **Aug 2024**: [Puppeteer's Firefox support over BiDi](https://developer.chrome.com/blog/firefox-support-in-puppeteer-with-webdriver-bidi) is stable (Puppeteer 23, Firefox 129). Firefox 129 also [deprecates CDP](https://fxdx.dev/?p=289), and [Firefox 141 removes it](https://fxdx.dev/?p=482) (2025).
- **Aug 2024**: [WebdriverIO 9](https://webdriver.io/blog/2024/08/15/webdriverio-v9-release) uses BiDi by default.
- **Sep 2024**: Playwright starts its [BiDi implementation](https://github.com/microsoft/playwright/tree/main/packages/playwright-core/src/server/bidi), still experimental. Mozilla opens a [meta bug for Playwright BiDi support](https://bugzilla.mozilla.org/show_bug.cgi?id=1917540). In November 2026, 26 of its 36 direct dependencies are resolved. None of them cover installing extensions.
- **Jun 2025**: Work starts on [`@wxt-dev/runner`](https://wxt.dev/runner), WXT's replacement for web-ext, using BiDi and CDP directly. In November 2026 it's still "not ready".
- **Oct 2026**: [WebdriverIO 10](https://github.com/webdriverio/webdriverio/releases/tag/v10.0.0) adds `installExtension` (over BiDi).

## What this means for us

- **Chromium:** Playwright, as WXT recommends ([E2E testing](https://wxt.dev/guide/essentials/e2e-testing.html)). Branded Chrome no longer loads extensions from a flag, so the tests use Playwright's bundled Chromium (`channel: 'chromium'`).
- **Firefox:** no standard way to run automated add-on tests yet. Playwright can't install add-ons in Firefox. Puppeteer and WebdriverIO can (over BiDi), but either would be a second tool. WXT's runner page has an open TODO to try Firefox E2E tests with Puppeteer. For now: build for Firefox and test it by hand.
- **What to watch:** Playwright stable BiDi support plus an API to install extensions over it. Then Firefox could use the same tests.
- **`pnpm dev`:** web-ext controls Chrome over a pipe, so `webExt.chromiumPort` does nothing. We open port 9222 with `chromiumArgs` instead, so `playwright-cli` can attach. When WXT switches to its runner, this config may need to change.
