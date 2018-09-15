const menuIcon = document.querySelector('.menu-icon');
const flyOutNavigation = document.querySelector('.flyout-navigation');
const projectImages = document.querySelectorAll('.project-image');
const modalScreens = document.querySelectorAll('.project-info-modal');
const projectLinkButtons = document.querySelectorAll('.project-link-button');

for (let image of projectImages) {
    image.addEventListener('click', () => {
        let modal = image.nextElementSibling;
        modal.classList.remove('hidden-modal');
        modal.classList.add('visible-modal');
    })
};

for (let modal of modalScreens) {
    modal.addEventListener('click', () => {
        modal.classList.remove('visible-modal');
        modal.classList.add('hidden-modal');
    })
};

for (let button of projectLinkButtons) {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
    })
};

menuIcon.addEventListener('click', () => {
    flyOutNavigation.classList.toggle('hidden');
    flyOutNavigation.classList.toggle('visible');
});