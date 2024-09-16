function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const currentWidth = sidebar.style.width;

    if (currentWidth === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}