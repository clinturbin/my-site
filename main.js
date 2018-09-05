var menuIcon = document.querySelector('.menu-icon');
var navigationItems = document.querySelector('.header-right');

menuIcon.addEventListener('click', function() {
    navigationItems.classList.toggle('hidden');
    navigationItems.classList.toggle('visible');
});