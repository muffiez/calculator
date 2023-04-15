let currentOperand = '';
let previousOperand = '';
let operator = undefined;

const appendNums = (num) => {
    if (num === '.' && currentOperand.toString().includes('.')) return;
    currentOperand = currentOperand.toString() + num.toString();
}

const getOperator = (operation) => {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operator = operation;
    if (operator === '*') {
        operator = 'x';
    }
    if (operator === '/') {
        operator = '÷';
    }
    previousOperand = currentOperand;
    currentOperand = '';
}

const clear = () => {
    currentOperand = '';
    previousOperand = '';
    operator = undefined;
}

const del = () => {
    currentOperand = currentOperand.toString().slice(0, -1);
}

const updateDisplay = () => {
    currentOperandText.innerHTML = currentOperand;
    if (operator !== undefined) {
        previousOperandText.innerHTML = `${previousOperand} ${operator}`;
    }
    else {
        previousOperandText.innerHTML = '';
    }
}

const finalDisplayUpdate = () => {
    if (isNaN(previous) || isNaN(current)) return;
    if (typeof(currentOperand) === 'string') {
        currentOperandText.innerHTML = currentOperand;
        operator = undefined;
        previousOperand = '';
        currentOperand = '';
    }
    else {
        previousOperandText.innerHTML = `${previous} ${operator} ${current}`;
        currentOperandText.innerHTML = currentOperand;
        operator = undefined;
        previousOperand = '';
    }
}

let keyboardInput = (e) => {
    if (e.key >= 0 && e.key <= 9 || e.key === '.') {
        appendNums(e.key);
        updateDisplay();
    }
    if (e.key === '=' || e.key === 'Enter') {
        compute();
        finalDisplayUpdate();
    }
    if (e.key === 'Backspace' || e.key === 'Delete') {
        del();
        updateDisplay();
    }
    if (e.key === 'Escape') {
        clear();
        updateDisplay();
    }
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        getOperator(e.key);
        updateDisplay();
    }
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

window.addEventListener('keydown', keyboardInput);

numButtons.forEach(button => {
    button.addEventListener('click', () => {  
        appendNums(button.value);
        updateDisplay();
    });
});

operatorButtons.forEach(button => { 
    button.addEventListener('click', () => {
        getOperator(button.value);
        updateDisplay();
    });
});

equalButton.addEventListener('click', () => {
    compute();
    finalDisplayUpdate();
});

clearButton.addEventListener('click', () => {
    clear();
    updateDisplay();
});

delButton.addEventListener('click', () => {
    del();
    updateDisplay();
});

let previous;
let current;
const compute = () => {
    let result;
    previous = parseFloat(previousOperand);
    current = parseFloat(currentOperand);
    if (isNaN(previous) || isNaN(current)) return;
    switch (operator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case 'x':
            result = previous * current;
            break;
        case '÷':
            if (current === 0) {
                result = 'Don\'t Divide By 0!';
            }
            else {
                result = previous / current;
            }
            break;
        default:
            throw new Error("Input Error");
    }
    if (typeof(result) === 'number'){
        currentOperand = Math.round((result + Number.EPSILON) * 100) / 100;
    }
    else {
        currentOperand = result;
    }
}

