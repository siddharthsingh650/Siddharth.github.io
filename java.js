const repoList = document.getElementById("repo-list");

fetch("https://api.github.com/users/YourGitHubUsername/repos")
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
            repoList.appendChild(listItem);
        });
    })
    .catch(error => console.error("Error fetching GitHub repositories:", error));
