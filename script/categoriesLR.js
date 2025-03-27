"use strict";
// Select elements
const categoriesContainer = document.querySelector('.ctg-items');
const categoriesList = document.querySelector('.ctg-ul');
const leftButton = document.querySelector('.ctg-left');
const rightButton = document.querySelector('.ctg-right');

// Calculate the visible width of the container
const containerWidth = categoriesContainer.offsetWidth;

// Initial state: hide the left arrow
leftButton.style.display = 'none';

// Function to update arrow visibility
function updateArrowVisibility() {
  const maxScrollLeft = categoriesList.scrollWidth - categoriesList.clientWidth;
  // Show/hide left and right arrows based on scroll position
  leftButton.style.display = categoriesList.scrollLeft > 0 ? 'block' : 'none';
  rightButton.style.display =
    categoriesList.scrollLeft < maxScrollLeft ? 'block' : 'none';
}

// Scroll right button functionality
rightButton.addEventListener('click', () => {
  categoriesList.scrollBy({ left: containerWidth, behavior: 'smooth' });
  setTimeout(updateArrowVisibility, 300); // Update visibility after animation
});

// Scroll left button functionality
leftButton.addEventListener('click', () => {
  categoriesList.scrollBy({ left: -containerWidth, behavior: 'smooth' });
  setTimeout(updateArrowVisibility, 300); // Update visibility after animation
});

// Handle window resizing
window.addEventListener('resize', updateArrowVisibility);
