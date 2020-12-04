import { btn } from './button';
import styles from './style.css';

const body = document.querySelector('body');
const addButton = () => {
    body.appendChild(btn);
}

addButton();