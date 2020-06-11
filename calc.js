function add() {
    let arr = [...arguments].reduce((total, num) => total + num)
    console.log(arr)
    return arr;
}

function subtract() {
    let arr = [...arguments].reduce((total, num) => total - num)
    console.log(arr)
    return arr;
}

function multiply() {
    let arr = [...arguments].reduce((total, num) => total * num)
    console.log(arr)
    return arr;  
}

function divide() {
    let arr = [...arguments].reduce((total, num) => total / num)
    console.log(arr)
    return arr;
}

function operate(operator, num1, num2) {
  if (operator == add) {
     return add(num1, num2);
  } else if (operator == subtract) {
     return subtract(num1, num2);
  } else if (operator == multiply) {
     return  multiply(num1, num2);
  } else if (operator == divide) {
     return  divide(num1, num2);
  } 
}

const screen = document.querySelector('#screen')
const screenContent = document.querySelector('#screenContent')
const calcButton = document.querySelectorAll('.calc_button')
const calcFuncButton = document.querySelectorAll('.calcFunc_button')
const clear = document.querySelector('#clear')
const neg = document.querySelector('#neg')
const back = document.querySelector('#back')
const divideButton = document.querySelector('#divideButton')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const multiplyButton = document.querySelector('#multiplyButton')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const three = document.querySelector('#three')
const two = document.querySelector('#two')
const one = document.querySelector('#one')
const addButton = document.querySelector('#addButton')
const zeroButton = document.querySelector('#zeroButton')
const dotButton = document.querySelector('#dotButton')
const equals = document.querySelector('#equals')
const subtractButton = document.querySelector('#subtractButton')
const zero = document.querySelector('#zero')

let displayValue = "";

for (const calc_button of calcButton) {
    calc_button.addEventListener('click', function() {
        displayValue = displayValue.concat(calc_button.innerText);
        screenContent.textContent = displayValue;
    });
}

let operator;
let num1;

let clearFunc = function () {
    num1 = displayValue;
    displayValue = '';
    screenContent.textContent = displayValue
    return num1
}

clear.addEventListener('click', clearFunc)

addButton.addEventListener('click', function(){
    operator = add;
    num1 = displayValue;
    clearFunc()
})

subtractButton.addEventListener('click', function(){
    operator = subtract;
    num1 = displayValue;
    clearFunc()
})

multiplyButton.addEventListener('click', function(){
    operator = multiply;
    num1 = displayValue;
    clearFunc()
})

divideButton.addEventListener('click', function(){
    operator = divide;
    num1 = displayValue;
    clearFunc()
})

neg.addEventListener('click', function(){
    if (displayValue == 0 || displayValue == "") {
        
    } else {
        displayValue = displayValue * -1;
        screenContent.textContent = displayValue 
    }

})

back.addEventListener('click', function() {
    displayValue = displayValue.slice(0, -1);
    screenContent.textContent = displayValue 

})

function finalAnswer () {
    console.log(num1)
    if (operator == divide && displayValue == 0) {
        displayValue = "nope"        
    } else {
    displayValue = operate(operator, Number(num1), Number(displayValue));
    }    
    screenContent.textContent = displayValue;
}

equals.addEventListener('click', finalAnswer)