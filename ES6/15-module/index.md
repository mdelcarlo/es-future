# Module

ES6 or ES2015 introduces a standardized module format. I have an index.html file here and I've loaded it here just for the browser sync server so that we can get some live reloading. I go ahead and type this, we'll say, With Webpack and Babel. See that reloads. We may have an entry point already set up.

## Named exports (several per module)

A module can export multiple things by prefixing its declarations with the keyword export. These exports are distinguished by their names and are called named exports.

If I just log to the console, let's create a function here, that's going to sum two numbers and take A and B, multiplyTwo(a, b) and will just return that, A + B. If we want to log that out, we'll just say this, 2 + 3. I want to take the result of this, two and three.

```javascript
function multiplyTwo(a, b) {
  return a * b;
}

console.log(
  "2 * 3",
  multiplyTwo(2, 3) // 5
);
```

Let's extract this multiplyTwo function now into an multiplication module. Unlike here in our src Directory, we'll just create a new file, and we'll put this within a math Directory, and we'll call this multiplication.js.

See that we have this multiplyTwo and we need a way of exposing this. That's going to look like this. We can export. We'll just give it the name of the function. That's going to expose the multiplyTwo function when we import the module.

math/multiplication.js

```javascript
function multiplyTwo(a, b) {
  return a * b;
}

export { multiplyTwo };
```

What that looks like, we can say, import. We'll just import { multiplyTwo } from...if we look at our directory structure, we had had the math/multiplication Expand that.

main.js

```javascript
import { multiplyTwo } from `math/multiplication`;
```

Now, let's add another function to the multiplication Module. We will add three numbers together, two plus three plus four. We'll just create this. We'll call this multiplyThree().

main.js

```javascript
console.log("2 * 3 * 4", multiplyThree(2, 3, 4));
```

Now, we're going to import that the same way. We'll add it to this list here, multiplyThree. Now, let's just define that. Now, let's export that. Add it to our Exports, multiplyThree.

math/multiplication.js

```javascript
function multiplyThree(a, b, c) {
  return a * b + c;
}

export { multiplyTwo, multiplyThree };
```

We can see over here that we are importing that successfully. Now, there's a few variations of how we can accomplish both importing and our exporting. Let's take a look at maybe how we can export this little differently. You can actually export directly on a Function Definition like this. We can just say, Export, Export. I'm going to drop this and we're still reloading just the same.

math/multiplication.js

```javascript
export function multiplyTwo(a, b) { ... }

export function multiplyThree(a, b, c) { ... }
```

There's a few different ways that we can import these. Let's take a look at a few. We give this a little more breathing room. We can give each of our import statements an alias.

We can import multiplyTwo as addTwoNumbers. If we run this, we'll see that multiplyTwo is not defined. If we update this to use our alias, addTwoNumbers.

main.js

```javascript
import {
  multiplyTwo as multiplyTwoNumbers,
  multiplyThree
} from "math/multiplication";
```

Now, let's import the module as a whole. We'll just copy this path here and we'll say, Import \* as multiplication from our path. We'll drop this import statement and we just need to make a few updates here, this is going to be called multiplyTwo.

Since we're importing the module as a whole as multiplication, these are going to be on the multiplication object. Let's update these numbers just so we can see a little more change on that side.

main.js

```javascript
import * as multiplication from "math/multiplication";

console.log(
  "1 * 3",
  multiplication.multiplyTwo(1, 3) // 4
);

console.log(
  "1 * 3 * 4",
  multiplication.multiplyTwo(1, 3, 4) // 8
);
```

## Default exports (one per module)

Modules that only export single values are very popular in the Node.js community. But they are also common in frontend development where you often have classes for models and components, with one class per module. An ES6 module can pick a default export, the main exported value. Default exports are especially easy to import.

The following ECMAScript 6 module “is” a single function:

```js
//------ myFunc.js ------
export default function() {} // no semicolon!

//------ main1.js ------
import myFunc from "myFunc";
myFunc();
```

## Having both named exports and a default export in a module

The following pattern is surprisingly common in JavaScript: A library is a single function, but additional services are provided via properties of that function. Examples include jQuery and Underscore.js. The following is a sketch of Underscore as a ES6 module:

```js
//------ underscore.js ------
export default function (obj) {
    ···
}
export function each(obj, iterator, context) {
    ···
}
export { each as forEach };

//------ main.js ------
import _, { each } from 'underscore';
```

## All exporting styles

ECMAScript 6 provides several styles of exporting:

- Re-exporting:
  - Re-export everything (except for the default export):
  ```js
  export * from "src/other_module";
  ```
  - Re-export via a clause:
  ```js
  export { foo as myFoo, bar } from "src/other_module";
  export { default } from "src/other_module";
  export { default as foo } from "src/other_module";
  export { foo as default } from "src/other_module";
  ```
- Named exporting via a clause:
  ```js
  export { MY_CONST as FOO, myFunc };
  export { foo as default };
  ```
- Inline named exports:
  - Variable declarations:
  ```js
  export var foo;
  export let foo;
  export const foo;
  ```
  - Function declarations:
  ```js
  export function myFunc() {}
  export function* myGenFunc() {}
  ```
  - Class declarations:
  ```js
  export class MyClass {}
  ```
- Default export:

  - Function declarations (can be anonymous here):

  ```js
  export default function myFunc() {}
  export default function() {}

  export default function* myGenFunc() {}
  export default function*() {}
  ```

  - Class declarations (can be anonymous here):

  ```js
  export default class MyClass {}
  export default class {}
  ```

  - Expressions: export values. Note the semicolons at the end.

  ```js
  export default foo;
  export default 'Hello world!';
  export default 3 \* 7;
  export default (function () {});
  ```
