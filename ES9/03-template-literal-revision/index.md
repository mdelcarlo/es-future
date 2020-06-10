# Template literal revision

When a template literal (${food} is tasty) is immediately preceded by an expression (fn'${food} is tasty'), it is called a tagged template literal. A tagged template comes in handy when you want to parse a template literal with a function(fn). Consider:

```js
function fn(string, substitute) {
  if (substitute === "fruits") {
    substitute = "fried sweet potatoes";
  }
  return substitute + string[1];
}
const food = "fruits";
const result = fn`${food} are tasty!`;
console.log(result); // Prints fried sweet potatoes are tasty!
```

It has problems with escape sequences like hex (\x), unicode (\u), or octal (\ followed by a digit). Strings like C:\xxx or \ubuntu are considered invalid escape sequences and throws a SyntaxError.
With ES2018 revision, each illegal sequence is undefined

```js
function fn(string, substitute) {
  console.log(substitute); // Prints escape sequences:
  console.log(string[1]); // Prints undefined
}
const str = "escape sequences:";
const result = fn`${str} \ubuntu C:\xxx\uuu`;
```

Keep in mind that using illegal escape sequences in a regular template literal still causes an error:

```js
const result = `\ubuntu`; // SyntaxError: Invalid Unicode escape sequence
```
