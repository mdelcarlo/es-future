# Async / Await

This lesson introduces the ES2017 async and await keywords. It shows how to write a short asynchronous function that makes an HTTP request and parses the response.

Lets transform the following promise to asyn await

```js
function showGithubUser(name) {
  const url = `https://api.github.com/users/${name}`;
  fetch(url)
    .then(response => response.json())
    .then(({ name, location }) => {
      console.log(name);
      console.log(location);
    });
}
showGithubUser("mdelcarlo");
```

The await operator takes a promise and then pauses the function execution until that promise is settled. It then does one of two things. If the promise is rejected, the await expression throws the rejected value.

If the promise is resolved, the await expression will return the resolved value. We can then take it and assign it to a variable like this.

The next thing we want to do is take the body of the response and parse it as JSON. We'll say, "Const user equals await response at JSON."

The JSON method returns a promise as well. This means we can use the await operator again to wait until that promise is settled. Now that we have the user, let's go ahead and log their name to the console.

```js
async function showGithubUser(name) {
  const url = `https://api.github.com/users/${name}`;
  const response = await fetch(url);
  const { name, location } = await response.json();
  console.log(name);
  console.log(location);
}
showGithubUser("mdelcarlo");
```
