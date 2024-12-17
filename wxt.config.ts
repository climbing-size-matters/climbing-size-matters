import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: "chrome",
  srcDir: "src",
  outDir: "dist",
  manifest: {
    name: "Climbing Size Matters",
    version: "0.1.0",
    manifest_version: 3,
    description: "To help people display MP sizes",
    permissions: [],
    host_permissions: ["*://www.mountainproject.com/*"],
    icons: {
      16: "/icon/cams16.png",
      32: "/icon/cams32.png",
      48: "/icon/cams48.png",
      128: "/icon/cams128.png",
    },
    action: {
      default_popup: "popup.html",
    },
    content_scripts: [
      {
        matches: ["*://www.mountainproject.com/*"],
        // to enable HMR, we have a loader that dynamically imports our script
        js: ["content-scripts/esm-loader.js"],
      },
    ],
  },
  imports: {
    eslintrc: {
      enabled: 9,
    },
  },
});
