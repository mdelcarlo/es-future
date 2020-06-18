# Map and Weakmap

The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.

JavaScript objects and maps are very similar to each other, and before the introduction of maps in ES6, objects were used in order to keep track of different key value pairs.

However, maps does offer us a few bonuses that we don't get from objects. For example, an object has a prototype, so by default, there are keys in the map whether the user has added them or not. Secondly, an object key has to be a string, whereas in a map, it can be anything from a function, to an object, to all other types of primitives.

Lastly, maps have methods on them that allow you to easily get the size of and keep track of the size of your map, whereas to objects, there's no innate method that allows you to quickly get those answers.

The first thing that we want to do is inside of our JSBin, just go ahead and make a map. We'll just do, var myMap = new Map(). Next, let's list out the API that we'll be going over in this tutorial. We have the set() method and then the get() method, followed by the size property, as well as the clear() and has() method.

```javascript
var myMap = new Map();

// API
/*
set()
get()
size
clear()
has()
*/
```

First thing we want to do is go ahead and set some key value pairs on our new map. To do that, we'll take advantage of the set() method. We'll just do myMap.set() with a key of author and a value of John Grisham followed myMap.set() with a key of book followed by a value of The inocent man.

```javascript
myMap.set("author", "John Grisham");
myMap.set("book", "The inocent man");
```

To get an idea of what the get method does, let's go ahead and just console.log out myMap.get(author). If we come over to our console and we run this, we'll notice that John Grisham is returned. That's because that is the value associated with the author key inside of our map. If we attempt to access a value that does not exist, we'll get undefined back.

```javascript
console.log(myMap.get("author"));
```

Next, let's go ahead and look at the size property that we have available to us. If we console.log(myMap.size()) and go ahead and run the console again, we'll see that 2 is returned to us because we have two items inside of our map.

The clear method is quite self-explanatory. If we go ahead and insert a myMap.clear() above the console.log, we'll see when we run the output, we get zero back, because there's no longer any items in our map.

```javascript
myMap.set("author", "John Grisham");
myMap.set("book", "The inocent man");

myMap.clear();

console.log(myMap.size); // 0
```

Next, Let's look at the has() method available to us through the map API. If you go ahead and write has() with an argument of author, we'll see that true is returned back. If we insert a key that does not exist, such as pages, and go ahead and run that, we'll see that false is returned back.

```javascript
console.log(myMap.has("author")); // true

console.log(myMap.has("pages")); // false
```

Map gives us several iterators that we can use to go over our map to access the keys, values, and entries. Those are the keys method, the entries method, and the values method. To get an idea of what that looks like, let's go ahead and create a for-of loop in here, and we'll do for(var key of = myMap.keys(), and we'll console.log out each key.

```javascript
for(var key of = myMap.keys(){
  console.log(key)
  // "author"
  // "book"
}
```

If we clear the console and run it again, we'll see that we get author and book returned to us, because those are the two keys inside of our map.

Alternatively, we can go ahead and do a for-of loop for the values inside of our map. Let's go ahead and switch the variables so it makes a little more sense, and we'll console.log that out. We'll see that John Grisham and The inocent man is returned to use, because those are the values that are stored within our map.

```javascript
for(var key of = myMap.values(){
  console.log(value)
  // "John Grisham"
  // "The inocent man"
}
```

Lastly, we can iterate over the entries. What the entries does is it returns to us an array made of arrays where the first item in the array is the key and the second item is the value. If we do for(var [key, value] of myMap.entries()) and console.log that out, we'll see that we get author = John Grisham and book = The inocent man.

```javascript
for ([key, value] of myMap.entries()) {
  console.log(key + " = " + value);
  // "author = John Grisham"
  // "book = The inocent man"
}
```

Next, I wanted to quickly go over weakMaps in ES6. What a weakMap means is that no references are held to the keys of the map. With no references being held to the keys of the map, it allows it to be available for automatic garbage collection that's available to us in JavaScript.

Because no references are kept to the keys, that means that they are innumerable, or we cannot iterate over them. Because of this, the options of what is available for us to use as keys in our map is limited when using weakMaps.

For example, with a map, we can use anything as its key. To show that, let's create var myObject, set it equal to an empty object. var myFunction, set it equal to an anonymous function.

```javascript
var myObj = {};
var myFunc = function() {};
```

Now, in our set methods, we can swap out author and book for myObject and myFunction. We can run our output and see that the entries method shows us that we have our object and our function as the keys for var and The inocent man.

```javascript
myMap.set(myObj, "John Grisham");
myMap.set(myFunc, "The inocent man");
// "[object Object] = John Grisham"
// "function myFunc() {} = The inocent man"
```

The important thing to note is that we can also use strings for our keys. We can say set string with a value of two. We can run our output again, and we'll see that string two is given back to us as a key value store.

```javascript
myMap.set("string", 2);
// "string = 2"
```

If we go up here, and we change var myMap to a weakMap, and we run this again, we'll see that we get some errors.

The first thing we get is that we cannot use a string as a key in our weakMap. If we go ahead and get rid of that string and run the output again, we'll see that we get a new error.

This time, we see that entries is not a function. Because of the enumerable nature of our weakMaps, that means that all of these iterator API methods available to us on the map is no longer available on the weakMap.

## Why WeakMap?

A map API could be implemented in JavaScript with two arrays (one for keys, one for values) shared by the four API methods. Setting elements on this map would involve pushing a key and value onto the end of each of those arrays simultaneously. As a result, the indices of the key and value would correspond to both arrays. Getting values from the map would involve iterating through all keys to find a match, then using the index of this match to retrieve the corresponding value from the array of values.

Such an implementation would have two main inconveniences:

The first one is an O(n) set and search (n being the number of keys in the map) since both operations must iterate through the list of keys to find a matching value.
The second inconvenience is a memory leak because the arrays ensure that references to each key and each value are maintained indefinitely. These references prevent the keys from being garbage collected, even if there are no other references to the object. This would also prevent the corresponding values from being garbage collected.
By contrast, native WeakMaps hold "weak" references to key objects, which means that they do not prevent garbage collection in case there would be no other reference to the key object. This also avoids preventing garbage collection of values in the map. Native WeakMaps can be particularly useful constructs when mapping keys to information about the key that is valuable only if the key has not been garbage collected.

Because the references are weak, WeakMap keys are not enumerable. There is no method to obtain a list of the keys. If they were, the list would depend on the state of garbage collection, introducing non-determinism. If you want to have a list of keys, you should use a Map.
