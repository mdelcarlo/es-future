# For of loops

If you have been programming JavaScript for a while, you might have been familiar with the for-each loop and the for-in loop. Here, I will introduce you to a new kind of loop called as a for-of loop.

The for-of loop was introduced in ES6 as an alternative to the for-in and the for-each loops. It lets you iterate over a booksToLove object, and returns each object's value into the variable.

Though the for-in loop and the for-of loop look similar, they're fundamentally different. We can test this out using an example.

```js
const booksToLove = ["Think fast and slow", "Fountainhead", "Art of war"];

for (var result in booksToLove) {
  console.log(result);
}

console.log("-----------------");

for (var result in booksToLove) {
  console.log(result);
}
```

First, we'll start with the for-in loop. We'll get the variable as result from our booksToLove object, and we'll simply log it into our console.

Let's make a separation between them, and then we'll go ahead and test our for-of loop. Here also, we'll do the same thing. We'll log the result.

If you open our terminal and our index file, you can see that the outputs are totally different. That is because the for-in loop iterates through all the innumerable properties of an object, while the for-of loop operates a bit differently.

We can use the for of loop with strings

```js
const name = "John";
for (var letter in name) {
  console.log(letter);
}
```

we are going to log each char separated.

And finally we can use it to iterate over Maps and sets

Lets se an example with map

Pre ES6:

```js
Use any of the answers below, e.g.:

for (var m in myMap){
    for (var i=0;i<myMap[m].length;i++){
    ... do something with myMap[m][i] ...
    }
}
```

For ES6 (ES 2015):

You should use a Map object, which has the entries() function:

```js
var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

for (const [key, value] of myMap.entries()) {
  console.log(key, value);
}
```
