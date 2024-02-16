
// ***   1   ***

let a = 10;
alert(a);
a = 20;
alert(a);



// ***   2   ***

const firstReleaseIphone = 2007;
alert(firstReleaseIphone);



// ***   3   ***

const creatorNameJS  = 'Брендан Эйх';
alert(creatorNameJS);



// ***   4   ***

let one = 10;
let two = 2;
alert(one + two);
alert(one - two);
alert(one * two);
alert(one / two);



// ***   5   ***

let result = (2 ** 5);
alert(result);



// ***   6   ***

let c = 9;
let d = 2;
alert(c % d);



// ***   7   ***

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);



// ***   8   ***

let age = prompt('Сколько вам лет?');
alert(`Вам ${age} лет`);



// ***   9   ***

const user = {
    name: 'Larisa',
    age: 23,
    isAdmin: true,
};

user['city of residence'] = 'Krasnoyarsk';

user.age = 25;

delete user['city of residence'];

let info = prompt('Какую информацию хотите узнать о пользователе?');

alert(user[info]);



// ***   10   ***

let firstName = prompt('Как твое имя?');
alert(`Привет, ${firstName}!`);