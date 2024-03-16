// ***   1   *** 

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(people.sort((a, b) => a.age - b.age));



// ***   2   *** 

function isPositive(number) {
    return number > 0;
}

function isMale(peopleGender) {
    return peopleGender.gender === 'male';
}

function filter(arrayPeople, ruleFunction) {
    let newArr = [];
    for (let i = 0; i < arrayPeople.length; i++) {
        if (ruleFunction(arrayPeople[i])) {
            newArr.push(arrayPeople[i]);
        }
    }
    return newArr;
}
    
console.log(filter([3, -4, 1, 9], isPositive));
    
const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
    
console.log(filter(people, isMale));



// ***   3   *** 

const timer = (deadline) => {
    
    const interval = setInterval(() => {
       const date = new Date;
       console.log(date);
    }, 3000);
 
    setTimeout(() => {
    clearInterval(interval);
       console.log('30 секунд прошло');
    }, deadline * 1000);
 };
 
 timer(30);



// ***   4   *** 

function delayForSecond(callback) {
    setTimeout(() => callback(), 1000); 
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});



// ***   5   *** 

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000);
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Глеб'));