export default function load() {
    const contentElement = document.querySelector('#content');
    contentElement.innerHTML = '';
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('cardContainer');
    contentElement.appendChild(cardContainer);

    const menuCard = document.createElement('div');
    menuCard.classList.add('menuCard');
    cardContainer.appendChild(menuCard);
    populateMenu(menuCard);
}

function populateMenu(menuCard) {
    let section1 = createSection('Beverages', ['Buddy', 'Medium', 'Milo', 'Ice cream']);
    let section2 = createSection('Kottu', ['Normal kottu', 'Checken masala kottu', 'Egg kottu', 'Veg kottu']);
    menuCard.appendChild(section1);
    menuCard.appendChild(section2);
}
function createSection(headingText, items) {
    const section = document.createElement('div');
    section.classList.add('section');
    const heading = document.createElement('h2');
    heading.textContent = headingText;
    section.appendChild(heading);
    const list = document.createElement('ul');
    const listElements = createListItems(items);
    listElements.forEach((element) => {
        list.appendChild(element);
    });
    section.appendChild(list);
    return section;
}

function createListItems(items) {
    const elementsArray = [];
    items.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        elementsArray.push(listItem);
    });
    return elementsArray;
}
