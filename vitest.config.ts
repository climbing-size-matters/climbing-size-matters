import { defineConfig } from "vitest/config";
import { WxtVitest } from "wxt/testing";

export default defineConfig({
  plugins: [WxtVitest()],
  test: {
    include: ["test/**/*.spec.ts", "test/**/*.spec.js", "test/**/*.d.ts"],
    coverage: {
      include: ["src"],
    },
  },
});
