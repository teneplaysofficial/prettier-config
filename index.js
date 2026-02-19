"use strict";

/**
 * @type {readonly string[]}
 */
const OPTIONAL_PLUGINS = [
  "prettier-plugin-tailwindcss",
  "prettier-plugin-sh",
  "prettier-plugin-packagejson",
];

/**
 * @param {string} packageName
 *
 * @returns {string | null}
 */
function resolveIfExists(packageName) {
  try {
    require.resolve(packageName);
    return packageName;
  } catch {
    return null;
  }
}

/**
 *  @returns {string[]}
 */
function getInstalledPlugins() {
  return OPTIONAL_PLUGINS.map(resolveIfExists).filter(Boolean);
}

/**
 * @type {import("prettier").Config}
 */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
  arrowParens: "always",
  bracketSpacing: true,
  jsxSingleQuote: false,
  bracketSameLine: false,
  singleAttributePerLine: false,
  endOfLine: "lf",
  quoteProps: "as-needed",
  embeddedLanguageFormatting: "auto",
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  useTabs: false,
  packageSortOrder: [
    "name",
    "displayName",
    "private",
    "version",
    "description",
    "keywords",
    "homepage",
    "repository",
    "bugs",
    "funding",
    "license",
    "author",
    "contributors",
    "maintainers",
    "sideEffects",
    "type",
    "files",
    "publishConfig",
    "packageManager",
    "man",
    "directories",
    "bin",
    "main",
    "module",
    "browser",
    "unpkg",
    "jsdelivr",
    "types",
    "typings",
    "exports",
    "imports",
    "engines",
    "engineStrict",
    "os",
    "cpu",
    "workspaces",
    "scripts",
    "peerDependencies",
    "peerDependenciesMeta",
    "bundledDependencies",
    "bundleDependencies",
    "optionalDependencies",
    "dependencies",
    "devDependencies",
    "overrides",
    "resolutions",
    "prettier",
    "lint-staged",
    "jest",
  ],
  plugins: getInstalledPlugins(),
};

module.exports = config;
