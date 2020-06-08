# Handle Errors

Starting from showGithubUser async function

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

Lets get the body from `response.json()` if body status is different of 200 we throw an error, if not we return the body.

```js
async function showGithubUser(name) {
  const url = `https://api.github.com/users/${name}`;
  const response = await fetch(url);
  const body = await response.json();

  if (body.status === 200) {
    throw Error(body.message);
  }
  return body;
}

try {
  const { name, location } = await showGithubUser("mdelcarlo");
  console.log(name);
  console.log(location);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
```

So in order to capture the error we surround showGithubUser function on try and we catch the posible errors, whenever we get an eeror we log the message.
