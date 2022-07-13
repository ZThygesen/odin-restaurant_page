import home from './home';
import menu from './menu';
import contact from './contact';

const content = document.querySelector('div#content');

const navWrapper = document.createElement('div');
navWrapper.classList.add('nav-wrapper');

const nav = document.createElement('div');
nav.classList.add('nav');

const navHome = document.createElement('button');
navHome.textContent = 'Home';
navHome.addEventListener('click', () => { 
    content.innerHTML = '';
    content.appendChild(navWrapper);
    content.appendChild(home());
});

const navMenu = document.createElement('button');
navMenu.textContent = 'Menu';
navMenu.addEventListener('click', () => {
    content.innerHTML = ''; 
    content.appendChild(navWrapper);
    content.appendChild(menu());
});

const navContact = document.createElement('button');
navContact.textContent = 'Contact';
navContact.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(navWrapper);
    content.appendChild(contact());
});

nav.appendChild(navHome);
nav.appendChild(navMenu);
nav.appendChild(navContact);

navWrapper.appendChild(nav);

content.appendChild(navWrapper);

content.appendChild(home());

