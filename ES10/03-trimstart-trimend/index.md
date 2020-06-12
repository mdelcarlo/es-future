# TrimStart and TrimEnd

JavaScript trim methods are used to remove spaces from string and specially trimStart() method is used to remove spaces from the start of the string. For example:

## trimStart Example

```JavaScript
var greeting = '   Hello ES10 adventurer   ';
console.log(greeting);
// expected output: "   Hello ES10 adventurer   ";
console.log(greeting.trimStart());
// expected output: "Hello ES10 adventurer   ";
```

​
In the above example we have a variable called greeting that holds a string value that has spaces in start and the end. Then we used `trimStart()` to remove the spaces from the start of the string.

Do you know there is an alias of `trimStart()` is called `trimLeft()` that also works the same as `trimStart()`. For example:

## trimLeft Example

```JavaScript
var greeting = '   Hello ES10 adventurer   ';
console.log(greeting);
// expected output: "   Hello ES10 adventurer   ";
console.log(greeting.trimLeft());
// expected output: "Hello ES10 adventurer   ";
```

```JavaScript
1
str.trimStart();
2
str.trimLeft();
```

Return value of trimStart
It returns a new string with removed whitespace from its beginning (left end).

## trimEnd Method

Javascript trimEnd method is used to remove spaces from the end of the string. For example:

### trimEnd Example

```JavaScript
var greeting = '   Hello ES10 adventurer   ';
console.log(greeting);
// expected output: "   Hello ES10 adventurer   ";
console.log(greeting.trimEnd());
// expected output: "   Hello ES10 adventurer";
```

In the above example we have a variable called greeting that holds a string value that has spaces in start and the end. Then we used `trimEnd()` to remove the spaces from the end of the string.

`trimEnd()` also has an alias is called `trimRight()` that also works the same as trimEnd(). For example:

### trimRight Example

```JavaScript
var greeting = '   Hello ES10 adventurer   ';
console.log(greeting);
// expected output: "   Hello ES10 adventurer   ";
console.log(greeting.trimRight());
// expected output: "   Hello ES10 adventurer";
var greeting = '   Hello ES10 adventurer   ';
console.log(greeting);
// expected output: "   Hello ES10 adventurer   ";
console.log(greeting.trimRight());
// expected output: "   Hello ES10 adventurer";
```
