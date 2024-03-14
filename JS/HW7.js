// ***   1   *** 

const lowerCase = 'js';
const upperCase = lowerCase.toUpperCase();
console.log(upperCase);



// ***   2   *** 

function arrStr(arr, str) {
    const newArrStr = arr.filter(newStr => newStr.toLowerCase().startsWith(str.toLowerCase()));
    console.log(newArrStr);
} 
arrStr(['право', 'трио', 'пророк', 'спрос'], 'пр');



// ***   3   *** 

const num = 32.58884;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));



// ***   4   *** 

const arrNum = [52, 53, 49, 77, 21, 32]
console.log(Math.min(...arrNum));
console.log(Math.max(...arrNum));



// ***   5   *** 

function randomNumber (min, max) {
    console.log(Math.round(Math.random() * (max - min) + min))
}
randomNumber(1, 10)


 
// ***   6   *** 

function arrRandomNumber(num) {
    const arrRandom = [];
    for (i = 0; i < num / 2; i ++){
        arrRandom.push(Math.round(Math.random() * num));
    }
    return arrRandom;
}
arrRandomNumber(10);



// ***   7   *** 

function randomNum(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
randomNum(2, 12);



// ***   8   *** 

let todayDate = new Date();
console.log(todayDate);



// ***   9   ***

let currentDate = new Date();
let days73 = currentDate.setDate(73);
let millsecondsToday = currentDate.getDate() * 24 * 60 * 60 * 1000;
let daysForward73 = new Date(millsecondsToday + days73);
console.log(daysForward73);



// ***   10   ***

function date(myDate) {
    const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 
                    'Октябрь', 'Ноябрь', 'Декабрь'];
    let fullDate = "Сегодня: " + myDate.getDate() + " " + month[myDate.getMonth()] + " " 
    + myDate.getFullYear() + ", это - " + days[myDate.getDay()] + ", " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds(); 
    console.log(fullDate);               
}
date(new Date());


// ***   10   ***

function rememberWordGame() {
    const arrFruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let randomArrFruits = arrFruits.sort(() => Math.random() - 0.5);
    alert('Запомни первое и последнее слово: ' + randomArrFruits.join(', '));
    
    let enterWord1 = prompt('Теперь напиши первое слово');
    let enterWord2 = prompt('Теперь напиши второе слово');
    
    if (enterWord1.toLowerCase() === randomArrFruits[0].toLowerCase() && enterWord2.toLowerCase() === randomArrFruits[randomArrFruits.length -1].toLowerCase()) {
        alert('Угадал');
    } else if (enterWord1.toLowerCase() === randomArrFruits[0].toLowerCase() || enterWord2.toLowerCase() === randomArrFruits[randomArrFruits.length -1].toLowerCase()) {
        alert('Почти угадал');
    } else {
        alert('Не угадал');
    }
}