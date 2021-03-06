export default function loadMenu() {
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