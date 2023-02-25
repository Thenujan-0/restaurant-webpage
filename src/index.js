import './index.scss';
import './menu.scss';
import './contact.scss';
import Home from './home';
import Menu from './menu';
import Contact from './contact';

Home();

const navCallbacks = [Home, Menu, Contact];

const navElems = document.querySelectorAll('#navbar > div');
navElems.forEach((elem, index) => {
    elem.addEventListener('click', navCallbacks[index]);
});
