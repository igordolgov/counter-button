import styles from './button.css'; //импортируем стили из файла button.css

export const btn = document.createElement('button'); //создаем (и экспортируем) переменную btn и присваиваем ей создание кнопки

btn.classList.add('buttonStyle'); //добавляем кнопке класс buttonStyle (из файла button.css)

btn.textContent = "Счётчик"; //добавляем название на кнопке

let count = 0; //создаем  переменную и присваиваем ей значение 0

btn.addEventListener('click', () => { //ждем, когда будет клик по кнопке...
    btn.textContent = `${++count} кликов`; //...и отображаем количество кликов на самой кнопке
});
