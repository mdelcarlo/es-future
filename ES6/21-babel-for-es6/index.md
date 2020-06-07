# Bebel for ES6

Wheter you are asking what is Babel, Babel is a JavaScript compiler that allows us use next generation JavaScript.

Current browsers don’t support all the new ES6 features yet. You need to use a compiler (transpiler) to transform your ES6 code to ES5 compatible code. Although there are other options, Babel has become the de-facto standard to compile ES6 applications to a version of ES that can run in current browsers.

## Setting up Babel

### Installing node.js

First, you need to install the es2015 version of node.js by downloading it from the nodejs.org website. Installing node.js is straightforward. You just follow its instructions step by step. Once you install node.js successfully, you can verify it by issuing the following command:

```js
node -v
v7.2.0
```

### Creating a project folder and package.json file

First, you create a directory to store the project files e.g., `d:\projects\es6-demo`. Then, you issue the following command to create the package.json file for your project:

```js
npm init
```

The command line will ask you some basic information, just enter it as follows:

```js
name: (es6-demo) es6
version: (1.0.0) 1.0.0
description: ES6 demo
entry point: (index.js)
test command:
git repository:
keywords: es6
author: jstut
license: (ISC)
```

About to write to D:\projects\es6-demo\package.json:

```js
{
  "name": "es6",
  "version": "1.0.0",
  "description": "ES6 demo",
  "main": "index.js",
  "scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
  "keywords": [
    "es6"
],
  "author": "jstut",
  "license": "ISC"
}
```

Check the `d:\projects\es6-demo\` folder, you will see the new file with the name `package.json` created.

### Installing Babel CLI tool

To install Babel CLI tool, you use the following command:

```js
npm install --save-dev babel-cli
```

It will install Babel CLI tool locally in your project folder. Once completed, you will see the new section in the package.json file:

```js
"devDependencies": {
  "babel-cli": "^6.18.0"
}
```

Note that your version may be newer.

### Setting up folders for JavaScript codes

For organizing JavaScript files, you create two new folders src and dist. The src folder contains the JavaScript code in the es2015 version. Babel CLI will take the code from the src folder, convert it to the older version and save the code files in the dist folder. Instead of running Babel from the command line directly, you can place commands in the scripts of the package.json section as follows:

```js
"scripts": {
  "build": "babel src -d dist"
}
```

Now, you can create a JavaScript file named app.js in the src folder:

```js
var nums = [1, 2, 3];
var doubleNums = nums.map(e => e * 2);
```

And issue the following command in the command line:

```js
npm run build
You will see the following output:

es6@1.0.0 build D:\projects\es6-demo
babel src -d dist
```

src\app.js -> dist\app.js
Now, check the dist folder you will see the app.js file created. However, the content of the app.js file in the dist folder is the same as the one in the src folder. To transform the JavaScript code, you need to instruct Babel to do it.

### Configuring Babel

To enable the transformation of JavaScript using Babel, you need to install the es2015 presets:

```js
npm install babel-preset-es2015 --save-dev
```

To use a preset, you create a new file named .babelrc in the projects folder `d:\projects\es6-demo\` with the following content:

```js
{
"presets": ["es2015"]
}
```

Now, you can run the build command again:

```js
npm run build
```

> and check the app.js in the dist folder:

```js
"use strict";

var nums = [1, 2, 3];
var doubleNums = nums.map(function(e) {
  return e * 2;
});
```

As you can see, Babel converts the JavaScript ES6 version into the ES5 version. In this tutorial, you have learned how to set up Babel as the JavaScript transpiler to convert the es2015 JavaScript to an older version so that the old browser can understand.
