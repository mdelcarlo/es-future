# Proxy

A Proxy is created with two parameters:

- target: the original object which you want to proxy
- handler: an object that defines which operations will be intercepted and how to redefine intercepted operations.
  For example, this code defines a simple target with just two properties, and an even simpler handler with no properties:

```js
const target = {
  animal1: "dog",
  animal2: "cat"
};

const handler1 = {};

const proxy1 = new Proxy(target, handler1);
```

Because the handler is empty, this proxy behaves just like the original target:

```js
console.log(proxy1.animal1); // dog
console.log(proxy1.animal2); // cat
```

To customise the proxy, we define functions on the handler object:

```js
const target = {
  animal1: "dog",
  animal2: "cat"
};

const handler2 = {
  get: function(target, prop, receiver) {
    return "parrot";
  }
};

const proxy2 = new Proxy(target, handler2);
```

Here we've provided an implementation of the get() handler, which intercepts attempts to access properties in the target.

Handler functions are sometimes called traps, presumably because they trap calls to the target object. The very simple trap in handler2 above redefines all property accessors:

```js
console.log(proxy2.animal1); // parrot
console.log(proxy2.animal2); // parrot
```

With the help of the Reflect class we can give some accessors the original behavior and redefine others:

```js
const target = {
  animal1: "dog",
  animal2: "cat"
};

const handler3 = {
  get: function(target, prop, receiver) {
    if (prop === "animal2") {
      return "parrot";
    }
    return Reflect.get(...arguments);
  }
};

const proxy3 = new Proxy(target, handler3);

console.log(proxy3.animal1); // dog
console.log(proxy3.animal2); // parrot
```
