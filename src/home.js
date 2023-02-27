import PizzaImage from './assets/pizza.jpg';

function load() {
    const contentElement = document.getElementById('content');
    contentElement.innerHTML = '';

    const textContainer = document.createElement('div');
    textContainer.classList.add('textContainer');

    const mainHeading = document.createElement('h1');
    mainHeading.classList.add('mainHeading');
    mainHeading.textContent = 'Welcome to Thenujan\'s Tasty Restaurant!';

    const subHeading = document.createElement('h2');
    subHeading.classList.add('subHeading');
    subHeading.textContent = 'We have the best pizza in town';

    textContainer.appendChild(mainHeading);
    textContainer.appendChild(subHeading);
    contentElement.appendChild(textContainer)

    const pizzaImage = new Image();
    pizzaImage.src = PizzaImage;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer');
    imageContainer.appendChild(pizzaImage);
    contentElement.appendChild(imageContainer);

    const darkOverview = document.createElement('div');
    darkOverview.classList.add('darkOverview');
    contentElement.appendChild(darkOverview);
}

export default load;
