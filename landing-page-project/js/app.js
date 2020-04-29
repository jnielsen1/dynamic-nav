/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// navigation global var
const navBar = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
const assembleNav = function () {
    //Create a blank strink that we can add HTML into
    let navLink = '';
    //Loop through the page section tags and get ID info
    for (section of sections) {
        //Variable for section ID
        const sectionID = section.id;
        //Variable for data-nav 
        const sectionDataNav = section.dataset.nav;
        //Build html to add to navbar
        navLink += `<li><a class="menu__link ${sectionID}" href="#${sectionID}">${sectionDataNav}</a></li>`;
    };

    //Add links to the nav bar
    navBar.innerHTML = navLink;


};

//build the nav
assembleNav();

// Add class 'active' to section when near top of viewport
// GET THE POSITION OF THE BOX
//ASSIGN THE ACTIVE CL



//identify the position of a section
const boxPosition = function (section) {
    return section.getBoundingClientRect().top;
} ;

// remove 'your-active-class' from div 
const removeActiveClass = function (section) {
    section.classList.remove('your-active-class');
}

//Set section as active:
//Add 'your-active-class' to the div in the diplay
const addActiveClass = function (condition, section) {
    if (condition) {
        section.classList.add('your-active-class');
    };
};

// function to remove and add 'your-active-class' 
const makeActive = function () {
    //loop through sections in DOM
    for (section of sections) {
        //check the location of the top of the section
        const elementOffset = boxPosition(section);
        //check if the sections to is less than 100px from the top of the display
        onDisplay = () => elementOffset < 100 && elementOffset >= -100;
        //remove 'your-active-section' fom div that is more than 100 px away from top
        removeActiveClass(section);
        //add 'your-active-class' to div that is less than 100 px away from top
        addActiveClass(onDisplay(), section);
    };
};

//Activates function to assign the class: 'your-active-class' on scroll
window.addEventListener('scroll', makeActive);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active