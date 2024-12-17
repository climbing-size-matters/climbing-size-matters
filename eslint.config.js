import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import wxtAutoImports from "./.wxt/eslint-auto-imports.mjs";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // global ignores
  {
    ignores: [
      ".wxt",
      "dist",
      "coverage",
      "node_modules",
      "pnpm-lock.yaml",
      ".husky",
      ".vscode",
      "docs",
      "README.md",
    ],
  },
  // wxt
  wxtAutoImports,
  // default configs from pnpm create @eslint-config
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // formatting
  eslintConfigPrettier,
];
