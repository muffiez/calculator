let currentOperand = '';
let previousOperand = '';

const appendNums = (num) => {
    if(num === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + num.toString();
}

const getOperator = (operator) => {

}
const clear = () => {
    currentOperand = '';
    previousOperand = '';
    operator = undefined;
}

const del = () => {

}

const getplusMinus = () => {

}


const updateDisplay = () => {
    currentOperandText.innerHTML = currentOperand;
}

const clearButton = document.querySelector('[data-clear]');
const delButton = document.querySelector('[data-delete]');
const numButtons = document.querySelectorAll('[data-nums]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelector('[data-equals]');
const previousOperandText = document.querySelector('[data-previous-output]');
const currentOperandText = document.querySelector('[data-current-output]');
const decimal = document.querySelector('[data-decimal]');
const plusMinus = document.querySelector('[data-plusminus]');

numButtons.forEach(button => {
    button.addEventListener('click', () => {  
        appendNums(button.value);
        updateDisplay();
    });
});

operatorButtons.forEach(button => { 
    button.addEventListener('click', () => {



const add = (a, b) => {
    return a + b;
}
const sub = (a, b) => {
    return a - b;
}
const multiply = (a, b) => {
    return a * b;
}
const divide = (a, b) => {
    if(b == 0) {
        return 'Zero';
    }
    
    return a / b;
    

}

const compute = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return sub(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
        default:
            throw new Error("Input Error");
    }
}
