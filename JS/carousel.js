let currentIndex = 0;

function moveCarousel(direction) {
    const carouselContainer = document.querySelector('.carousel-container');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const visibleItems = 3; // Number of images visible at once

    // Update the index
    currentIndex += direction;

    // Loop around
    if (currentIndex < 0) {
        currentIndex = totalItems - visibleItems;
    } else if (currentIndex >= totalItems - visibleItems + 1) {
        currentIndex = 0;
    }

    // Calculate the translation
    const itemWidth = items[0].offsetWidth;
    const translateX = -(itemWidth * currentIndex);

    // Apply the transformation
    carouselContainer.style.transform = `translateX(${translateX}px)`;
}
