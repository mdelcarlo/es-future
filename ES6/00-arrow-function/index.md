# Arrow function

A shortcut for creating anonymous functions with `this` scope bound.

Let's rewrite this sum function to the arrow function style. Let's say sum is numA numB and then the fat arrow with some braces and return numA + numB. Now, that actually looks about the same.

```javascript
var sum = function(numA, numB) {
  return numA + numB;
};

var arrowSum = (numA, numB) => {
  return numA + numB;
};
```

The only difference really is that this is on the right side, whereas the function keyword is on the left side, so that'd be here, whereas this would go here. But we can actually make this much smaller.

First, let's remove the braces. I'll remove him, remove him, and move everything up the same line and remove the return keyword. This will automatically return numA + numB. You don't have to write the return keyword when you don't have the braces in there.

```javascript
var arrowSum = (numA, numB) => numA + numB;
```

Second, if there's only one parameter, like you only take in one num, you can actually get rid of the surrounding parens here and just say num would return num, or num would return 3, or whatever you want it to return. That's why you'll see something like var squared is X, which returns X \* X to be X squared.

```javascript
var arrowSum = num => num;


var squared = x => x * x;
```

An extremely common scenario that you've probably run into before whether though click handlers or anything else is that, you write a function to handle some sort of action and you write the body of the function, and you run into the scenario where you'll assign that = this because you actually want to get the age off of the parent scope.

```javascript
var grandma = {
  name: "Judith",
  age: 60,

  handleAddYears: function(years, add) {
    add(years);
  },

  updateAge: function() {
    var that = this;

    this.handleAddYears(3, function(years) {
      that.age;

      console.log(years + that.age);
    });
  }
};
grandma.updateAge();
```

Years doesn't exist inside of this scope so we have to do the that is this, and then, to get this in here, you refer to that. It can get pretty confusing.

Now, the arrow function actually helps handle this scenario. I'm going to delete the function keyword. I'll use the arrow function syntax. Then, that here can just become this. I can delete this line, delete that, and this now refers to the outer scope outside of this function because it's passing in this lexical scope that's coming in from above the function.

```javascript
updateAge: function () {
    this.handleAddYears(3, (years) => {
        console.log(years + this.age);
    })
}
```

this is no longer referring to the scope inside of the function. It's referring to the scope that's outside of the function.

Again, if you'd prefer to do this in one line of code, we can delete this brace and bring everything up a line. We can delete the semicolon and delete the closing brace. We can remove the paren from here and handle this nicely in a simple one-liner.

```javascript
updateAge: function () {

this.handleAddYears( 3, years => console.log(years + this.age))
}
```

When I run this, you can see it prints out 63 because this is actually this handler right here and it's getting this age through here, which is coming from here. When the age goes here to here to here, down into our arrow function, I add it to this age, and this.age is this age now...
