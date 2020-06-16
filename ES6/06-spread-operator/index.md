# Spread Operator

The spread operator allows you to expand an iterable, such as an array expression or string into its individual elements.

If I log out an array with [10, 20, 30] you can see I get an array, so you have the brackets with [10, 20, 30].

```javascript
console.log([10, 20, 30]); // [10, 20, 30]
```

If I put the three dots in front to say I want to spread this array and I hit run again, you can see I get 10, 20, 30 with no brackets around it.

```javascript
console.log(...[10, 20, 30]); // 10 20 30
```

This actually allows us to push elements easily into other arrays. Before if I were to do first.push(second) and log this out, you'll see, I'll get one two three and then another array inside of my array, [ 10, 20, 30, [ 1, 2, 3] ].

```javascript
let first = [10, 20, 30];
let second = [10, 20, 30];

first.push(second);

console.log(first); // [ 10, 20, 30, [ 1, 2, 3] ]
```

But instead, if I spread out the second array and push that in, you can see I get the individual items pushed in.

```javascript
first.push(...second);

console.log(first); // [10, 20, 30, 1, 2, 3]
```

I could actually duplicate that and save and you can see I get [ 10, 20, 30, 1, 2, 3, 1, 2, 3]. So I'm pushing in the individual items over and over instead of pushing in arrays.

## Common uses

Replace apply()
It is common to use Function.prototype.apply() in cases where you want to use the elements of an array as arguments to a function.

```js
function sumThree(x, y, z) {
  return x + y + z;
}
const args = [10, 20, 30];
sumThree.apply(null, args);
```

With spread syntax the above can be written as:

```js
function sumThree(x, y, z) {
  return x + y + z;
}
const args = [10, 20, 30];
myFunction(...args);
```

#### A more powerful array literal

Without spread syntax, to create a new array using an existing array as one part of it, the array literal syntax is no longer sufficient and imperative code must be used instead using a combination of push(), splice(), concat(), etc. With spread syntax this becomes much more succinct:

```js
const moreParts = ["prologue", "foreword"];
const bookParts = ["title page", ...moreParts, "dedication", "epilogue"];
//  ["title page", "prologue", "foreword", "dedication", "epilogue"]
```

Just like spread for argument lists, ... can be used anywhere in the array literal, and may be used more than once.

#### Copy an array

```js
const moreParts = ["prologue", "foreword"];
const newParts = [...moreParts]; // like arr.slice()

newParts.push("introduction");
//  newParts becomes ['prologue', 'foreword', 'introduction']
//  moreParts remains unaffected
```

#### A better way to concatenate arrays

Array.prototype.concat() is often used to concatenate an array to the end of an existing array. Without spread syntax, this is done as:

```js
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  Append all items from arr2 onto arr1
arr1 = arr1.concat(arr2);
```

With spread syntax this becomes:

```js
let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
```
