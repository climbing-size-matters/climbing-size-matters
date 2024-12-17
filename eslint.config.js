import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import wxtAutoImports from './.wxt/eslint-auto-imports.mjs';


/** @type {import('eslint').Linter.Config[]} */
export default [
  wxtAutoImports,
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];