# Test with the latest version of Node.js

Node.js uses the Chrome V8 JavaScript engine. Some of the language candidates can be used in the latest version of Node.js because V8 already supports them (e.g. Array.prototype.flat and String.prototype.trimEnd).

You can enable other language features using `--harmony-{feature-flag}` command-line options. To see what flags your version of Node.js supports, use the `--v8-options` option to get a list. Some of the candidates are labeled as “in progress.”

### macOS / Linux

```js
node --v8-options | grep "in progress"
```

### Windows

```js
node --v8-options | find "in progress"
```

For example, to run a Node.js application that contains a class that uses field declarations and static methods, you can use the following CLI options.

```js
node --harmony-class-fields --harmony-static-fields index.js
```
