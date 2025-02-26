// manual code-splitting for ESM to enable HMR
// see https://github.com/wxt-dev/wxt/issues/357#issuecomment-2293619709
export default defineContentScript({
  matches: ["*://www.mountainproject.com/*"],
  async main(ctx): Promise<any> {
    const mod = await import(browser.runtime.getURL("/content-scripts/esm.js"));
    return await mod.default(ctx);
  },
});
