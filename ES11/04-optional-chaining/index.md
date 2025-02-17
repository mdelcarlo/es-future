# Optional chaining '?.'

The optional chaining ?. is an error-proof way to access nested object properties, even if an intermediate property doesn’t exist.

If you’ve just started to read the tutorial and learn JavaScript, maybe the problem hasn’t touched you yet, but it’s quite common.

For example, some of our users have addresses, but few did not provide them. Then we can’t safely read user.address.street:

```js
let user = {}; // the user happens to be without address

alert(user.address.street); // Error!
```

Or, in the web development, we’d like to get an information about an element on the page, but it may not exist:

```js
// Error if the result of querySelector(...) is null
let html = document.querySelector(".my-element").innerHTML;
```

Before ?. appeared in the language, the && operator was used to work around that.

For example:

```js
let user = {}; // user has no address

alert(user && user.address && user.address.street); // undefined (no error)
```

The optional chaining ?. stops the evaluation and returns undefined if the part before ?. is undefined or null.

Further in this article, for brevity, we’ll be saying that something “exists” if it’s not null and not undefined.

Here’s the safe way to access user.address.street:

let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)
Reading the address with user?.address works even if user object doesn’t exist:

```js
let user = null;

alert(user?.address); // undefined

alert(user?.address.street); // undefined
alert(user?.address.street.anything); // undefined
```

Please note: the ?. syntax works exactly where it’s placed, not any further.

In the last two lines the evaluation stops immediately after user?., never accessing further properties. But if the user actually exists, then the further intermediate properties, such as user.address must exist.

Don’t overuse the optional chaining
We should use ?. only where it’s ok that something doesn’t exist.

For example, if according to our coding logic user object must be there, but address is optional, then user.address?.street would be better.

So, if user happens to be undefined due to a mistake, we’ll know about it and fix it. Otherwise, coding errors can be silenced where not appropriate, and become more difficult to debug.

## Short-circuiting

As it was said before, the ?. immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist.

So, if there are any further function calls or side effects, they don’t occur:

```js
let user = null;
let x = 0;

user?.sayHi(x++); // nothing happens

alert(x); // 0, value not incremented
```

## Other cases: ?.(), ?.[]

The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.

For example, ?.() is used to call a function that may not exist.

In the code below, some of our users have admin method, and some don’t:

```js
let user1 = {
  admin() {
    alert("I am admin");
  }
};

let user2 = {};

user1.admin?.(); // I am admin
user2.admin?.();
```

Here, in both lines we first use the dot . to get admin property, because the user object must exist, so it’s safe read from it.

Then ?.() checks the left part: if the admin function exists, then it runs (for user1). Otherwise (for user2) the evaluation stops without errors.

The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot .. Similar to previous cases, it allows to safely read a property from an object that may not exist.

```js
let user1 = {
  firstName: "John"
};

let user2 = null; // Imagine, we couldn't authorize the user

let key = "firstName";

alert(user1?.[key]); // John
alert(user2?.[key]); // undefined

alert(user1?.[key]?.something?.not?.existing); // undefined
```

Also we can use ?. with delete:

```js
delete user?.name; // delete user.name if user exists
```

We can use ?. for safe reading and deleting, but not writing
The optional chaining ?. has no use at the left side of an assignment:

// the idea of the code below is to write user.name, if user exists

```js
user?.name = "John"; // Error, doesn't work
// because it evaluates to undefined = "John"
```

## Summary

The ?. syntax has three forms:

- `obj?.prop` – returns obj.prop if obj exists, otherwise undefined.
- `obj?.[prop]` – returns obj[prop] if obj exists, otherwise undefined.
- `obj?.method()` – calls obj.method() if obj exists, otherwise returns undefined.
  As we can see, all of them are straightforward and simple to use. The ?. checks the left part for null/undefined and allows the evaluation to proceed if it’s not so.

A chain of ?. allows to safely access nested properties.

Still, we should apply ?. carefully, only where it’s ok that the left part doesn’t to exist.

So that it won’t hide programming errors from us, if they occur.
