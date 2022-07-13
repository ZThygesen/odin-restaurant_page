export default function contact() {
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