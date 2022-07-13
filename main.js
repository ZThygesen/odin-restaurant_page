/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Olive Gluten';

    const image = document.createElement('img');
    image.src = './images/restaurant.jpg';
    image.alt = 'Restaurant';

    const headline = document.createElement('p');
    headline.classList.add('headline');
    headline.textContent = 'Authentic Italian cuisine.';

    const hook = document.createElement('p');
    hook.classList.add('hook');
    hook.textContent = 'This restaurant is incredible. Like, really good. Much yum. Many mmmm. Come eat here.';

    home.appendChild(title);
    home.appendChild(image);
    home.appendChild(headline);
    home.appendChild(hook);

    return home;
}

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Olive Gluten Menu';

    const items = document.createElement('div');
    items.classList.add('items');

    const dishes = [
        {name: 'Spaghetti', image: './images/dishes/spaghetti.jpg', price: '$8.99'},
        {name: 'Chicken Alfredo', image: './images/dishes/chicken_alfredo.jpg', price: '$9.99'},
        {name: 'Lasagna', image:'./images/dishes/lasagna.jpg', price: '$9.99'},
        {name: 'Pizza', image:'./images/dishes/pizza.jpg', price: '$12.99'},
        {name: 'Chicken Parmesan', image:'./images/dishes/chicken_parmesan.jpg', price: '$9.99'},
        {name: 'Tortellini', image:'./images/dishes/tortellini.jpg', price: '$8.99'},
        {name: 'Calamari', image:'./images/dishes/calamari.jpg', price: '$7.99'},
        {name: 'Garlic Bread', image:'./images/dishes/garlic_bread.jpg', price: '$4.99'},
        {name: 'Salad', image:'./images/dishes/salad.jpg', price: '$2.99'},
        {name: 'Cannolis', image:'./images/dishes/cannolis.jpg', price: '$3.99'},
    ]

    dishes.forEach(dish => {
        console.log(dish);

        const item = document.createElement('div');
        item.classList.add('dish');

        const name = document.createElement('p');
        name.textContent = dish.name;

        const image = document.createElement('img');
        image.src = dish.image;
        image.alt = dish.name;

        const price = document.createElement('p');
        price.textContent = dish.price;

        item.appendChild(image);
        item.appendChild(name);
        item.appendChild(price);

        items.appendChild(item);
    });

    menu.appendChild(title);
    menu.appendChild(items);

    return menu;
}

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Contact us at Olive Gluten!'

    const info = document.createElement('div');
    info.classList.add('info');

    const left = document.createElement('div');
    left.classList.add('left');

    const information = [
        {info: 'Phone', content: '123-456-7890'},
        {info: 'Email', content: 'olive.gluten@email.com'},
        {info: 'Address', content: '12345 Italy St, Rome, Italy'},
        {info: 'Manager', content: 'John Doe'}
    ];

    information.forEach(i => {
        const row = document.createElement('tr');

        const info = document.createElement('th');
        info.textContent = i.info;

        const content = document.createElement('td');
        content.textContent = i.content;

        row.appendChild(info);
        row.appendChild(content);

        left.appendChild(row);
    });

    const right = document.createElement('div');
    right.classList.add('right');

    const hours = [
        {day: 'Monday', hours: '11a - 9p'},
        {day: 'Tuesday', hours: '11a - 9p'},
        {day: 'Wednesday', hours: '11a - 9p'},
        {day: 'Thursday', hours: '11a - 9p'},
        {day: 'Friday', hours: '11a - 10p'},
        {day: 'Saturday', hours: '11a - 10p'},
        {day: 'Sunday', hours: '12p - 8p'}
    ];

    hours.forEach(d => {
        const row = document.createElement('tr');

        const day = document.createElement('th');
        day.textContent = d.day;

        const hours = document.createElement('td');
        hours.textContent = d.hours;

        row.appendChild(day);
        row.appendChild(hours);

        right.appendChild(row);
    });

    const makeReservation = document.createElement('button');
    makeReservation.textContent = 'Make Reservation';

    contact.appendChild(title);

    info.appendChild(left);
    info.appendChild(right);

    contact.appendChild(info);

    contact.appendChild(makeReservation);

    return contact;
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);




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
    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
});

const navMenu = document.createElement('button');
navMenu.textContent = 'Menu';
navMenu.addEventListener('click', () => {
    content.innerHTML = ''; 
    content.appendChild(navWrapper);
    content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
});

const navContact = document.createElement('button');
navContact.textContent = 'Contact';
navContact.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(navWrapper);
    content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
});

nav.appendChild(navHome);
nav.appendChild(navMenu);
nav.appendChild(navContact);

navWrapper.appendChild(nav);

content.appendChild(navWrapper);

content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());


})();

/******/ })()
;