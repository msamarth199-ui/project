// Portfolio interactions: Bootstrap handles the responsive navbar and scroll spy.
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Close the mobile navigation after a section link is selected.
  const navContent = document.getElementById("navContent");
  document.querySelectorAll("#navContent .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992 && navContent.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navContent).hide();
      }
    });
  });

  // Highlight the current section in the navigation where supported.
  const spyElement = document.body;
  if (window.bootstrap && bootstrap.ScrollSpy) {
    bootstrap.ScrollSpy.getOrCreateInstance(spyElement, {
      target: "#mainNav",
      rootMargin: "0px 0px -25%"
    });
  }
});
