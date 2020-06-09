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