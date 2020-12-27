
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