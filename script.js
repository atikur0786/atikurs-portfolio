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

      // Load and apply the CSS file
      const existingLink = document.querySelector(`link[href*="${page}.css"]`);
      if (!existingLink) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = `${page}/${page}.css`;
        document.head.appendChild(link);
      }

      // Load and execute the JS
      if (page === "home") {
        const script = document.createElement("script");
        script.src = `${page}/${page}.js`;
        script.onload = function () {
          // Initialize the game after script is loaded
          if (typeof initTicTacToe === "function") {
            initTicTacToe();
          }
          if (typeof initTerminal === "function") {
            initTerminal();
          }
        };
        document.body.appendChild(script);
      }

      // Remove active class from all navigation items
      const navItems = document.querySelectorAll("header div");
      navItems.forEach((item) => {
        item.classList.remove("active");
      });

      // Add active class to the current page
      const currentNavItem = document.querySelector(
        `header div[onclick="loadPage('${page}')"]`
      );
      if (currentNavItem) {
        currentNavItem.classList.add("active");
      }
    });
}

// Load correct page on refresh
window.addEventListener("load", () => {
  const page = location.hash.replace("#", "") || "home";

  // Remove active class from all navigation items
  const navItems = document.querySelectorAll("header div");
  navItems.forEach((item) => {
    item.classList.remove("active");
  });

  // Add active class to the current page
  const currentNavItem = document.querySelector(
    `header div[onclick="loadPage('${page}')"]`
  );
  if (currentNavItem) {
    currentNavItem.classList.add("active");
  }
  loadPage(page);
});

// Handle browser back/forward
window.addEventListener("popstate", () => {
  const page = location.hash.replace("#", "") || "home";
  loadPage(page);
});
