'use strict';

const { PACKAGE_KEY_ORDER } = require('sort-package-keys');

/**
 * @type {readonly string[]}
 */
const OPTIONAL_PLUGINS = ['prettier-plugin-tailwindcss', 'prettier-plugin-sh'];

/**
 * @param {string} packageName
 *
 * @returns {string | null}
 */
function resolveIfExists(packageName) {
  try {
    return require.resolve(packageName, { paths: [process.cwd()] });
  } catch {
    try {
      return require.resolve(packageName);
    } catch {
      return null;
    }
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
  trailingComma: 'all',
  printWidth: 100,
  tabWidth: 2,
  arrowParens: 'always',
  bracketSpacing: true,
  jsxSingleQuote: false,
  bracketSameLine: false,
  singleAttributePerLine: false,
  endOfLine: 'lf',
  quoteProps: 'as-needed',
  embeddedLanguageFormatting: 'auto',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  useTabs: false,
  packageSortOrder: PACKAGE_KEY_ORDER,
  plugins: ['prettier-plugin-packagejson', ...getInstalledPlugins()],
};

module.exports = config;
