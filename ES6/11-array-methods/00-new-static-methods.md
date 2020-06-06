# Iterators and for-of loop

During the beginings of js you would iterate arrays like the following:

```js
var carsToLove = ["ferrari", "maseratti", "bmw"];
for (var index = 0; index < carsToLove.length; index++) {
  console.log(carsToLove[index]);
}
```

Since ES5, you can use the built-in forEach method:

```js
carsToLove.forEach(function(cars) {
  console.log(cars);
});
```

This is a little shorter, but there is one minor drawback: you can’t break out of this loop using a break statement or return from the enclosing function using a return statement.

It sure would be nice if there were just a for-loop syntax that looped over array elements.

How about a for–in loop?

```js
for (var index in carsToLove) {
  // don't actually do this
  console.log(carsToLove[index]);
}
```

This is a bad idea for several reasons:

The values assigned to index in this code are the strings "0", "1", "2" and so on, not actual numbers. Since you probably don’t want string arithmetic ("2" + 1 == "21"), this is inconvenient at best.
The loop body will execute not only for array elements, but also for any other expando properties someone may have added. For example, if your array has an enumerable property carsToLove.name, then this loop will execute one extra time, with index == "name". Even properties on the array’s prototype chain can be visited.
Most astonishing of all, in some circumstances, this code can loop over the array elements in an arbitrary order.
In short, for–in was designed to work on plain old Objects with string keys. For Arrays, it’s not so great.

## The mighty for-of loop

Remember last week I promised that ES6 would not break the JS code you’ve already written. Well, millions of Web sites depend on the behavior of for–in—yes, even its behavior on arrays. So there was never any question of “fixing” for–in to be more helpful when used with arrays. The only way for ES6 to improve matters was to add some kind of new loop syntax.

And here it is:

```js
for (var cars of carsToLove) {
  console.log(cars);
}
```

Hmm. After all that build-up, it doesn’t seem all that impressive, does it? Well, we’ll see whether for–of has any neat tricks up its sleeve. For now, just note that:

this is the most concise, direct syntax yet for looping through array elements
it avoids all the pitfalls of for–in
unlike forEach(), it works with break, continue, and return
The for–in loop is for looping over object properties.

The for–of loop is for looping over data—like the values in an array.

But that’s not all.

Other collections support for-of too
for–of is not just for arrays. It also works on most array-like objects, like DOM NodeLists.

It also works on strings, treating the string as a sequence of Unicode characters:

```js
for (var character of "my beatiful dog") {
  alert(character);
}
```

It also works on Map and Set objects.

Oh, I’m sorry. You’ve never heard of Map and Set objects? Well, they are new in ES6. We’ll do a whole post about them at some point. If you’ve worked with maps and sets in other languages, there won’t be any big surprises.

For example, a Set object is good for eliminating duplicates:

```js
// make a set from an array of words
var uniqueWords = new Set(words);
```

Once you’ve got a Set, maybe you’d like to loop over its contents. Easy:

```js
for (var word of uniqueWords) {
  console.log(word);
}
```

A Map is slightly different: the data inside it is made of key-value pairs, so you’ll want to use destructuring to unpack the key and value into two separate variables:

```js
for (var [key, value] of phoneBookMap) {
  console.log(key + "'s phone number is: " + value);
}
```

for–of does not work with plain old Objects, but if you want to iterate over an object’s properties you can either use for–in (that’s what it’s for) or the builtin Object.keys():

```js
// dump an object's own enumerable properties to the console
for (var key of Object.keys(someObject)) {
  console.log(key + ": " + someObject[key]);
}
```
