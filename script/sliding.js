'use strict';

const slideImgs = document.querySelectorAll('.slide-img');
const navBtns = document.querySelectorAll('.nav-btn');
const nextBtn = document.querySelector('.slide-right');
const prevBtn = document.querySelector('.slide-left');
let currentSlide = 0;
let autoSwitch;

// Function to update slides
const updateSlide = (index) => {
    slideImgs.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
    navBtns.forEach((btn, i) => {
        btn.classList.toggle('nav-btn-active', i === index);
    });
};

// Function for automatic switching
const startAutoSwitch = () => {
    clearInterval(autoSwitch); // Clear previous interval if any
    autoSwitch = setInterval(() => {
        currentSlide = (currentSlide + 1) % slideImgs.length;
        updateSlide(currentSlide);
    }, 3000);
};

// Event listeners for navigation
nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slideImgs.length;
    updateSlide(currentSlide);
    startAutoSwitch(); // Restart auto-switch
});

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slideImgs.length) % slideImgs.length;
    updateSlide(currentSlide);
    startAutoSwitch(); // Restart auto-switch
});

// Event listeners for navigation circles
navBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        currentSlide = index;
        updateSlide(currentSlide);
        startAutoSwitch(); // Restart auto-switch
    });
});

// Initial Setup
updateSlide(currentSlide);
startAutoSwitch();
