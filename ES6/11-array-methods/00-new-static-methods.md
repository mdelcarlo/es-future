# New Static Array methods

The Array object in ES6 has come with new methods that are really handy, help us write a little bit more readable code, as well as replace our use of other libraries like lodash or underscore.

### Array.from(arrayLike, mapFunc?, thisArg?)

Array.from()’s basic functionality is to convert two kinds of values to Arrays:

Array-like values, which have a property length and indexed elements. Examples include the results of DOM operations such as document.getElementsByClassName().
Iterable values, whose contents can be retrieved one element at a time. Strings and Arrays are iterable, as are ECMAScript’s new data structures Map and Set.
The following is an example of converting an Array-like object to an Array:

```js
const arrayLike = { length: 2, 0: "a", 1: "b" };

// for-of only works with iterable values
for (const x of arrayLike) {
  // TypeError
  console.log(x);
}

const arr = Array.from(arrayLike);
for (const x of arr) {
  // OK, iterable
  console.log(x);
}
// Output:
// a
// b
```

### Array.of(...items)

Array.of(item_0, item_1, ···) creates an Array whose elements are item_0, item_1, etc.

If you want to turn several values into an Array, you should always use an Array literal, especially since the Array constructor doesn’t work properly if there is a single value that is a number (more information on this quirk):

```js
new Array(3, 11, 8); // [ 3, 11, 8 ]
new Array(3); // [ , , ,]
new Array(3.1); // RangeError: Invalid array length
```

But how are you supposed to turn values into an instance of a sub-constructor of Array then? This is where Array.of() helps (remember that sub-constructors of Array inherit all of Array’s methods, including of()).

```js
class MyArray extends Array {}
console.log(MyArray.of(3, 11, 8) instanceof MyArray); // true
console.log(MyArray.of(3).length === 1); // true
```
