function initProjectsPage() {
  const username = "atikur0786"; // Your GitHub username
  const reposContainer = document.getElementById("repos-container");
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");

  let allRepos = [];

  // Fetch repositories from GitHub API
  async function fetchRepositories() {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`
      );

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const repos = await response.json();
      allRepos = repos;
      displayRepositories(repos);
    } catch (error) {
      console.error("Error fetching repositories:", error);
      reposContainer.innerHTML = `
                <div class="no-repos">
                    <p>Error loading repositories. Please try again later.</p>
                    <p>${error.message}</p>
                </div>
            `;
    }
  }

  // Display repositories in the UI
  function displayRepositories(repos) {
    if (repos.length === 0) {
      reposContainer.innerHTML = `
                <div class="no-repos">
                    <p>No repositories found.</p>
                </div>
            `;
      return;
    }

    reposContainer.innerHTML = repos
      .map((repo) => {
        // Get language color
        const languageColor = getLanguageColor(repo.language);

        return `
                <div class="repo-card">
                    <div class="repo-header">
                        <h3 class="repo-name">${repo.name}</h3>
                        <p class="repo-description">${
                          repo.description || "No description available"
                        }</p>
                        <div class="repo-tags">
                            ${
                              repo.topics && repo.topics.length > 0
                                ? repo.topics
                                    .slice(0, 3)
                                    .map(
                                      (topic) =>
                                        `<span class="repo-topic">${topic}</span>`
                                    )
                                    .join("")
                                : ""
                            }
                        </div>
                    </div>
                    <div class="repo-meta">
                        <div class="repo-stats">
                            ${
                              repo.language
                                ? `
                                <div class="repo-language">
                                    <span class="language-color" style="background-color: ${languageColor}"></span>
                                    <span>${repo.language}</span>
                                </div>
                            `
                                : ""
                            }
                            <div class="repo-stars">
                                <i class="far fa-star"></i> ${
                                  repo.stargazers_count
                                }
                            </div>
                            <div class="repo-forks">
                                <i class="fas fa-code-branch"></i> ${
                                  repo.forks_count
                                }
                            </div>
                        </div>
                        <div class="repo-updated">
                            Updated: ${new Date(
                              repo.updated_at
                            ).toLocaleDateString()}
                        </div>
                    </div>
                    <div class="repo-links">
                        <a href="${
                          repo.html_url
                        }" target="_blank" class="repo-link github-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.286-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.757-1.334-1.757-1.09-.745.083-.73.083-.73 1.204.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.49.997.108-.776.42-1.305.762-1.604-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.535-1.523.118-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 013.006-.404c1.02.005 2.045.138 3.006.404 2.29-1.553 3.296-1.23 3.296-1.23.656 1.653.244 2.873.12 3.176.77.84 1.233 1.913 1.233 3.222 0 4.61-2.807 5.622-5.48 5.92.43.37.814 1.102.814 2.222 0 1.606-.015 2.902-.015 3.296 0 .32.216.694.825.575C20.565 21.795 24 17.298 24 12c0-6.628-5.372-12-12-12z"/>
                            </svg>
                            View on GitHub
                        </a>
                        ${
                          repo.homepage
                            ? `
                            <a href="${repo.homepage}" target="_blank" class="repo-link demo-link">
                                <i class="fas fa-external-link-alt"></i> Live Demo
                            </a>
                        `
                            : ""
                        }
                    </div>
                </div>
            `;
      })
      .join("");
  }

  // Filter repositories based on search input
  function filterRepositories() {
    console.log("Filtering repositories...");
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRepos = allRepos.filter((repo) => {
      return (
        repo.name.toLowerCase().includes(searchTerm) ||
        (repo.description &&
          repo.description.toLowerCase().includes(searchTerm)) ||
        (repo.topics &&
          repo.topics.some((topic) => topic.toLowerCase().includes(searchTerm)))
      );
    });

    sortRepositories(filteredRepos);
  }

  // Sort repositories based on selected option
  function sortRepositories(repos) {
    const sortBy = sortSelect.value;

    const sortedRepos = [...repos].sort((a, b) => {
      switch (sortBy) {
        case "updated":
          return new Date(b.updated_at) - new Date(a.updated_at);
        case "created":
          return new Date(b.created_at) - new Date(a.created_at);
        case "name":
          return a.name.localeCompare(b.name);
        case "stars":
          return b.stargazers_count - a.stargazers_count;
        default:
          return 0;
      }
    });

    displayRepositories(sortedRepos);
  }

  // Get color for programming language
  function getLanguageColor(language) {
    const colors = {
      JavaScript: "#f1e05a",
      TypeScript: "#2b7489",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Python: "#3572A5",
      Java: "#b07219",
      C: "#555555",
      "C++": "#f34b7d",
      "C#": "#178600",
      PHP: "#4F5D95",
      Ruby: "#701516",
      Go: "#00ADD8",
      Swift: "#ffac45",
      Kotlin: "#F18E33",
      Rust: "#dea584",
      Dart: "#00B4AB",
      // Add more languages as needed
    };

    return colors[language] || "#8257e5"; // Default purple color
  }

  // Event listeners
  searchInput.addEventListener("input", filterRepositories);
  sortSelect.addEventListener("change", () => filterRepositories());

  // Initial fetch
  fetchRepositories();
}

// Auto-initialize if the DOM is already loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProjectsPage);
} else {
  initProjectsPage();
}
