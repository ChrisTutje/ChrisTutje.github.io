let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    // Hide current item
    items[currentIndex].style.display = 'none';

    // Update index based on direction
    currentIndex = (currentIndex + direction + totalItems) % totalItems;

    // Show new current item
    items[currentIndex].style.display = 'flex'; // Adjust display property as needed
}

// Initialize carousel by showing the first item
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => item.style.display = 'none'); // Hide all items initially
    items[0].style.display = 'flex'; // Show the first item
});