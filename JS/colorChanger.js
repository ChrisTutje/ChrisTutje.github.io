document.addEventListener("DOMContentLoaded", () => {
  const colorToggle = document.getElementById("color-toggle");
  const colorDropdown = document.getElementById("color-dropdown");
  const hueSlider = document.getElementById("hue-slider");

  if (!colorToggle || !colorDropdown || !hueSlider) return;

  colorToggle.addEventListener("click", e => {
    e.stopPropagation();
    colorDropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".color-menu")) {
      colorDropdown.classList.add("hidden");
    }
  });

  hueSlider.addEventListener("input", e => {
    const hue = e.target.value;
    const root = document.documentElement;
    const computed = getComputedStyle(root);
    const currentColor = computed.getPropertyValue("--dominant-color").trim();

    const match = currentColor.match(/hsl\(([\d.]+),\s*([\d.]+%)?,\s*([\d.]+%)?\)/);

    if (match) {
      const s = match[2] || "100%";
      const l = match[3] || "50%";
      root.style.setProperty("--dominant-color", `hsl(${hue}, ${s}, ${l})`);
    } else {
      root.style.setProperty("--dominant-color", `hsl(${hue}, 100%, 50%)`);
    }
  });
});
