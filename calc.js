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
      add(num1, num2);
  } else if (operator == subtract) {
      subtract(num1, num2);
  } else if (operator == multiply) {
      multiply(num1, num2);
  } else if (operator == divide) {
      divide(num1, num2);
  } 
}

operate(divide, 1, 2)

const screen = document.querySelector('#screen')
const screenContent = document.querySelector('#screenContent')
const calcButton = document.querySelectorAll('.calc_button')
const clear = document.querySelector('#clear')
const neg = document.querySelector('#neg')
const back = document.querySelector('#back')
const divideButton = document.querySelector('#divideButton')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const muliplyButton = document.querySelector('#multiplyButton')
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
