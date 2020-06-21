# Rest parameters

A function can be called with any number of arguments, no matter how it is defined.

Like here:

```js
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2, 3, 4, 5));
```

There will be no error because of “excessive” arguments. But of course in the result only the first two will be counted.

The rest of the parameters can be included in the function definition by using three dots ... followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array”.

For instance, to gather all arguments into array args:

```js
function sumAll(...args) {
  // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log(sumAll(1));
console.log(sumAll(1, 2));
console.log(sumAll(1, 2, 3));
```

We can choose to get the first parameters as variables, and gather only the rest.

Here the first two arguments go into variables and the rest go into titles array:

```js
function showName(firstName, lastName, ...titles) {
  console.log(firstName + " " + lastName); // Julius Caesar
  console.log(titles[0]); // Consul
  console.log(titles[1]); // Imperator
  console.log(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");
```

The rest parameters must be at the end
The rest parameters gather all remaining arguments, so the following does not make sense and causes an error:

```js
function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
// error
}
```

The ...rest must always be last.

The “arguments” variable
There is also a special array-like object named arguments that contains all arguments by their index.

For instance:

```js
function showName() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);

  // it's iterable
  // for(let arg of arguments) console.log(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");
```

In old times, rest parameters did not exist in the language, and using arguments was the only way to get all arguments of the function. And it still works, we can find it in the old code.

But the downside is that although arguments is both array-like and iterable, it’s not an array. It does not support array methods, so we can’t call arguments.map(...) for example.

Also, it always contains all arguments. We can’t capture them partially, like we did with rest parameters.

So when we need these features, then rest parameters are preferred.

Arrow functions do not have "arguments"
If we access the arguments object from an arrow function, it takes them from the outer “normal” function.

Here’s an example:

```js
function f() {
  let showArg = () => console.log(arguments[0]);
  showArg();
}

f(1); // 1
```

As we remember, arrow functions don’t have their own this. Now we know they don’t have the special arguments object either.

## Summary

When we see "..." in the code, it is either rest parameters or the spread syntax.

There’s an easy way to distinguish between them:

When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.
Use patterns:

- Rest parameters are used to create functions that accept any number of arguments.
- The spread syntax is used to pass an array to functions that normally require a list of many arguments.
- Together they help to travel between a list and an array of parameters with ease.

All arguments of a function call are also available in “old-style” arguments: array-like iterable object.
