function initAboutPage() {
  // Tab switching functionality
  const fileLinks = document.querySelectorAll(".file");
  const tabContents = document.querySelectorAll(".tab-content");
  const editorHeader = document.querySelector(".editor-header");
  const editorContent = document.querySelector(".editor-content");

  // Add placeholder for empty state
  const placeholder = document.createElement("div");
  placeholder.className = "editor-placeholder";
  placeholder.innerHTML =
    "<p>Select a file from the sidebar to view content</p>";
  editorContent.appendChild(placeholder);

  function switchTab(tabId) {
    // Hide all tab contents
    tabContents.forEach((content) => {
      content.classList.remove("active");
    });

    // Remove active class from all tabs
    const allTabs = document.querySelectorAll(".tab");
    allTabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    // Remove active class from all file links
    fileLinks.forEach((file) => {
      file.classList.remove("active");
    });

    // If tabId is null (all tabs closed), show placeholder
    if (!tabId) {
      placeholder.style.display = "flex";
      return;
    }

    // Hide placeholder when a tab is active
    placeholder.style.display = "none";

    // Show the selected tab content
    const selectedContent = document.getElementById(tabId);
    if (selectedContent) {
      selectedContent.classList.add("active");
    }

    // Check if tab already exists in header
    let tabElement = document.querySelector(`.tab[data-tab="${tabId}"]`);

    // If tab doesn't exist in header, create it
    if (!tabElement) {
      const fileElement = document.querySelector(`.file[data-tab="${tabId}"]`);
      if (fileElement) {
        const fileName = fileElement.querySelector(".file-name").textContent;
        tabElement = document.createElement("div");
        tabElement.className = "tab";
        tabElement.setAttribute("data-tab", tabId);

        // Create tab content with filename and close button
        const tabContent = document.createElement("span");
        tabContent.className = "tab-title";
        tabContent.textContent = fileName;

        const closeBtn = document.createElement("span");
        closeBtn.className = "tab-close";
        closeBtn.innerHTML = "&times;";
        closeBtn.addEventListener("click", function (e) {
          e.stopPropagation(); // Prevent tab from being activated when closing
          closeTab(tabId);
        });

        tabElement.appendChild(tabContent);
        tabElement.appendChild(closeBtn);

        // Add click event to the new tab
        tabElement.addEventListener("click", function () {
          switchTab(tabId);
        });

        editorHeader.appendChild(tabElement);
      }
    }

    // Add active class to the selected tab
    if (tabElement) {
      tabElement.classList.add("active");
    }

    // Add active class to the selected file link
    const selectedFile = document.querySelector(`.file[data-tab="${tabId}"]`);
    if (selectedFile) {
      selectedFile.classList.add("active");
    }
  }

  function closeTab(tabId) {
    // Remove the tab from the header
    const tabToRemove = document.querySelector(`.tab[data-tab="${tabId}"]`);
    if (tabToRemove) {
      // Check if this is the active tab
      const isActive = tabToRemove.classList.contains("active");

      // Remove the tab
      tabToRemove.remove();

      // If it was active, activate another tab or show placeholder
      if (isActive) {
        const remainingTabs = document.querySelectorAll(".tab");
        if (remainingTabs.length > 0) {
          // Activate the first remaining tab
          const nextTabId = remainingTabs[0].getAttribute("data-tab");
          switchTab(nextTabId);
        } else {
          // No tabs left, show placeholder
          switchTab(null);
        }
      }
    }
  }

  // Add click event to file links
  fileLinks.forEach((file) => {
    file.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Initialize with the first tab (bio)
  switchTab("bio");
}

// Initialize the about page when the script loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAboutPage);
} else {
  // DOM is already ready
  initAboutPage();
}
