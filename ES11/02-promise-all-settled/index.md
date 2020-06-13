# Promise.allSettled

ES2020 added Promise.allSettled

In the past when using`Promise.all` if we get a reject from any promise it will rejects as a whole. That’s good for “all or nothing” cases, when we need all results successful to proceed:

```js
Promise.all([
  fetch("/template.html"),
  fetch("/style.css"),
  fetch("/data.json")
]).then(render); // render method needs results of all fetches
```

`Promise.allSettled` just waits for all promises to settle, regardless of the result. The resulting array has:

`{status:"fulfilled", value:result}` for successful responses,
`{status:"rejected", reason:error}` for errors.
For example, we’d like to fetch the information about multiple users. Even if one request fails, we’re still interested in the others.

Let’s use Promise.allSettled:

```js
let urls = [
  "https://api.github.com/users/mdelcarlo",
  "https://api.github.com/users/mdelcarlo-meli",
  "https://no-such-url"
];

Promise.allSettled(urls.map(url => fetch(url))).then(results => {
  // (*)
  results.forEach((result, num) => {
    if (result.status == "fulfilled") {
      alert(`${urls[num]}: ${result.value.status}`);
    }
    if (result.status == "rejected") {
      alert(`${urls[num]}: ${result.reason}`);
    }
  });
});
```

The results in the line (\*) above will be:

```js
[
  {status: 'fulfilled', value: ...response...},
  {status: 'fulfilled', value: ...response...},
  {status: 'rejected', reason: ...error object...}
]
```

So for each promise we get its status and value/error.
