function createInputContainer(name, text) {
    const container = document.createElement('div');
    container.classList.add('inputContainer');
    const label = document.createElement('label');
    label.setAttribute('for', `#${name}`);
    label.textContent = text;
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    const id = name.charAt(0).toUpperCase() + name.slice(1);
    input.setAttribute('name', id);
    input.id = id;
    container.appendChild(label);
    container.appendChild(input);
    return container;
}

function createSubmitButton() {
    const button = document.createElement('button');
    button.textContent = 'Submit';
    return button;
}

function createLeftSection(container) {
    const section = document.createElement('div');
    section.classList.add('section', 'left');
    container.appendChild(section);
    const nameInput = createInputContainer('fullName', 'Enter Full Name');
    section.appendChild(nameInput);
    const mailInput = createInputContainer('email', 'Enter Email Address');
    section.appendChild(mailInput);
    const button = createSubmitButton();
    section.appendChild(button);
}

function createSectionRight(container) {
    const section = document.createElement('div');
    section.classList.add('section', 'right');
    container.appendChild(section);

    const address = document.createElement('p');
    address.textContent = 'No 2/2 vivegananthanagar East, Kilinochchi';

    const number = document.createElement('p');
    number.textContent = '0777312432';

    section.appendChild(address);
    section.appendChild(number);
}

export default function load() {
    const contentElement = document.querySelector('#content');
    contentElement.innerHTML = '';
    const main = document.createElement('div');
    main.classList.add('main');
    contentElement.appendChild(main);
    const container = document.createElement('div');
    container.classList.add('container');
    main.appendChild(container);
    createLeftSection(container);
    createSectionRight(container);
}
