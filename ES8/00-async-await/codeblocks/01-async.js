
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