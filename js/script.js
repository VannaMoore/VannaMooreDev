document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  function loadSection(section) {
    fetch(`sections/${section}.html`)
      .then((res) => res.text())
      .then((html) => {
        content.innerHTML = html;
      })
      .catch((err) => {
        content.innerHTML = "<p>Section not found.</p>";
        console.error("Error loading section:", err);
      });
  }

  function handleNavigation() {
    const section = location.hash.substring(1) || "home";
    loadSection(section);
  }

  window.addEventListener("hashchange", handleNavigation);
  handleNavigation(); // Load initial section
});
