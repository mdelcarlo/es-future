# Rest/Spread properties:

The last arguments sent to a function are changed to an array using Rest parameters and the (...) notation can be used only for array operations.

```js
restParams(1, 2, 3, 4, 5);

function restParams(p1, p2, ...p3) {
  // p1 = 1
  // p2 = 2
  // p3 = [3, 4, 5]
}
```

In an opposite manner, an array is turned into separate arguments using the spread operator. These arguments can be transferred to a function.

```js
const numbers = [9, 90, 10, 103, -2];

console.log(Math.max(...numbers)); // 103
```
