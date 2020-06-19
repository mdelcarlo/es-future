# Symbol.prototype.description

The read-only description property is a string returning the optional description of Symbol objects.

```js
console.log(Symbol("car").description);
// expected output: "car"

console.log(Symbol.iterator.description);
// expected output: "Symbol.iterator"

console.log(Symbol.for("bike").description);
// expected output: "bike"

console.log(`${Symbol("bike").description}bar`);
// expected output: "foobar"
```

Symbol objects can be created with an optional description which can be used for debugging but not to access the symbol itself. The Symbol.prototype.description property can be used to read that description. It is different to Symbol.prototype.toString() as it does not contain the enclosing "Symbol()" string. See the examples.

```js
Symbol("car").toString(); // "Symbol(car)"
Symbol("car").description; // "car"
Symbol("").description; // ""
Symbol().description; // undefined

// well-known symbols
Symbol.iterator.toString(); // "Symbol(Symbol.iterator)"
Symbol.iterator.description; // "Symbol.iterator"

// global symbols
Symbol.for("bike").toString(); // "Symbol(bike)"
Symbol.for("bike").description; // "bike"
```

When you want to have collision free string you can use symbol description property cause

```js
Symbol("ES10") === Symbol("ES10"); // false
```
