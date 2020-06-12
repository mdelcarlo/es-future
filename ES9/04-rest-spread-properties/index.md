## Rest/Spread Properties

ES6 introduced the concept of a rest element when working with array destructuring:

```js
const numbers = [1, 2, 3, 4, 5]
[first, second, ...others] = numbers
```

and spread elements:

```js
const numbers = [1, 2, 3, 4, 5];
const sum = (a, b, c, d, e) => a + b + c + d + e;
const sumOfNumbers = sum(...numbers);
```

ES2018 introduces the same but for objects.

Rest properties:

```js
const { first, second, ...others } = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5
};

first; // 1
second; // 2
others; // { third: 3, fourth: 4, fifth: 5 }
```

Spread properties allow to create a new object by combining the properties of the object passed after the spread operator:

```js
const items = { first, second, ...others };
items; //{ first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
```
