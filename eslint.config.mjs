import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import eslintConfigPrettier from "eslint-config-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: [
      "**/dist/*",
      "eslint.config.mjs",
      "vite.config.js",
      "package-lock.json",
      "package.json",
      "README.md",
      "index.html",
      "styles.css",
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  { settings: { react: { version: "detect" } } },
  eslintConfigPrettier,
  jsxA11y.flatConfigs.recommended,
];
