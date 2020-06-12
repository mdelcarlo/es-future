# Object.fromEntries()

The Object.fromEntries() method transforms a list of key-value pairs into an object.

```js
const entries = new Map([
  ["foo", "bar"],
  ["baz", 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }
```

The Object.fromEntries() method takes a list of key-value pairs and returns a new object whose properties are given by those entries. The iterable argument is expected to be an object that implements an @@iterator method, that returns an iterator object, that produces a two element array-like object, whose first element is a value that will be used as a property key, and whose second element is the value to associate with that property key.

Object.fromEntries() performs the reverse of Object.entries().

## Converting a Map to an Object

With `Object.fromEntrie`s, you can convert from Map to Object:

```js
const map = new Map([
  ["foo", "bar"],
  ["baz", 42]
]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

## Converting an Array to an Object

With `Object.fromEntries`, you can convert from Array to Object:

```js
const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"]
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }
```

## Object transformations

With `Object.fromEntries`, its reverse method Object.entries(), and array manipulation methods, you are able to transform objects like this:

```js
const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1).map(([key, val]) => [key, val * 2])
);

console.log(object2);
// { a: 2, b: 4, c: 6 }
```
