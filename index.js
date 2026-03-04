'use strict';

const { PACKAGE_KEY_ORDER } = require('sort-package-keys');

/** @type {readonly string[]} */
const CORE_PLUGINS = ['prettier-plugin-packagejson'];

/** @type {readonly string[]} */
const OPTIONAL_PLUGINS = [
  '@prettier/plugin-php',
  '@prettier/plugin-pug',
  '@prettier/plugin-ruby',
  '@prettier/plugin-xml',
  'prettier-plugin-tailwindcss',
  'prettier-plugin-sh',
];

/**
 * Resolve plugin from consumer project first, fallback to this config package.
 *
 * @param {string} packageName
 * @returns {string}
 */
function resolvePlugin(packageName) {
  try {
    return require.resolve(packageName, { paths: [process.cwd()] });
  } catch {
    return require.resolve(packageName, { paths: [__dirname] });
  }
}

/**
 * Resolve optional plugin safely.
 *
 * @param {string} packageName
 * @returns {string | null}
 */
function resolveOptional(packageName) {
  try {
    return resolvePlugin(packageName);
  } catch {
    return null;
  }
}

/** @type {import('prettier').Config} */
module.exports = {
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
  plugins: [
    ...CORE_PLUGINS.map(resolvePlugin),
    ...OPTIONAL_PLUGINS.map(resolveOptional).filter(Boolean),
  ],
};
