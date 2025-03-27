'use strict';

// Commonly used elements
const arrow_down = document.querySelectorAll('.icon--arrow-bottom');
const arrow_up = document.querySelectorAll('.icon--arrow-up');
const shadow_up = document.querySelectorAll('.icon--nav-triangle');
const arr_up = document.querySelectorAll('.icon--arrow-up path');
const navOptions = [
    {
        button: document.querySelector('.categories-opt'),
        dropdown: document.querySelector('.categories-dropdown'),
    },
    {
        button: document.querySelector('.services-opt'),
        dropdown: document.querySelector('.services-dropdown'),
    },
    {
        button: document.querySelector('.blogs-opt'),
        dropdown: document.querySelector('.blogs-dropdown'),
    },
    {
        button: document.querySelector('.information-opt'),
        dropdown: document.querySelector('.information-dropdown'),
    },
];
const login_icon = document.querySelectorAll('.login-icon');
const login_form = document.querySelector('.popover__inner');
const cart_icon = document.querySelectorAll('.cart-content-container');
const cart_form = document.querySelector('.modal-cart');

// Utility functions
const setArrowStyle = (arr) => {
    arr.setAttribute('fill', '#ff0000');
    arr.setAttribute('stroke-width', '2');
};

const toggleArrow = (index, isActive) => {
    arrow_up[index].classList.toggle('hidden', !isActive);
    arrow_down[index].classList.toggle('hidden', isActive);
    shadow_up[index].classList.toggle('hidden', !isActive);

    if (isActive) {
        arr_up.forEach(setArrowStyle);
    }
};

const resetAllArrows = () => {
    arrow_down.forEach((_, index) => toggleArrow(index, false));
};

const resetNavStyles = () => {
    navOptions.forEach(({ button }) => (button.style.color = '#333'));
};

const handleDropdownToggle = (currentIndex) => {
    const isCurrentlyActive = !navOptions[currentIndex].dropdown.classList.contains('hidden');

    // Hide all dropdowns first
    navOptions.forEach(({ dropdown }, index) => {
        const shouldHide = currentIndex !== index || isCurrentlyActive;
        dropdown.classList.toggle('hidden', shouldHide);
        toggleArrow(index, !shouldHide && currentIndex === index);
    });

    // Set the correct button styles
    resetNavStyles();
    if (!isCurrentlyActive) {
        navOptions[currentIndex].button.style.color = '#ff0000';
    }

    // Hide additional forms
    login_form.classList.add('hidden');
    cart_form.classList.add('hidden');
};

const hideAllDropdowns = () => {
    navOptions.forEach(({ dropdown }) => dropdown.classList.add('hidden'));
    resetAllArrows();
    resetNavStyles();
    login_form.classList.add('hidden');
    cart_form.classList.add('hidden');
};

// Event Listeners
navOptions.forEach(({ button }, index) => {
    button.addEventListener('click', () => handleDropdownToggle(index));
});

login_icon.forEach((icon) =>
    icon.addEventListener('click', () => {
        const isActive = !login_form.classList.contains('hidden');

        hideAllDropdowns();
        if (!isActive) {
            login_form.classList.remove('hidden');
        }
    })
);

cart_icon.forEach((icon) =>
    icon.addEventListener('click', () => {
        const isActive = !cart_form.classList.contains('hidden');

        hideAllDropdowns();
        if (!isActive) {
            cart_form.classList.remove('hidden');
        }
    })
);
