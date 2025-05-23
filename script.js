// Mapping page names to titles
const pageTitles = {
  home: "Atikur's Digital Playground | Full-Stack Developer",
  about: "The Mind Behind the Code | Atikur Satter Mondal",
  projects: "Code Craftsmanship | Atikur's Web Creations",
  contact: "Let's Connect | Reach Out to Atikur",
  resume: "Skills & Experience | Atikur's Developer Journey",
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
      } else if (page === "about") {
        // Load about.js for the about page
        const script = document.createElement("script");
        script.src = `${page}/${page}.js`;
        script.onload = function () {
          // Initialize the about page after script is loaded
          if (typeof initAboutPage === "function") {
            initAboutPage();
          }
        };
        document.body.appendChild(script);
      } else if (page === "contact") {
        // Load contact.js and ensure proper initialization
        const script = document.createElement("script");
        script.src = `${page}/${page}.js`;
        script.onload = function () {
          // Explicitly call initialization
          if (typeof initContactPage === "function") {
            initContactPage();
          }
        };
        document.body.appendChild(script);
      } else if (page === "projects") {
        const script = document.createElement("script");
        script.src = `${page}/${page}.js`;
        script.onload = function () {
          // Call the initialization function for projects page
          if (typeof initProjectsPage === "function") {
            initProjectsPage();
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

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    // Prevent scrolling when menu is open
    document.body.style.overflow = mobileMenu.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close menu when clicking on a menu item
  const mobileMenuItems = document.querySelectorAll(".mobile-menu-items div");
  mobileMenuItems.forEach((item) => {
    item.addEventListener("click", function () {
      hamburgerMenu.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
});
