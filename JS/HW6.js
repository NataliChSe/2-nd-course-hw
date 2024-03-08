// ***   1   ***

const task1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < task1.length; i++) {
    console.log(task1[i]);
    if (task1[i] == 10) break;
}



// ***   2   ***

const task2 = [1, 5, 4, 10, 0, 3];
const indexTask2 = task2.indexOf(4);
console.log(indexTask2);



// ***   3   ***

const task3 = [1, 3, 5, 10, 20];
let joinTask3 = task3.join(' ');
console.log(joinTask3);



// ***   4   ***

const task4 = [];

for (let i = 0; i < 3; i++) {
    task4.push([]);
    for (let j = 0; j < 3; j++) {
        task4[i].push(1);
    }
} 



// ***   5   ***

const task5 = [1, 1, 1];
task5.push(2, 2, 2);
console.log(task5);



// ***   6   ***

const task6 = [9, 8, 7, 'a', 6, 5];
task6.sort().filter(Number);
   
    

// ***   7   ***

const task7 = [9, 8, 7, 6, 5];

let guessNumber = Number(prompt('Угадай число'));
if (task7.includes(guessNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}



// ***   8   ***

const task8 = 'abcdef';  
const lineTask8 = task8.split('').reverse().join('');
console.log(lineTask8);



// ***   9   ***

const task9 = [
    [1,2,3],
    [4,5,6],
];
let oneArr = task9.flat(); 
console.log(oneArr);



// ***   10   ***

const arrRandom = [2, 6, 4, 8, 9, 7, 3];

for (let i = 0; i < arrRandom.length -1; i++) {
    console.log(arrRandom[i] + arrRandom[i+1]);
}
 

// ***   11   ***

const arrNumber = [3, 5, 8, 2, 9];

const squareNumber = arrNumber.map(function(num) {
    return num ** 2;
});
console.log(squareNumber);



// ***   12   ***                ?????????

const arrStr = ['дом', 'комната', 'земля'];

const lengthArrStr = arrStr.map(function(str) {
    arrStr.forEach((el) => {
        console.log(el.length);
    });
});



// ***   13   ***

const arrNumb = [3, -5, 8, 2, -9, -1];

const negativeNumber = arrNumb.filter(negativeFilter => negativeFilter < 0);
console.log(negativeNumber);



// ***   14   ***

const arrRandom = [];

for (i = 0; i < 10; i++) {
    arrRandom.push(Math.floor(Math.random() * 11));
}

const evenNumber = arrRandom.filter(even => even % 2 === 0);

console.log(arrRandom);
console.log(evenNumber);



// ***   15   ***

const arrRandom6 = [];

for (i = 0; i < 6; i++) {
    arrRandom6.push(Math.floor(Math.random() * 11));
}
const average = arrRandom6.reduce((total, num) => total + num, 0) / arrRandom6.length;

console.log(arrRandom6);
console.log(average);