// accesing DOM Elements

let main = document.querySelector('main')
let buttonsDigits =[...document.querySelectorAll('.number')]
let display = document.querySelector('#display')
let operators = main.querySelectorAll('.operator')

// end of accessing DOM Elements
// basic maths operators for the calculator
// addition
const add = (a,b)=> parseFloat(a) + parseFloat(b)
// multiplication
const multiply = (a,b) => parseFloat(a) * parseFloat(b)
// subtraction
const subtract = (a,b) => parseFloat(a) - parseFloat(b)
// division
const divide = (a,b) => parseFloat(a) / parseFloat(b)
// declaring calculator variables
let firstNumber = '';
let operator = '';
let secondNumber = '';
// end of declaration

const clearDisplay = ()=>{
    firstNumber = ''
    secondNumber = ''
    operator = ''
}
function updateDisplay(){
    display.textContent = firstNumber + " " + operator +  " " + secondNumber
}

const operate = (firstNumbers, operators, secondNumbers) =>{
    switch (operators){
        case '+':
            cal = add(firstNumbers,secondNumbers)
            break;
        case '-':
            cal = subtract(firstNumbers,secondNumbers)
            break;
        case '/':
            cal = divide(firstNumbers,secondNumbers)
            break;
        case '*':
            cal = multiply(firstNumbers,secondNumbers)
            break;
        default:
            cal = 'wrong arithmetic operation'
    }
    clearDisplay()
    firstNumber = String(cal)
    updateDisplay()
}

main.addEventListener('click',(e)=>{
    let target = e.target
    switch (target.id){
        case 'clearBtn':
            if(secondNumber){
                secondNumber = secondNumber.slice(0,-1)
            }else if(operator){
                operator = operator.slice(0,-1)
            }
            else{
                firstNumber = firstNumber.slice(0,-1)
            }
            break;
        case 'equals':
            operate(firstNumber,operator,secondNumber)
            break;
        case 'decs':
            if(!firstNumber.includes('.')){
                firstNumber += '.'
            }else {
                if(!secondNumber.includes('.')){
                    secondNumber += '.'
                }
            }
    }
    updateDisplay()
})
operators.forEach(operaator => {
    operaator.addEventListener('click',()=>{
        if(!firstNumber){
            return
        }
        else if(secondNumber){
             operate(firstNumber, operator, secondNumber)
             operator = operaator.textContent
        }
        else{
            operator = operaator.textContent
        }
        updateDisplay()
    })
})

buttonsDigits.map(digit => {
    digit.addEventListener('click', ()=>{
        if(!operator){
            firstNumber += digit.textContent
        }
        else if(operator){
            secondNumber += digit.textContent
        }
        updateDisplay()
    })
})