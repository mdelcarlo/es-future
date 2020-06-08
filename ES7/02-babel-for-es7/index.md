# Bebel for ES7

## Babel v5 or older

If you are using Babel v5 or older, you can use `@babel/preset-es2016`

### To install it run

```js
npm install --save-dev @babel/preset-es2016
```

### To use it

#### With a configuration file (Recommended)

```js
{
  "presets": ["@babel/preset-es2016"]
}
```

#### Via CLI

```js
babel script.js --presets @babel/preset-es2016
```

#### Via Node API

```js
require("@babel/core").transform("code", {
  presets: ["@babel/preset-es2016"]
});
```

## Babel v6 and v7

> As of Babel v6, all the yearly presets have been deprecated. We recommend using @babel/preset-env instead.

`@babel/preset-env` is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!

Install
With npm:

```js
npm install --save-dev @babel/preset-env
```

Or yarn:

```js
yarn add @babel/preset-env --dev
```

By default `@babel/preset-env` will use browserslist config sources unless either the targets or ignoreBrowserslistConfig options are set.

For example, to only include polyfills to transform all ECMAScript 2015+ code, you dont need to provide a target.

```js
{
  "presets": [
    [
      "@babel/preset-env",
    ]
  ]
}
```
