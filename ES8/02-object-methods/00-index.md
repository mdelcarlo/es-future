# New object methods

The `Object.entries()` method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop. (The only important difference is that a for...in loop enumerates properties in the prototype chain as well).

```js
const dog = {
  name: "fido",
  eyes: 2,
  legs: 4
};

Object.entries(dog); //[["name", "fido"], ["eyes", 2], ["legs", 4]]
```

You can iterate through each entry with foreach

```js
Object.entries(dog).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// output
// "name: fido"
// "eyes: 2"
// "legs: 4"
```

The `Object.values()` method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)

```js
Object.values(dog); // ["fido", 2, 4]
```

Its use become valuable when you have array-like objects

```js
// Array-like object
const arrayLikeAnimals = { 0: "dog", 1: "cat", 2: "mouse" };
console.log(Object.values(arrayLikeObj1)); // ['dog', 'cat', 'mouse']
```

The `Object.getOwnPropertyDescriptor()` method returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.

```js
const dogNameDescriptor = Object.getOwnPropertyDescriptor(dog, "name");

console.log(dogNameDescriptor); // { value: "fido", writable: true, enumerable: true, configurable: true }
```
