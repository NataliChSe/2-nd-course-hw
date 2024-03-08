// ***   1   ***

function number(a, b) {
   if (a >= b) {
     return b;
   } else if (a <= b){
     return a;
   }
}

number(5, 8);



// ***   2   ***

function parity(c) {
    if (c % 2 === 0) {
      return 'четное число';
    } 
    return 'нечетное число';
 }
 
 parity(5);


// ***   3   ***

// 3.1
function square (a) {
    let squareNum = a ** 2;
    console.log(`Квадрат числа равен ${squareNum}`);
}
square(5); 

// 3.2
function square (b) {
    return b ** 2;
}
const result = square(5);
console.log(`Квадрат числа равен ${result}`);



// ***   4   ***

function userAge () {
    let age = prompt ('Сколько вам лет?');
    if (age < 0){
        alert('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        alert('Привет друг');
    }
    else {
        alert('Добро пожаловать');
    }
}

userAge ();






let ageCheck = () => {
    age = Number(prompt('Сколько вам лет?'));

    if (isNaN(age) || Math.sign(age) === -1) {
        return 'Вы ввели неправильное значение';
    } else if (age > 0 && age <= 12) {
        return 'Привет, друг!';
    } {
        return 'Добро пожаловать!';
    }
}
alert(ageCheck());



// ***   5   ***

function numbers (d, e) {
    if (isNaN(Number(d)) || isNaN(Number(e))) {
        return 'Одно или оба значения не являются числом';
    } else {
        return d * e;
    }
}

numbers(2, 2);



// ***   6   ***

function getCube () {
    let enterNumber = Number(prompt('Пожалуйста, введите любое число'));
    if (isNaN(enterNumber)) {
        return 'Переданный параметр не являются числом';
    } else {
        return enterNumber ** 3;
    }
}

getCube();



// ***   7   ***

function getArea () {
    return Math.PI * Math.pow(this.radius, 2);
}
function getPerimeter () {
    return Math.PI * this.radius * 2;
}

const circle1 = { 
    radius: 7,
    getArea,
    getPerimeter,
};

const circle2 = {
    radius: 5,
    getArea,
    getPerimeter,
};

circle1.getArea();
circle2.getArea();
circle1.getPerimeter();
circle2.getPerimeter();



// ***   8   ***

function seasons() {
    let season = Number(prompt('Введите месяц: число от 1 до 12'));
    if (season === 3 || season === 4 || season === 5) {
        alert('Весна');
    } else if (season === 6 || season === 7 || season === 8) {
        alert('Лето');
    } else if (season === 9 || season === 10 || season === 11) {
        alert('Осень');
    } else if (season === 12 || season === 1 || season === 2) {
        alert('Зима');
    } else {
        alert('Вы ввели неправильное значение');
    }
}
