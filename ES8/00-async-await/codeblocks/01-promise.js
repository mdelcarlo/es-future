async function showGithubUser(name) {
    const url = `https://api.github.com/users/${name}`;
    const response = await fetch(url);
    const { name, location } = await response.json();
    console.log(name);
    console.log(location);
  }
  showGithubUser("mdelcarlo");
