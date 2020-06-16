# Rest parameters

The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

If we take a look at the arguments keyword in ES5. What the arguments keyword does is return back to us an array like object of all the arguments that we're passing to our function. To see a simple example of this, let's go ahead and create myfunc(), and just console log out the arguments keyword of that function. Down below we'll call myfunc with arguments one, two, three, and run that to see what the console output is.

```javascript
function logArgs() {
  console.log(arguments);
}

logArgs(1, 2, 3);
//[object Arguments] {
//  0: 1,
//  1: 2,
//  2: 3
//}
```

As you can see, we're returned back an array like object with all of the arguments that were passed into the function. Because it is array like, there's certain properties that are available to us on the arguments keyword that are also available to us on an array.

For example, in our console log, let's go ahead and add the .length. Run the function again, and we'll see that 3, the length of our array like arguments, is returned back to us. It's important to note that most methods available to us on arrays are not available to us on the arguments keyword.

```javascript
function logArgs() {
  console.log(arguments.length); // 3
}

logArgs(1, 2, 3);
```

For example, let's do a forEach() on the arguments. In our callback function, we have our value, index, and array parameters. Let's just console log out the value for each loop. If we run this again, we'll see that arguments.forEach() is not a function. That's because while arguments is array like, it does not have all of the methods that the array prototype has on it.

```javascript
function logArgs() {
  arguments.forEach(function(arg) {
    console.log(arg); // TypeError: arguments.forEach is not a function
  });
}

logArgs(1, 2, 3);
```

To show an example of how we worked around this in ES5, and how rest parameters mean that we don't have to anymore, let's create a new constructor. We'll call this constructor library, and in it we'll return an object with some methods.

The first one will be the add method, and what this will do is add new items to something inside of our library. Let's create var isle, and we'll have some categories like fiction and sport which have arrays of all the fictions and sport in that categories.

```javascript
function Library() {
  var categories = {
    history: [],
    sport: []
  };
  return {
    //Library().add('category', 'item1', 'item2');
    add: function(category) {},
    categories: categories
  };
}
```

Let's return that back to us as well, so we can access it from outside the constructor, and inside of our add method we'll have a function that takes this specific categories as the first parameter, and then all the items we're adding to that categories as the remaining parameters.

In the past, with ES5 the way that we turned our array like arguments into an actual array was to use the splice call hack. The way we did this was we called splice on an array, and then we called it with our arguments, starting with the first index. What this does is exclude the category argument, but takes the remaining arguments, and puts them into an array that we've called items. If we console log out items in this function, we can see the array that's created.

```javascript
return {
  //Library().add('category', 'item1', 'item2');
  add: function(category) {
    var items = [].splice.call(arguments, 1);
    console.log(items);
  }
};
```

Let's create a new instance of this constructor, and we'll call it cityMarket. Down below we'll call cityMarket.add(), and we'll be adding to the fiction categories Animal Farm and To Kill A Mockingbird. If we clear out our console, and run this again, we'll see that Animal Farm and To Kill A Mockingbird are the fictions inside the items array.

```javascript
var cityMarket = new Library();

cityMarket.add("fiction", "Animal Farm", "To Kill A Mockingbird");
```

Now that we have an array, we can call forEach on it, and with our value index, and array arguments, we're going to go ahead and push all of these new fictions to the fictions category.

```javascript
return {
  //Library().add('category', 'item1', 'item2');
  add: function(category) {
    var items = [].splice.call(arguments, 1);
    console.log(items);
    items.forEach(function(value, index, array) {
      categories[category].push(value);
    });
  }
};
```

After calling add on our new grocery library, we can access the categories, and see that the fiction categories has Animal Farm and To Kill A Mockingbird added to it.

```javascript
cityMarket.add('fiction', 'Animal Farm', 'To Kill A Mockingbird');
console.log(cityMarket.categories;)
  // [object Object] {
  //  fiction: ["Animal Farm", "To Kill A Mockingbird"],
  //  history: [],
  //  sport: [],
  //}
```

Now let's simplify this with the new rest parameters of ES6. The way that we access this is by doing three dots, followed by the variable we want to represent the array of the remaining arguments.

Because this is already an array, we don't have to transform our array like arguments into an actual array, so we can just console out items, run this again, and see that we get an array of Animal Farm and To Kill A Mockingbird immediately. We can also see that our fiction sector has the Animal Farm and To Kill A Mockingbird items inside of the array.

```javascript
return {
  //Library().add('category', 'item1', 'item2');
  add: function(category, ...items) {
    //   var items = [].splice.call(arguments, 1);
    console.log(items); // ["Animal Farm", "To Kill A Mockingbird"]
    items.forEach(function(value, index, array) {
      categories[category].push(value);
    });
  }
};
```

All arguments declared before the rest parameters will be represented by those variables, however, any remaining arguments will be inserted into the new rest array. Because of this, we don't have to remove category from our array, as it is already not included.
