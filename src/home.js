import PizzaImage from './assets/sausagePizza.jpg';

function load() {
    const contentElement = document.getElementById('content');
    const mainHeading = document.createElement('h1');
    mainHeading.classList.add('mainHeading');
    mainHeading.textContent = 'Welcome to Thenujan\'s Tasty Restaurant!';

    const subHeading = document.createElement('h2');
    subHeading.classList.add('subHeading');
    subHeading.textContent = 'We have the best pizza in town';

    contentElement.appendChild(mainHeading);
    contentElement.appendChild(subHeading);

    const pizzaImage = new Image();
    pizzaImage.src = PizzaImage;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer');
    imageContainer.appendChild(pizzaImage);
    contentElement.appendChild(imageContainer);
}

export default load;
