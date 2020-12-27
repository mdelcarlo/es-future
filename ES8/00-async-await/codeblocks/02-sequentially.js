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