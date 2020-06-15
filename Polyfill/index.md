# Installation

Since many people don’t think to update their browsers to make their developer’s lives easier, we’ll need to use babel to get started using features that are not available across the board for users. For simplicity’s sake, I’ll use the Parcel bundler to get everything running as quickly as possible.

```js
$ yarn add parcel-bundler
```

```js
// package.json
"scripts": {
  "start": "parcel index.html"
},
```

In order to transpile future ES versions we are going to use Babel. It provides a wide plugin ecosystem.

## ES2015 to ES2018

Install the presets and plugins in your app:

`@babel/preset-env` is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!

To install it with npm:

```js
npm install --save-dev @babel/preset-env
```

or yarn:

```js
yarn add @babel/preset-env --dev
```

Then create a file .babelrc:

```js
{
  "presets": ["@babel/preset-env"]
}
```

It is important to note that @babel/preset-env does not support `stage-x` plugins.

## ES2020

Sadly, at the time of writing this course we’re too far ahead of our time and there doesn’t seem to be a working preset for ES2020. If you throw these in a .babelrc file and save, Parcel should handle installing everything for you.

```js
// .babelrc
{
  "plugins": [
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-private-methods",
    "@babel/plugin-syntax-bigint"
  ]
}
```

## useBuiltIns option

Also we can use the `useBuiltIns` option

This option configures how `@babel/preset-env` handles polyfills.

When either the usage or entry options are used, `@babel-preset-env` will add direct references to core-js modules as bare imports (or requires). This means core-js will be resolved relative to the file itself and needs to be accessible.

Since `@babel/polyfill` was deprecated in 7.4.0, I recommend directly adding `core-js` and setting the version via the corejs option.

```js
npm install core-js@3 --save
```

or

```js
npm install core-js@2 --save
```

## useBuiltIns: 'entry'

NOTE: Only use `import "core-js";` and `import "regenerator-runtime/runtime";` once in your whole app. If you are using `@babel/polyfill`, it already includes both core-js and regenerator-runtime: importing it twice will throw an error. Multiple imports or requires of those packages might cause global collisions and other issues that are hard to trace. We recommend creating a single entry file that only contains the import statements.

This option enables a new plugin that replaces the import "core-js/stable"; and import "regenerator-runtime/runtime" statements (or `require("core-js")` and `require("regenerator-runtime/runtime"))`sk with individual requires to different core-js entry points based on environment.

In

```js
import "core-js";
```

Out (different based on environment)

```js
import "core-js/modules/es.string.pad-start";
import "core-js/modules/es.string.pad-end";
```

Importing "core-js" loads polyfills for every possible ECMAScript feature: what if you know that you only need some of them? When using core-js@3, @babel/preset-env is able to optimize every single core-js entrypoint and their combinations. For example, you might want to only polyfill array methods and new Math proposals:

In

```js
import "core-js/es/array";
import "core-js/proposals/math-extensions";
```

Out (different based on environment)

```js
import "core-js/modules/es.array.unscopables.flat";
import "core-js/modules/es.array.unscopables.flat-map";
import "core-js/modules/esnext.math.clamp";
import "core-js/modules/esnext.math.deg-per-rad";
import "core-js/modules/esnext.math.degrees";
import "core-js/modules/esnext.math.fscale";
import "core-js/modules/esnext.math.rad-per-deg";
import "core-js/modules/esnext.math.radians";
import "core-js/modules/esnext.math.scale";
```

You can read core-js's documentation for more information about the different entry points.

## useBuiltIns: 'usage'

Adds specific imports for polyfills when they are used in each file. We take advantage of the fact that a bundler will load the same polyfill only once.

In

```js
// a.js;

var a = new Promise();
```

```js
// b.js;

var b = new Map();
```

Out (if environment doesn't support it)

```js
import "core-js/modules/es.promise";
var a = new Promise();
```

```js
import "core-js/modules/es.map";
var b = new Map();
```

Out (if environment supports it)

```js
var a = new Promise();

var b = new Map();
```

```js
useBuiltIns: false;
```

Don't add polyfills automatically per file, and don't transform `import "core-js"` or `import "@babel/polyfill"` to individual polyfills.

## corejs

`2, 3 or { version: 2 | 3, proposals: boolean }, defaults to 2.`

This option only has an effect when used alongside useBuiltIns: usage or useBuiltIns: entry, and ensures @babel/preset-env injects the correct imports for your core-js version.

By `default`, only polyfills for stable ECMAScript features are injected: if you want to polyfill them, you have three different options:

when using `useBuiltIns: "entry"`, you can directly import a proposal polyfill: `import "core-js/proposals/string-replace-all"`.
when using `useBuiltIns: "usage"` you have two different alternatives:
set the shippedProposals option to true. This will enable polyfills and transforms for proposal which have already been shipped in browsers for a while.
use corejs: { version: 3, proposals: true }. This will enable polyfilling of every proposal supported by core-js.
