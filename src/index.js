import './style.css';
import createHome from './home';
import createMenu from './menu';
import createAbout from './about';

// Initial page load
createHome();

// Add tab switching logic
function initializeNavigation() {
    const homeBtn = document.querySelector('#home');
    const menuBtn = document.querySelector('#menu');
    const aboutBtn = document.querySelector('#about');

    homeBtn.addEventListener('click', createHome);
    menuBtn.addEventListener('click', createMenu);
    aboutBtn.addEventListener('click', createAbout);

    // Add active class to current tab
    const buttons = [homeBtn, menuBtn, aboutBtn];
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Set home as active by default
    homeBtn.classList.add('active');
}

// Initialize navigation after DOM content is loaded
document.addEventListener('DOMContentLoaded', initializeNavigation);