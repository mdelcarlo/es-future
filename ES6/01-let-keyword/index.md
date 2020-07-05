# Let keyword

Let is a variable block-scoped binding construct. `let` is the new `var`.

A long-standing gotcha with JavaScript is how var works. If I have this bookTitle assigned to Anthem, and I have this bookTitle assigned to The fountainhed'', you'd probably think, "This one's inside of a block so it should have no impact on what this bookTitle does up here." But if I run this, you'll actually see that that isn't the case. The fountainhed'' is being logged out because this is the same bookTitle, and it's being reassigned to The fountainhed''.

```javascript
var bookTitle = "Anthem";
{
  var bookTitle = "The fountainhed";
}

console.log(bookTitle); // 'The fountainhed'
```

ES5 does have function scoping, so if I were to create a function and lock it inside of there, then it wouldn't have any impact, and I would get 'Anthem'. But if I were to create a for loop, or some other thing that could use a block, then that wouldn't work, and I get the same result as logging out, The fountainhed'', each time.

```javascript
var bookTitle = "Anthem";

function greet() {
  var bookTitle = "The fountainhed";
}

console.log(bookTitle); // 'Anthem'
```

To help with this problem, we do have let in ES6, which will allow me to use block scoping.

```javascript
let bookTitle = "Anthem";
{
  let bookTitle = "The fountainhed";
}

console.log(bookTitle); // 'Anthem'
```

If I rerun this, you'll see that we still get 'Anthem', even though we have bookTitle here, and bookTitle here. This bookTitle, because it's inside of a block, even though it's not inside of a function, has no impact on the assignment of this bookTitle. They are two separate and different entities.

Let's explore this behavior in a bit more detail by creating an array of functions, and a loop where we say var num is assigned to 0, num < 10, and num is incremented, so num++.

```javascript
var numbersArray = [];
for (var num = 0; num < 10; num++) {
  numbersArray.push(function() {
    console.log(num);
  });
}
```

Then we will add a new function to our array each time we go through, which will store num, and log it out for us. If we loop through the array of functions using a forEach, which will pass in fun, and then invoke fun().

```javascript
numbersArray.forEach(function(fun) {
  fun(); // 10 10 10 10 10 10 10 10 10 10
});
```

This function which is being passed in through our forEach is simply this function storing our num. You'd think that we'd get zero through 9, but in fact when we run this we'll get 10's, because this num is that same num being used and reassigned each time.

If I use let instead of var now, and rerun this, you'll see that I get zero through 9, and it stops before getting to 10, because this is creating a new num each time you go through the for loop.

```javascript
var numbersArray = [];
for (let num = 0; num < 10; num++) {
  numbersArray.push(function() {
    console.log(num); // 0 1 2 3 4 5 6 7 8 9
  });
}
```

Actually when using ES6 and you want to use a variable avoiding the hoisting behaviour you can use `let` instead.
