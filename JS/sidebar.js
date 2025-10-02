// const sidebar = document.getElementById("sidebar");
// const toggleButton = document.querySelector(".toggle-sidebar-button");

// function getSidebarWidth() {
//   return getComputedStyle(document.documentElement).getPropertyValue("--sidebar-width").trim();
// }

// toggleButton.addEventListener("click", () => {
//   const isOpen = sidebar.classList.toggle("open");
//   toggleButton.setAttribute("aria-expanded", isOpen);
//   toggleButton.textContent = isOpen ? "<<" : ">>";

//   if (isOpen) {
//     document.body.style.marginLeft = `calc(var(--spacing-unit) + ${getSidebarWidth()})`;
//   } else {
//     document.body.style.marginLeft = "var(--spacing-unit)";
//   }
// });

const sidebar = document.getElementById("sidebar");
const toggleButton = document.querySelector(".toggle-sidebar-button");

toggleButton.addEventListener("click", () => {
  const isOpen = sidebar.classList.toggle("open");
  toggleButton.setAttribute("aria-expanded", isOpen);
  toggleButton.textContent = isOpen ? "<<" : ">>";

  document.body.classList.toggle("sidebar-open", isOpen);
});
