const menuIcon = document.querySelector('.menu-icon');
const flyOutNavigation = document.querySelector('.flyout-navigation');
const mobileProjectsContainer = document.querySelector('.mobile-projects-container');
const modalBackground = document.querySelector('.modal-background');
const closeModalButton = document.querySelector('.close-modal-button');
const modalProjectTitle = document.querySelector('.modal-project-title');
const modalDescriptionContent = document.querySelector('.modal-description-content');
const modalTechnologiesContainer = document.querySelector('.modal-technologies-container');
const modalDemoImage = document.querySelector('.modal-demo-image');
const gitHubLink = document.querySelector('.github-link');
const modalDemoLink = document.querySelector('.modal-demo-link');
const leftModalArrow = document.querySelector('.fa-angle-left');
const rightModalArrow = document.querySelector('.fa-angle-right');
const tabletProjectsContainer = document.querySelector('.tablet-projects-container');

let projects = {
    1: {
        title: 'Catch the Sun',
        description: `Web application for active explorers yearning to discover their next adventure, find hidden gem sceneries, and catch a beautiful sunset`,
        image: 'images/catch-the-sun.jpg',
        demoLink: 'https://youtu.be/3T0whD_oIG0',
        gitLink: 'https://github.com/williammadisondavis/CatchTheSun',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Google Maps API']
    },
    2: {
        title: 'Cookie Monster',
        description: `Game where player maneuvers Cookie Monster around the screen trying to catch cookies while avoiding falling bombs`,
        image: 'images/cookie-monster.jpg',
        demoLink: 'https://youtu.be/QQ3vjUYUUmo',
        gitLink: 'https://github.com/clinturbin/cookie_monster_pygame',
        technologies: ['Python', 'PyGame']
    },
    3: {
        title: 'Memory Game',
        description: `Memory game where player has to match randomly generated color pairs that are displayed on either a 4x4 or 6x6 board`,
        image: 'images/memory-game.jpg',
        demoLink: 'https://youtu.be/fEE3iTA69ZQ',
        gitLink: 'https://github.com/clinturbin/memory_game',
        technologies: ['HTML', 'CSS', 'JavaScript']
    }
};

let projectIds = Object.keys(projects);
let numberOfProjects = projectIds.length;
let currentProjectId;

//--------------------------------------------------------------------
//  Add Project Display to Page for Each Project - Mobile Version
//--------------------------------------------------------------------

