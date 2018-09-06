const menuIcon = document.querySelector('.menu-icon');
const flyOutNavigation = document.querySelector('.flyout-navigation');

let projects = [
    {
        title: 'Catch the Sun',
        description: `Web application for active explorers yearning to discover their next adventure, find hidden gem sceneries, and catch a beautiful sunset`,
        image: 'images/catch-the-sum.jpg',
        demoLink: '',
        gitLink: 'https://github.com/williammadisondavis/CatchTheSun',
        technologies: [{name: 'HTML', image: 'images/'},
                       {name: 'CSS', image: 'images/'},
                       {name: 'JavaScript', image: 'images/'}
                    ]
    },
    {
        title: 'Cookie Monster',
        description: `Game where player maneuvers Cookie Monster around the screen trying to catch cookies while avoiding falling bombs`,
        image: 'images/cookie-monster.jpg',
        demoLink: '',
        gitLink: 'https://github.com/clinturbin/cookie_monster_pygame',
        technologies: [{name: 'Python', image: 'images/'},
                       {name: 'PyGame', image: 'images/'}
                    ]
    },

]

menuIcon.addEventListener('click', () => {
    flyOutNavigation.classList.toggle('hidden');
    flyOutNavigation.classList.toggle('visible');
});