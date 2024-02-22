
// ***   1   ***

for (let hello = 1; hello <= 2; hello ++) {
    console.log('Привет');
}



// ***   2   ***

for (let num = 1; num <= 5; num ++) {
    console.log(num);
}




// ***   3   ***

for (let num2 = 7; num2 <= 22; num2 ++) {
    console.log(num2);
}


// ***   4   ***

let obj = {
    "Коля" : 200,
    "Вася" : 300,
    "Петя" : 400,
};

for (let name in obj) {
    console.log(`${name} - зарплата ${obj[name]} долларов`);
}



// ***   5   ***

let number = 1000;
let quantity = 0;

while (number >= 50) {
    number /= 2;
    quantity++;
}

console.log(`Итоговое число - ${number}`);
console.log(`Колличество итераций - ${quantity}`);



// ***   6   ***

let firstFriday = 2;
 
do {
    console.log(`Сегодня пятница, ${firstFriday} число. Необходимо подготовить отчет.`);
    firstFriday += 7;
} while(firstFriday <= 31);
   