// ***   1   ***

let password = 'T4asd1';
let enterPassword = prompt('Введите пароль');

(enterPassword === password) ? alert('Пароль введен верно') : alert('Пароль введен неверно');



// ***   2   ***

let c = 5;

(c >= 0 && c <= 10) ? console.log('Верно') : console.log('Неверно');



// ***   3   ***

let d = 5;
let e = 215;

(d > 100 || e > 100)? console.log('Верно') : console.log('Неверно');



// ***   4   ***

let a = '2';
let b = '3';

alert(a * b - 1); 



// ***   5   ***

let monthNumber = 12;

switch (monthNumber) {
    case 12:
        console.log('Зима');
        break;
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Зима');
        break;
    case 3:
        console.log('Весна');
        break;
    case 4:
        console.log('Весна');
        break;
    case 5:
        console.log('Весна');
        break;
    case 6:
        console.log('Лето');
        break;
    case 7:
        console.log('Лето');
        break;
    case 8:
        console.log('Лето');
        break;
    case 9:
        console.log('Осень');
        break;
    case 10:
        console.log('Осень');
        break;
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Неизвестно');
}



// Дополнительно 
// ***   7   ***

let enterNumber = prompt('Пожалуйста, введите любое число');

if (!isNaN(enterNumber) && (enterNumber % 2 === 0)) {
        alert('Число четное');   
}  else if(!isNaN(enterNumber) && (enterNumber % 2 !== 0)) {
        alert('Число не четное');
}  else {
        alert('Это не число');
}



// ***   8-9   ***

let clientOS = 0;
let clientDeviceYear = 2015;

if (clientOS === 0 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для iOS по ссылке');
}else if (clientOS === 1 && clientDeviceYear < 2015) {
    console.log('Установите облегченную версию приложения для Android по ссылке');
}else if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
}else if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
} else {
    console.log('Неизвестно');
}
