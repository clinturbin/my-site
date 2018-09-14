const menuIcon = document.querySelector('.menu-icon');
const flyOutNavigation = document.querySelector('.flyout-navigation');

menuIcon.addEventListener('click', () => {
    flyOutNavigation.classList.toggle('hidden');
    flyOutNavigation.classList.toggle('visible');
});