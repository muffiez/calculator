let currentOperand = '';
let previousOperand = '';
let operator = undefined;

const appendNums = (num) => {
    if(num === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + num.toString();
}

const getOperator = (operation) => {
    if(currentOperand === '') return;
    if(previousOperand !== '') {
        compute();
    }
    operator = operation;
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
    console.log()
    if (operator !== undefined) {
        previousOperandText.innerHTML = `${previousOperand} ${operator}`;
    }
    else {
        previousOperandText.innerHTML = '';
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
    updateDisplay();
});

clearButton.addEventListener('click', () => {
    clear();
    updateDisplay();
});

delButton.addEventListener('click', () => {
    del();
    updateDisplay();
});

const compute = () => {
    let result;
    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
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
            result = previous / current;
            break;
        default:
            throw new Error("Input Error");
    }
    currentOperand = result;
    operator = undefined;
    previousOperand = '';
}
