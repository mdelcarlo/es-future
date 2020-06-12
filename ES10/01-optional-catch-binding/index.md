# Optional catch binding

ES2019 introduces the optional catch binding syntax. This allows us to catch errors without assigning the error to a variable. In this lesson, we'll investigate cases where it's appropriate to catch errors without propagating them further. Then we'll introduce an optional catch binding to make our intent clear.

When a catch-block is used, the catch-block is executed when any exception is thrown from within the try-block.

```js
try {
  throw "delcaException"; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logException(e); // pass exception object to error handler
}
```

## Nested try-blocks

First, let's see what happens with this:

```js
try {
  try {
    throw new Error("oops");
  } finally {
    console.log("excecuting finally...");
  }
} catch (ex) {
  console.error("outer catching error", ex.message);
}

// Output:
// "excecuting finally..."
// "outer catching error" "oops"
```

Now, if we already caught the exception in the inner try-block by adding a catch-block

```js
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner catching error", ex.message);
  } finally {
    console.log("excecuting finally...");
  }
} catch (ex) {
  console.error("outer catching error", ex.message);
}

// Output:
// "inner catching error" "oops"
// "excecuting finally..."
```

And now, let's rethrow the error.

```js
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  } finally {
    console.log("excecuting finally...");
  }
} catch (ex) {
  console.error("outer catching error", ex.message);
}

// Output:
// "inner" "oops"
// "excecuting finally..."
// "outer" "oops"
```

Any given exception will be caught only once by the nearest enclosing catch-block unless it is rethrown. Of course, any new exceptions raised in the "inner" block (because the code in catch-block may do something that throws), will be caught by the "outer" block.
