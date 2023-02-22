import './index.scss';
import './menu.scss';
import Home from './home';
import Menu from './menu';

Home();

const navCallbacks = [Home, Menu];

const navElems = document.querySelectorAll('#navbar > div');
navElems.forEach((elem, index) => {
    elem.addEventListener('click', navCallbacks[index]);
});
