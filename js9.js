//- Напишіть прикладів анонімної функції
console.log('- Напишіть прикладів анонімної функції');
(function() {
    console.log(1);
    
})
const a = 4;
(function() {
    console.log(2);
    
})


(function() {
    console.log(3);
    
})
const b = 4;
(function() {
    console.log(4);
    
})
(() => {
    console.log(5);
    
})
let b2 = 3;
//- Напишіть 5 прикладів самовикликаючої функції
console.log('Напишіть 5 прикладів самовикликаючої функції');

(function() {
    console.log(1);
    
}) ()
let c1 = 2;
(function() {
    console.log(2);
    
}) ()
let c2 = 2;
(function() {
    console.log(3);
    
}) ()
let c3 = 2;
(function() {
    console.log(4);
    
}) ()
let c4 = 2;
(function() {
    console.log(5);
    
}) ()
//- Повторіть колбек функцію bubbleSort з лекції
console.log('- Повторіть колбек функцію bubbleSort з лекції');
function BubbleSort(array, callback) {
    let a = 0;
    for(let i =0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            a++;
            let res = callback(array[j], array[j+1]);
            if (res) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
} 
let arr = [2, 3, 1, 0, -1, 5, 2, 6, 4];

function LeftBuble(a, b) {
    return a > b;
}
function RightBuble(a, b) {
    return a < b;
}
let ar1 = BubbleSort(arr, LeftBuble) 
console.log(ar1);

// Калькурятор.
//Створіть функцію calc(num1, num2, action), яка приймає 2 числа з prompt
//та знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)
//Результат повернути (return) і вивести
console.log(' Калькурятор.Створіть функцію calc(num1, num2, action), яка приймає 2 числа з promptта знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)Результат повернути (return) і вивести');
const num1 = +prompt('number1')
const num2 = +prompt('number2')
const action = prompt('action (+,-,*,/)')
function calc (num1, num2, action) {
    switch (action) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
    }
};
console.log(calc(num1, num2, action));

//На основі цього завдання зробіть 3 приклади:
//- Зробіть калькулятор застосовуючи підхід Function in function (1-ий приклад Function in function в лекції)
console.log('На основі цього завдання зробіть 3 приклади:- Зробіть калькулятор застосовуючи підхід Function in function (1-ий приклад Function in function в лекції)');
function calc1 (num1, num2, action) {
    function add () { return num1 + num2};
    function min () { return num1 - num2};
    function mnoj () { return num1 * num2};
    function dil () { return num1 / num2};
    switch (action) {
        case '+': return add();
        case '-': return min();
        case '*': return mnoj();
        case '/': return dil();
    }
}
const res1 = calc(3, 2, '+');
console.log(res1);
const res2 = calc(3, 2, '-');
console.log(res2);
const res3 = calc(3, 2, '*');
console.log(res3);
const res4 = calc(3, 2, '/');
console.log(res4);
// - Зробіть калькулятор застосовуючи підхід Function in function (2-ий приклад Function in function в лекції)
console.log('- Зробіть калькулятор застосовуючи підхід Function in function (2-ий приклад Function in function в лекції)');
function add (num1, num2) { return num1 + num2};
function min (num1, num2) { return num1 - num2};
function mnoj (num1, num2) { return num1 * num2};
function dil (num1, num2) { return num1 / num2};

function calc1 (a, b, action) {

    switch (action) {
        case '+': return add(a, b);
        case '-': return min(a, b);
        case '*': return mnoj(a, b);
        case '/': return dil(a, b);
    }
}
let a1 = calc1(6, 4, '+');
console.log(a1);
let a2 = calc1(6, 4, '-');
console.log(a2);
let a3 = calc1(6, 4, '*');
console.log(a3);
let a4 = calc1(6, 4, '/');
console.log(a4);
// - Зробіть калькулятор використовуючи функцію зворотнього виклику (callback function)
console.log(' - Зробіть калькулятор використовуючи функцію зворотнього виклику (callback function), ');
const callback = (funct, num1, num2 ) => {
    funct (num1, num2)
}

function add (num1, num2) { console.log(num1 + num2)};
function min (num1, num2) { console.log(num1 - num2)};
function mnoj (num1, num2) { console.log(num1 * num2)};
function dil (num1, num2) { console.log(num1 / num2)};

callback (add, 2, 5);
callback (min, 2, 5);
callback (mnoj, 2, 5);
callback (dil, 2, 5);