# Let keyword

Let is a variable block-scoped binding construct. `let` is the new `var`.

A long-standing gotcha with JavaScript is how var works. If I have this age assigned to 5, and I have this age assigned to 18, you'd probably think, "This one's inside of a block so it should have no impact on what this age does up here." But if I run this, you'll actually see that that isn't the case. 18 is being logged out because this is the same age, and it's being reassigned to 18.

```javascript
var age = 15;
{
  var age = 18;
}

console.log(age); // 18
```

ES5 does have function scoping, so if I were to create a function and lock it inside of there, then it wouldn't have any impact, and I would get 15. But if I were to create a for loop, or some other thing that could use a block, then that wouldn't work, and I get the same result as logging out, 18, each time.

```javascript
var age = 15;

function greet() {
  var age = 18;
}

console.log(age); // 15
```

To help with this problem, we do have let in ES6, which will allow me to use block scoping.

```javascript
let age = 15;
{
  let age = 18;
}

console.log(age); // 15
```

If I rerun this, you'll see that we still get 15, even though we have age here, and age here. This age, because it's inside of a block, even though it's not inside of a function, has no impact on the assignment of this age. They are two separate and different entities.

Let's explore this behavior in a bit more detail by creating an array of functions, and a loop where we say var num is assigned to 0, num < 10, and num is incremented, so num++.

```javascript
var newArray = [];
for (var num = 0; num < 10; num++) {
  newArray.push(function() {
    console.log(num);
  });
}
```

Then we will add a new function to our array each time we go through, which will store num, and log it out for us. If we loop through the array of functions using a forEach, which will pass in fun, and then invoke fun().

```javascript
newArray.forEach(function(fun) {
  fun(); // 10 10 10 10 10 10 10 10 10 10
});
```

This function which is being passed in through our forEach is simply this function storing our num. You'd think that we'd get zero through 9, but in fact when we run this we'll get 10's, because this num is that same num being used and reassigned each time.

If I use let instead of var now, and rerun this, you'll see that I get zero through 9, and it stops before getting to 10, because this is creating a new num each time you go through the for loop.

```javascript
var newArray = [];
for (let num = 0; num < 10; num++) {
  newArray.push(function() {
    console.log(num); // 0 1 2 3 4 5 6 7 8 9
  });
}
```

Actually when using ES6 and you want to use a variable avoiding the hoisting behaviour you can use `let` instead.
