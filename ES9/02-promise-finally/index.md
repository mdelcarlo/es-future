# Promise.finally

The finally() method returns a Promise. When the promise is settled, i.e either fulfilled or rejected, the specified callback function is executed. This provides a way for code to be run whether the promise was fulfilled successfully or rejected once the Promise has been dealt with.

This helps to avoid duplicating code in both the promise's then() and catch() handlers.

It can be useful if you want to do some processing or cleanup once the promise is settled, regardless of its outcome.

```js
let isLoading = true;

fetch(myRequest)
  .then(function(response) {
    var contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) {
    /* process your JSON further */
  })
  .catch(function(error) {
    console.error(error); /* this line can also throw, e.g. when console = {} */
  })
  .finally(function() {
    isLoading = false;
  });
```

In the previous example we set a `isLoading` variable to true just before executing the `fetch` call, and after it finishes we set `isLoading` to false.
