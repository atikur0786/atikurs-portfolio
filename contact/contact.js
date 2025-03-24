/**
 * contact.js - JavaScript for the Contact page
 * Handles form submission and email client redirection
 */

function initContactPage() {
  // Get form elements
  const contactForm = document.getElementById("contact-form");
  const statusMessage = document.getElementById("status-message");
  const typingIndicator = document.querySelector(".typing-indicator");

  if (!contactForm) {
    console.error("Contact form not found!");
    return;
  }

  // Form submission handler
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });

    // Show typing indicator while "processing"
    if (statusMessage) statusMessage.textContent = "";
    if (statusMessage) statusMessage.classList.remove("success", "error");
    if (typingIndicator) typingIndicator.classList.add("active");

    // Open email client with form data
    setTimeout(() => {
      openEmailClient(formDataObj);

      // Hide typing indicator
      if (typingIndicator) typingIndicator.classList.remove("active");

      // Show success message
      if (statusMessage) {
        statusMessage.textContent =
          "✓ Email client opened! Please send the email from your client.";
        statusMessage.classList.add("success");
      }

      // Add success animation to submit button
      const submitBtn = contactForm.querySelector(".submit-btn");
      if (submitBtn) {
        submitBtn.classList.add("success-animation");
        setTimeout(() => {
          submitBtn.classList.remove("success-animation");
        }, 2000);
      }
    }, 1000);
  });

  // Function to open email client with form data
  function openEmailClient(data) {
    const recipient = "atikursattermondal@gmail.com";
    const subject = encodeURIComponent(
      data.subject || "Contact from Portfolio"
    );
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
        `Email: ${data.email}\n\n` +
        `Message:\n${data.message}`
    );

    // Create mailto link and open it
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Open in new window
    window.open(mailtoLink, "_blank");
  }

  // Add copy to clipboard functionality for contact info
  const infoContents = document.querySelectorAll(".info-content");
  infoContents.forEach((content) => {
    content.addEventListener("click", function () {
      // Get text without the quotes and semicolon
      const text = this.textContent.replace(/[";]/g, "");

      // Copy to clipboard
      navigator.clipboard.writeText(text).then(() => {
        // Show copied tooltip
        const tooltip = document.createElement("span");
        tooltip.className = "copy-tooltip";
        tooltip.textContent = "Copied!";
        this.appendChild(tooltip);

        // Remove tooltip after a delay
        setTimeout(() => {
          tooltip.remove();
        }, 2000);
      });
    });
  });

  // Add real-time validation feedback
  const formInputs = contactForm.querySelectorAll("input, textarea");
  formInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateInput(this);
    });

    input.addEventListener("input", function () {
      if (this.value.trim() !== "") {
        validateInput(this);
      }
    });
  });

  function validateInput(input) {
    if (input.checkValidity()) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  }
}

// Initialize the contact page when the script loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initContactPage);
} else {
  // DOM is already ready
  initContactPage();
}
