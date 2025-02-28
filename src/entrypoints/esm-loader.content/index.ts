// manual code-splitting for ESM to enable HMR
// see https://github.com/wxt-dev/wxt/issues/357#issuecomment-2293619709
export default defineContentScript({
  matches: ["*://www.mountainproject.com/*"],
  async main(ctx): Promise<void> {
    const contentScript = await import(browser.runtime.getURL("/content-scripts/content.js"));
    return await contentScript.default(ctx);
  },
});
