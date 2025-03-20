// Mapping page names to titles
const pageTitles = {
  home: "Home - My Portfolio",
  about: "About Me - My Portfolio",
  projects: "Projects - My Portfolio",
  contact: "Contact - My Portfolio",
};

function loadPage(page) {
  fetch(`${page}/${page}.html`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
      document.title = pageTitles[page] || "My Portfolio"; // Update title
      history.pushState(null, "", `#${page}`); // Update URL
    });
}

// Load correct page on refresh
window.addEventListener("load", () => {
  const page = location.hash.replace("#", "") || "home";
  loadPage(page);
});

// Handle browser back/forward
window.addEventListener("popstate", () => {
  const page = location.hash.replace("#", "") || "home";
  loadPage(page);
});
