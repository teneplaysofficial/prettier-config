# @tenedev/prettier-config

> A dynamic, plug-and-play shared Prettier configuration that automatically enables optional plugins if they are installed.

[![npm version](https://img.shields.io/npm/v/@tenedev/prettier-config.svg?logo=npm&color=brightgreen)](https://www.npmjs.com/package/@tenedev/prettier-config)
[![Downloads](https://img.shields.io/npm/dt/@tenedev/prettier-config?logo=npm)](https://www.npmjs.com/package/@tenedev/prettier-config)

## Installation

```bash
npm install -D prettier @tenedev/prettier-config
```

## Usage

Add this to your `package.json`:

```json
{
  "prettier": "@tenedev/prettier-config"
}
```

That's it 🎉

## Optional Plugin Auto-Detection

This config automatically loads plugins if they exist in your project.

Currently supported:

- [@prettier/plugin-php](https://github.com/prettier/plugin-php)
- [@prettier/plugin-pug](https://github.com/prettier/plugin-pug)
- [@prettier/plugin-ruby](https://github.com/prettier/plugin-ruby)
- [@prettier/plugin-xml](https://github.com/prettier/plugin-xml)
- [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [prettier-plugin-sh](https://github.com/un-ts/prettier/tree/master/packages/sh)
- [prettier-plugin-packagejson](https://github.com/matzkoh/prettier-plugin-packagejson) (default)
