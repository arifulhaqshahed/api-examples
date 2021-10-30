const loadBuddys = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => displayBuddys(data))
}
loadBuddys();

const displayBuddys = (data) => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies')
    for (const buddy of buddies) {
        console.log(buddy.name);
        const p = document.createElement('p');
        const name = buddy.name;
        p.innerText = `name: ${name.title} ${name.first} ${name.last}
        email: ${buddy.email}`;
        buddiesDiv.appendChild(p);
    }
}