// Empty on purpose. Playwright reads the extension id from the background
// service worker's URL (see e2e/fixtures.ts), so the extension needs one.
export default defineBackground(() => {});
