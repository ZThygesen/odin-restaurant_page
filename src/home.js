export default function loadHome() {
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