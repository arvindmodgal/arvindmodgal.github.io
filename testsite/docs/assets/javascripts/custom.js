/* Collapse nav groups by default, expand on click; preserves current page path expansion */
document.addEventListener("DOMContentLoaded", () => {
  const groups = document.querySelectorAll(".md-nav__item--nested > .md-nav__link");
  groups.forEach(link => {
    const parent = link.closest(".md-nav__item--nested");
    if (!parent.classList.contains("md-nav__item--active")) {
      parent.setAttribute("aria-expanded", "false");
    }
    link.addEventListener("click", (e) => {
      // Toggle only the clicked group
      const expanded = parent.getAttribute("aria-expanded") === "true";
      parent.setAttribute("aria-expanded", expanded ? "false" : "true");
      e.preventDefault(); // prevent navigation when the group link is a toggle
    });
  });
});