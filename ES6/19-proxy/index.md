# Proxy

A Proxy is created with two parameters:

- books: the original object which you want to proxy
- handler: an object that defines which operations will be intercepted and how to redefine intercepted operations.
  For example, this code defines a simple books with just two properties, and an even simpler handler with no properties:

```js
const books = {
  book1: "Sapiens",
  book2: "Homo Deus"
};

const handler1 = {};

const proxy1 = new Proxy(books, handler1);
```

Because the handler is empty, this proxy behaves just like the original books:

```js
console.log(proxy1.book1); // Sapiens
console.log(proxy1.book2); // Homo Deus
```

To customise the proxy, we define functions on the handler object:

```js
const books = {
  book1: "Sapiens",
  book2: "Homo Deus"
};

const handler2 = {
  get: function(books, prop, receiver) {
    return "21 lessons for 21 century";
  }
};

const proxy2 = new Proxy(books, handler2);
```

Here we've provided an implementation of the get() handler, which intercepts attempts to access properties in the books.

Handler functions are sometimes called traps, presumably because they trap calls to the books object. The very simple trap in handler2 above redefines all property accessors:

```js
console.log(proxy2.book1); // 21 lessons for 21 century
console.log(proxy2.book2); // 21 lessons for 21 century
```

With the help of the Reflect class we can give some accessors the original behavior and redefine others:

```js
const books = {
  book1: "Sapiens",
  book2: "Homo Deus"
};

const handler3 = {
  get: function(books, prop, receiver) {
    if (prop === "book2") {
      return "21 lessons for 21 century";
    }
    return Reflect.get(...arguments);
  }
};

const proxy3 = new Proxy(books, handler3);

console.log(proxy3.book1); // Sapiens
console.log(proxy3.book2); // 21 lessons for 21 century
```