let makeProjectContainer = (projectId) => {
    let projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    projectContainer.appendChild(createProjectTitle(projectId));
    projectContainer.appendChild(createProjectDisplay(projectId));
    projectContainer.addEventListener('click', () => {
        currentProjectId = parseInt(projectId);
        console.log(currentProjectId);
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
    mobileProjectsContainer.appendChild(makeProjectContainer(id));
});

//-------------------------------------------------------------------
//                  MODAL SCREEN
//-------------------------------------------------------------------

let openProjectModal = (projectId) => {
    modalBackground.classList.remove('hide-modal');
    updateModalDisplay(projectId);
};

let updateModalDisplay = (projectId) => {
    modalProjectTitle.textContent = projects[projectId].title;
    modalDemoImage.setAttribute('src', projects[projectId].image);
    modalDescriptionContent.textContent = projects[projectId].description;
    updateModalTechnologiesUsedDisplay(projectId);
    gitHubLink.setAttribute('href', projects[projectId].gitLink);
    modalDemoLink.setAttribute('href', projects[projectId].demoLink);
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

//----------------------------------------------------
//                CYCLE THROUGH PROJECTS
//----------------------------------------------------

let moveBackOneProject = () => {
    if (currentProjectId === 1) {
        currentProjectId = numberOfProjects;
    } else {
        currentProjectId -= 1;
    }
    updateModalDisplay(currentProjectId);
};

let moveForwardOneProject = () => {
    if (currentProjectId === numberOfProjects) {
        currentProjectId = 1;
    } else {
        currentProjectId += 1;
    }
    updateModalDisplay(currentProjectId);
};

leftModalArrow.addEventListener('click', moveBackOneProject);
rightModalArrow.addEventListener('click', moveForwardOneProject);

//--------------------------------------------------------------------
//  Add Project Display to Page for Each Project - Mobile Version
//--------------------------------------------------------------------

let makeTabletProjectContainer = (projectId) => {
    let projectContainer = document.createElement('div');
    projectContainer.classList.add('tablet-project-container');
    projectContainer.appendChild(addTabletProjectTitle(projectId));
    projectContainer.appendChild(addTabletProjectContent(projectId));
    return projectContainer;
};

let addTabletProjectTitle = (projectId) => {
    let tabletProjectTitle = document.createElement('p');
    tabletProjectTitle.classList.add('tablet-project-title');
    tabletProjectTitle.textContent = projects[projectId].title;
    return tabletProjectTitle;
};

let addTabletProjectContent = (projectId) => {
    let tabletProjectContent = document.createElement('div');
    tabletProjectContent.classList.add('tablet-project-content');
    tabletProjectContent.appendChild(addProjectContentLeft(projectId));
    tabletProjectContent.appendChild(addProjectContentRight(projectId));
    tabletProjectContent.appendChild(addTabletProjectLinks(projectId));
    return tabletProjectContent;
};

let addTabletProjectLinks = (projectId) => {
    let tabletProjectLinks = document.createElement('div');
    tabletProjectLinks.classList.add('tablet-project-links');
    let githubLink = projects[projectId].gitLink;
    let demoLink = projects[projectId].demoLink;
    tabletProjectLinks.appendChild(createTabletLinkButton('Github','tablet-github-link',githubLink));
    tabletProjectLinks.appendChild(createTabletLinkButton('Demo','tablet-demo-link',demoLink));
    return tabletProjectLinks;
};

let createTabletLinkButton = (text, className, link) => {
    let tabletLinkButton = document.createElement('a');
    tabletLinkButton.classList.add('modal-link');
    tabletLinkButton.classList.add(className);
    tabletLinkButton.setAttribute('href', link);
    tabletLinkButton.setAttribute('target', '_blank');
    tabletLinkButton.appendChild(addTabletLinkButtonText(text));
    return tabletLinkButton;
};

let addTabletLinkButtonText = (text) => {
    let linkText = document.createElement('p');
    linkText.classList.add('link-text');
    linkText.textContent = text;
    return linkText;
};

let addProjectContentLeft = (projectId) => {
    let projectContent = document.createElement('div');
    projectContent.classList.add('tablet-project-content-left');
    projectContent.appendChild(addTabletProjectImage(projectId));
    return projectContent;
};

let addTabletProjectImage = (projectId) => {
    let projectImage = document.createElement('img');
    projectImage.classList.add('tablet-project-image');
    projectImage.setAttribute('src', projects[projectId].image);
    return projectImage;
};

let addProjectContentRight = (projectId) => {
    let projectContent = document.createElement('div');
    projectContent.classList.add('tablet-project-content-right');
    projectContent.appendChild(addTabletProjectDescription(projectId));
    projectContent.appendChild(addTabletProjectTechnologies(projectId));
    return projectContent;
};

let addTabletProjectTechnologies = (projectId) => {
    let contentSection = document.createElement('div');
    contentSection.classList.add('tablet-project-content-section');
    contentSection.appendChild(addProjectSectionTitle('Technologies Used'));
    contentSection.appendChild(addProjectTechnologies(projectId));
    return contentSection;
};

let addProjectTechnologies = (projectId) => {
    let technologiesContainer = document.createElement('div');
    technologiesContainer.classList.add('tablet-technologies-container');
    let technologiesUsed = projects[projectId].technologies;
    technologiesUsed.forEach((technology) => {
        technologiesContainer.appendChild(addTabletProjectTechnology(technology));
    })
    return technologiesContainer;
};

let addTabletProjectTechnology = (technology) => {
    let tabletTechnology = document.createElement('p');
    tabletTechnology.classList.add('tablet-technology');
    tabletTechnology.textContent = technology;
    return tabletTechnology;
};

let addTabletProjectDescription = (projectId) => {
    let contentSection = document.createElement('div');
    contentSection.classList.add('tablet-project-content-section');
    contentSection.appendChild(addProjectSectionTitle('Description'));
    contentSection.appendChild(addProjectSectionDescription(projectId));
    return contentSection;
};

let addProjectSectionDescription = (projectId) => {
    let projectDescription = document.createElement('p');
    projectDescription.classList.add('tablet-description-text');
    projectDescription.textContent = projects[projectId].description;
    return projectDescription;
};

let addProjectSectionTitle = (title) => {
    let sectionTitle = document.createElement('p');
    sectionTitle.classList.add('tablet-project-section-title');
    sectionTitle.textContent = title;
    return sectionTitle;
};

projectIds.forEach((id) => {
    tabletProjectsContainer.appendChild(makeTabletProjectContainer(id));
});
//-------------------------------------------------------------------

menuIcon.addEventListener('click', () => {
    flyOutNavigation.classList.toggle('hidden');
    flyOutNavigation.classList.toggle('visible');
});

closeModalButton.addEventListener('click', hideModalScreen);
window.addEventListener('click', windowOnClick);
