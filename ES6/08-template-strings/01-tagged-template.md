# Tagged template

A more advanced form of template literals are tagged templates.

Tags allow you to parse template literals with a function. The first argument of a tag function contains an array of string values. The remaining arguments are related to the expressions.

The tag function can then perform whatever operations on these arguments you wish, and return the manipulated string. (Alternatively, it can return something completely different, as described in one of the following examples.)

The name of the function used for the tag can be whatever you want.

```js
let book = "Meditations";
let pages = 93;

function myVehicleTag(strings, bookExp, pagesExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "

  // There is technically a string after
  // the final expression (in our example),
  // but it is empty (""), so disregard.
  // let str2 = strings[2];

  let pagesStr;
  if (pagesExp < 100) {
    pagesStr = "small book";
  } else (pagesExp < 300) {
    pagesStr = "medium book";
  } else {
    pagesStr = "big book";
  }

  // We can even return a string built using a template literal
  return `${str0}${bookExp}${str1}${pagesStr}`;
}

let output = myVehicleTag`That ${book} is a ${pages}`;

console.log(output);
// That Meditations is a small book
```

Tag functions don't even need to return a string!

```js
function replaceValues(strings, ...keys) {
  return function(...values) {
    let dict = values[values.length - 1] || {};
    let result = [strings[0]];
    keys.forEach(function(key, i) {
      let value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

let firstReplacement = replaceValues`${1}${4}${0}${3}${2}!!`;
firstReplacement("L", "H", "O", "L", "E"); // "HELLO!!"
let secondReplacement = replaceValues`${0} bought ${"book"}`;
secondReplacement("John", { book: "Sapiens" }); // John bought Sapiens
```
