# Symbols

Symbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined.

It’s a very peculiar data type. Once you create a symbol, its value is kept private and for internal use.

All that remains after the creation is the symbol reference.

You create a symbol by calling the Symbol() global factory function:

```js
const mySymbol = Symbol();
```

Every time you invoke Symbol() we get a new and unique symbol, guaranteed to be different from all other symbols:

```js
Symbol() === Symbol(); //false
```

You can pass a parameter to Symbol(), and that is used as the symbol description, useful just for debugging purposes:

```js
console.log(Symbol()); //Symbol()
console.log(Symbol("Some book")); //Symbol(Some book)
```

Symbols are often used to identify object properties.

Often to avoid name clashing between properties, since no symbol is equal to another.

Or to add properties that the user cannot overwrite, intentionally or without realizing.

```js
const CATEGORY = Symbol();
const book = {
  [CATEGORY]: "Sports"
};

book[CATEGORY]; //'Sports'

const TITLE = Symbol();
book[TITLE] = () => "Extreme ownership";
console.log(book[TITLE]()); //'Extreme ownership'
```

Symbols are not enumerated, which means that they do not get included in a for..of or for..in loop ran upon an object.

Symbols are not part of the `Object.keys()` or `Object.getOwnPropertyNames()` result.

You can access all the symbols assigned to an object using the `Object.getOwnPropertySymbols()` method.
