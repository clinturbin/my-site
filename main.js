const menuIcon = document.querySelector('.menu-icon');
const flyOutNavigation = document.querySelector('.flyout-navigation');
const projectsContainer = document.querySelector('.projects-container');
const modalBackground = document.querySelector('.modal-background');
const closeModalButton = document.querySelector('.close-modal-button');
const modalProjectTitle = document.querySelector('.modal-project-title');
const modalDescriptionContent = document.querySelector('.modal-description-content');
const modalTechnologiesContainer = document.querySelector('.modal-technologies-container');
const modalDemoImage = document.querySelector('.modal-demo-image');
const gitHubLink = document.querySelector('.github-link');
const demoLink = document.querySelector('.demo-link');

let projects = {
    1: {
        title: 'Catch the Sun',
        description: `Web application for active explorers yearning to discover their next adventure, find hidden gem sceneries, and catch a beautiful sunset`,
        image: 'images/catch-the-sun.jpg',
        demoLink: '',
        gitLink: 'https://github.com/williammadisondavis/CatchTheSun',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Google Maps API']
    },
    2: {
        title: 'Cookie Monster',
        description: `Game where player maneuvers Cookie Monster around the screen trying to catch cookies while avoiding falling bombs`,
        image: 'images/cookie-monster.jpg',
        demoLink: '',
        gitLink: 'https://github.com/clinturbin/cookie_monster_pygame',
        technologies: ['Pyhton', 'PyGame']
    },
    3: {
        title: 'Memory Game',
        description: `Memory game where player has to match randomly generated color pairs that are displayed on either a 4x4 or 6x6 board`,
        image: 'images/memory-game.jpg',
        demoLink: '',
        gitLink: 'https://github.com/clinturbin/memory_game',
        technologies: ['HTML', 'CSS', 'JavaScript']
    }
};

let projectIds = Object.keys(projects);
let currentProjectId;

//--------------------------------------------------------------
//         Add Project Display to Page for Each Project
//--------------------------------------------------------------

let makeProjectContainer = (projectId) => {
    let projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    projectContainer.appendChild(createProjectTitle(projectId));
    projectContainer.appendChild(createProjectDisplay(projectId));
    projectContainer.addEventListener('click', () => {
        openProjectModal(projectId);
    });
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
//                  MODAL SCREEN
//-----------------------------------------------------------

let openProjectModal = (projectId) => {
    modalBackground.classList.remove('hide-modal');
    updateModalDisplay(projectId);
    console.log(projects[projectId].title + ' was clicked!')
};

let updateModalDisplay = (projectId) => {
    modalProjectTitle.textContent = projects[projectId].title;
    modalDemoImage.setAttribute('src', projects[projectId].image);
    modalDescriptionContent.textContent = projects[projectId].description;
    updateModalTechnologiesUsedDisplay(projectId);
    gitHubLink.setAttribute('href', projects[projectId].gitLink);
};

let updateModalTechnologiesUsedDisplay = (projectId) => {
    clearModalTechnologiesDisplay();
    let technologiesUsed = projects[projectId].technologies;
    technologiesUsed.forEach((technology) => {
        addModalTechnology(technology);
    })
};

let addModalTechnology = (technology) => {
    let technologyDisplay = document.createElement('p');
    technologyDisplay.classList.add('modal-technology-used');
    technologyDisplay.textContent = technology;
    modalTechnologiesContainer.appendChild(technologyDisplay);
};

let clearModalTechnologiesDisplay = () => {
    let technologiesDisplayed = document.querySelectorAll('.modal-technology-used');
    technologiesDisplayed.forEach((technology) => {
        modalTechnologiesContainer.removeChild(technology);
    })
};



let hideModalScreen = () => {
    modalBackground.classList.add('hide-modal');
};

let windowOnClick = (event) => {
    if (event.target === modalBackground) {
        hideModalScreen();
    }
};





menuIcon.addEventListener('click', () => {
    flyOutNavigation.classList.toggle('hidden');
    flyOutNavigation.classList.toggle('visible');
});

closeModalButton.addEventListener('click', hideModalScreen);
window.addEventListener('click', windowOnClick);
