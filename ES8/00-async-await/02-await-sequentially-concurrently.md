# Await Multiple Promises Sequentially or Concurrently

You can await multiple promises either sequentially or concurrently, depending on where you put the await operators. This lesson shows both approaches and compares the performance characteristics.

## Sequentially

```js
async function fetchFromGitHub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}

async function showUserAndRepos(handle) {
  const userPromise = await fetchFromGitHub(`/users/${handle}`);
  const reposPromise = await fetchFromGitHub(`/users/${handle}/repos`);

  const user = userPromise;
  const repos = reposPromise;

  console.log(user.name);
  console.log(`${repos.length} repos`);
}

showUserAndRepos("mdelcarlo");
```

## Concurrently

```js
async function fetchFromGitHub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}

async function showUserAndRepos(handle) {
  const userPromise = fetchFromGitHub(`/users/${handle}`);
  const reposPromise = fetchFromGitHub(`/users/${handle}/repos`);

  const user = await userPromise;
  const repos = await reposPromise;

  console.log(user.name);
  console.log(`${repos.length} repos`);
}

showUserAndRepos("mdelcarlo");
```

### With PromiseAll

```js
async function fetchFromGitHub(endpoint) {
  const url = `https://api.github.com${endpoint}`;
  const response = await fetch(url);
  return await response.json();
}

async function fetchUserAndRepos(handle) {
  const [user, repos] = await Promise.all([
    fetchFromGitHub(`/users/${handle}`),
    fetchFromGitHub(`/users/${handle}/repos`)
  ]);

  console.log(user.name);
  console.log(`${repos.length} repos`);
}

fetchUserAndRepos("mdelcarlo");
```
