# Arrow function

A shortcut for creating anonymous functions with `this` scope bound.

Let's rewrite this searchBook function to the arrow function style. Let's say searchBook is numA numB and then the fat arrow with some braces and return book.find(name,author). Now, that actually looks about the same.

```javascript
var searchBook = function(name, author) {
  return book.find(name, author);
};

var arrowSearchBook = (name, author) => {
  return book.find(name, author);
};
```

The only difference really is that this is on the right side, whereas the function keyword is on the left side, so that'd be here, whereas this would go here. But we can actually make this much smaller.

First, let's remove the braces. I'll remove him, remove him, and move everything up the same line and remove the return keyword. This will automatically return book.find(name,author). You don't have to write the return keyword when you don't have the braces in there.

```javascript
var arrowSearchBook = (name, author) => book.find(name, author);
```

Second, if there's only one parameter, like you only take in one name, you can actually get rid of the surrounding parens here and just say name would return name, or name would return 3, or whatever you want it to return. That's why you'll see something like var squared is X, which returns X \* X to be X squared.

```javascript
var arrowSearchBook = name => book.find(name);

var squared = x => x * x;
```

An extremely common scenario that you've probably run into before whether though click handlers or anything else is that, you write a function to handle some sort of action and you write the body of the function, and you run into the scenario where you'll assign that = this because you actually want to get the timesSold off of the parent scope.

```javascript
var atlasBook = {
  name: "Atlas shruged",
  year: 1930,
  timesSold: 2000000,

  handleAddTimesSold: function(times, add) {
    add(times);
  },

  updateTimesSold: function() {
    var that = this;

    this.handleAddTimesSold(3, function(times) {
      that.timesSold;

      console.log(times + that.timesSold);
    });
  }
};
atlasBook.updateTimesSold();
```

Years doesn't exist inside of this scope so we have to do the that is this, and then, to get this in here, you refer to that. It can get pretty confusing.

Now, the arrow function actually helps handle this scenario. I'm going to delete the function keyword. I'll use the arrow function syntax. Then, that here can just become this. I can delete this line, delete that, and this now refers to the outer scope outside of this function because it's passing in this lexical scope that's coming in from above the function.

```javascript
updateTimesSold: function () {
    this.handleAddTimesSold(3, (times) => {
        console.log(times + this.timesSold);
    })
}
```

this is no longer referring to the scope inside of the function. It's referring to the scope that's outside of the function.

Again, if you'd prefer to do this in one line of code, we can delete this brace and bring everything up a line. We can delete the semicolon and delete the closing brace. We can remove the paren from here and handle this nicely in a simple one-liner.

```javascript
updateTimesSold: function () {
  this.handleAddTimesSold( 3, times => console.log(times + this.timesSold))
}
```

When I run this, you can see it prints out 20000003 because this is actually this handler right here and it's getting this timesSold through here, which is coming from here. When the timesSold goes here to here to here, down into our arrow function, I add it to this timesSold, and this.timesSold is this timesSold now...
