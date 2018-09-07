const menuIcon = document.querySelector('.menu-icon');
const flyOutNavigation = document.querySelector('.flyout-navigation');
const projectsContainer = document.querySelector('.projects-container');

let projects = {
    1: {
        title: 'Catch the Sun',
        description: `Web application for active explorers yearning to discover their next adventure, find hidden gem sceneries, and catch a beautiful sunset`,
        image: 'images/catch-the-sun.jpg',
        demoLink: '',
        gitLink: 'https://github.com/williammadisondavis/CatchTheSun',
        technologies: [{name: 'HTML', image: 'images/'},
                       {name: 'CSS', image: 'images/'},
                       {name: 'JavaScript', image: 'images/'},
                       {name: 'Google Maps API', image: 'images/'}
                    ]
    },
    2: {
        title: 'Cookie Monster',
        description: `Game where player maneuvers Cookie Monster around the screen trying to catch cookies while avoiding falling bombs`,
        image: 'images/cookie-monster.jpg',
        demoLink: '',
        gitLink: 'https://github.com/clinturbin/cookie_monster_pygame',
        technologies: [{name: 'Python', image: 'images/'},
                       {name: 'PyGame', image: 'images/'}
                    ]
    },
    3: {
        title: 'Memory Game',
        description: `Memory game where player has to match randomly generated color pairs that are displayed on either a 4x4 or 6x6 board`,
        image: 'images/memory-game.jpg',
        demoLink: '',
        gitLink: 'https://github.com/clinturbin/memory_game',
        technologies: [{name: 'HTML', image: 'images/'},
                       {name: 'CSS', image: 'images/'},
                       {name: 'JavaScript', image: 'images/'}
                    ]
    }
};

let projectIds = Object.keys(projects);

//--------------------------------------------------------------
//         Add Project Display to Page for Each Project
//--------------------------------------------------------------

let makeProjectContainer = (projectId) => {
    let projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    projectContainer.appendChild(createProjectTitle(projectId));
    projectContainer.appendChild(createProjectDisplay(projectId));
    return projectContainer;
};

let createProjectTitle = (projectId) => {
    let projectTitle = document.createElement('p');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = projects[projectId].title;
    return projectTitle;
};

let createProjectDisplay = (projectId) => {
    let projectDisplay = document.createElement('div');
    projectDisplay.classList.add('project-display');
    projectDisplay.appendChild(createProjectImageContainer(projectId));
    return projectDisplay;
};

let createProjectImageContainer = (projectId) => {
    let projectImageContainer = document.createElement('div');
    projectImageContainer.classList.add('project-image-container');
    projectImageContainer.appendChild(addProjectImage(projectId));
    return projectImageContainer;
}

let addProjectImage = (projectId) => {
    let projectImage = document.createElement('img');
    projectImage.classList.add('project-image');
    projectImage.setAttribute('src', projects[projectId].image);
    return projectImage;
};

projectIds.forEach((id) => {
    projectsContainer.appendChild(makeProjectContainer(id));
});

//-----------------------------------------------------------

menuIcon.addEventListener('click', () => {
    flyOutNavigation.classList.toggle('hidden');
    flyOutNavigation.classList.toggle('visible');
});