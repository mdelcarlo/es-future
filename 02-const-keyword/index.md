# Const keyword

Const is a read only block-scoped binding construct.

As a developer coding in JavaScript with ES5, if you want to declare a variable whose value has to remain constant, it's a best practice to name that variable in all upper case letters. This doesn't actually prevent the variable from being reassigned to a different value, but is more like a note to other developers, saying, "Hey, this is my intention."

```javascript
var GREETING = "hello es6";
GREETING = "hello es5";
console.log(GREETING);
```

Notice how if I console log out value, what is returned to us is hello es5, because that's the last assignment that was given to that variable.

ECMAScript 2015 introduces us to constant declaration, a const declaration allows us to declare a variable that is read only.

```javascript
const GREETING = "hello es6";
GREETING = "hello es5";
console.log(GREETING);
```

In the example if I try to reassign the value to hello es5, we'll see the value is read only error thrown, because we have declared this variable as a constant. It's important to understand that what a const is, is not actually a constant variable, but a constant reference.

Read Only Error

In the example, I have declared value to be an object. Down below, I can assign and reassign properties of that object without breaking my const rules. If I console.log() out value, we'll see an object with a key-value pair of greeting: hello returned to us. However, if I try to reassign the value of greeting to just the string literal hello, our value is read only error is once again thrown, because I have changed the reference of this const declaration. There are many common use cases for why you might want to use a const in your application.

Perhaps you're using a third-party API, where you want to specify an API key, an API secret that will remain constant throughout the use of your application. Some other common use cases include assigning a port number in a node application, perhaps creating a margin that is used for profit and loss calculations within an application, or maybe you just want a constant reference to pi, which you know will not change.

Another important thing to note is that like let declaration,const declarations adhere to block scope. Block scope can simply be understood as anything between two curly brackets. In the example, if true `{ const greeting = hello }`, and then outside of those curly brackets I try to `console.log(greeting)`, we will see the error greeting is not defined. This is because the console.log is outside of the scope of the const declaration.

```javascript
if (true) {
  const greeting = "hello";
}
console.log("greeting: ", greeting); // greeting is not defined
```

However if we move the console.log within that block scope, we'll see that hello is returned.

```javascript
if (true) {
  const greeting = "hello";
  console.log("greeting: ", greeting);
}
```
