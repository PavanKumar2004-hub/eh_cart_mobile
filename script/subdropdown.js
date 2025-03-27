'use strict';

const categoriesDropItems = Array.from(document.querySelectorAll('.nav-dropdown__link'));
const categoriesSubs = Array.from(document.querySelectorAll('.nav-sub-dropdown'));

categoriesDropItems.forEach((item) => {
    item.addEventListener('click', function () {
        // Get the submenu directly related to this item
        const relatedSubMenu = item.nextElementSibling;

        // Loop through all submenus and hide those that are not related
        categoriesSubs.forEach((sub) => {
            if (sub === relatedSubMenu) {
                sub.classList.toggle('hidden');
            } else {
                sub.classList.add('hidden');
            }
        });

        // Handle the active class for the clicked item
        categoriesDropItems.forEach((link) => {
            if (link === item) {
                // Toggle active class only for the clicked item
                link.classList.toggle('active', !relatedSubMenu.classList.contains('hidden'));
            } else {
                link.classList.remove('active');
            }
        });
    });
});
