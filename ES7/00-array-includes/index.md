# Array.prototype.includes()

ES7 introduced a small amount of changes compared to the previous version. Amongst them are the Array method `includes`.

The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

```js
[1, 2, 3]
  .includes(2) // true
  [(1, 2, 3)].includes(4) // false
  [(1, 2, 3)].includes(3, 3) // false
  [(1, 2, 3)].includes(3, -1) // true
  [(1, 2, NaN)].includes(NaN); // true
```

The first parameter is the value to search for.

The second parameter is optional, called `fromIndex` and it tells the position in this array at which to begin searching for the value.
You can use `fromIndex` is greater than or equal to the array length
If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.

```js
let arr = ["a", "b", "c"];

arr.includes("c", 3); // false
arr.includes("c", 100); // false
```

If `fromIndex` is negative, the computed index is calculated to be used as a position in the array at which to begin searching for valueToFind. If the computed index is less or equal than -1 \* arr.length, the entire array will be searched.

```js
// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

let arr = ["a", "b", "c"];

arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false
```

`includes()` method is intentionally generic. It does not require this value to be an Array object, so it can be applied to other kinds of objects (e.g. array-like objects).

The example below illustrates includes() method called on the function's arguments object.

```js
(function() {
  console.log(Array.prototype.includes.call(arguments, "a")); // true
  console.log(Array.prototype.includes.call(arguments, "d")); // false
})("a", "b", "c");
```
