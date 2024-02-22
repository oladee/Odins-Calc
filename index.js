// accesing DOM Elements

let main = document.querySelector('main')
let button =[...document.querySelectorAll('button')]

// end of accessing DOM Elements
// basic maths operators for the calculator
// addition
const add = (a,b)=> a + b
// multiplication
const multiply = (a,b) => a * b
// subtraction
const subtract = (a,b) => a - b
// division
const divide = (a,b) => a / b
// declaring calculator variables
let firstNumber = '';
let operator = '';
let secondNumber = '';
// end of declaration

const operate = (firstNumber, operator, secondNumber) =>{
    switch (operator){
        case '+':
            add(firstNumber,secondNumber)
            break;
        case '-':
            subtract(firstNumber,secondNumber)
            break;
        case '/':
            divide(firstNumber,secondNumber)
            break;
        case '*':
            multiply(firstNumber,secondNumber)
    }
}