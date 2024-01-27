const topResultDisplay = document.querySelector('.top-result-display');
const resultDisplay = document.querySelector('.bottom-result-display');
const numberKeyArr = document.querySelectorAll('.number-key');
const operatorKeyArr = document.querySelectorAll('.operator');
const equalsKey = document.querySelector('.equals-key');
const periodKey = document.querySelector('.period-key');
const clearKey = document.querySelector('.clear-key');
const backspaceKey = document.querySelector('.backspace-key');
const openPar = document.querySelector('.open-parentheses-key');
const closePar = document.querySelector('.close-parentheses-key');
let resultValue = 0;
let firstNumber = '';
let secondNumber = '';
let operator;
let opForDisplay;
let operatorChosen = false;
let periodChosen = false;


resultDisplay.innerHTML = resultValue;

function keysEventListeners() {
    numberKeyArr.forEach(numberKey => {
        numberKey.addEventListener('click', changeNumber);
    });
    operatorKeyArr.forEach(opKey => {
        opKey.addEventListener('click', chooseOperator);
    });
    equalsKey.addEventListener('click', operate);
    periodKey.addEventListener('click', periodChosenChange);
    clearKey.addEventListener('click', clearEverything);
    backspaceKey.addEventListener('click', backspaceClear);
    openPar.addEventListener('click', startParentheses);
};
keysEventListeners();

function changeNumber() {
    if (!operatorChosen) {
        if (!periodChosen) {
            firstNumber += this.id;
        } else {
            firstNumber += '.' + this.id;
            periodKey.removeEventListener('click', periodChosenChange);
            periodChosen = false;
        };
        resultDisplay.innerHTML = firstNumber;
    } else {
        if (!periodChosen) {
            secondNumber += this.id;
        } else {
            secondNumber += '.' + this.id;
            periodKey.removeEventListener('click', periodChosenChange);
            periodChosen = false;
        };
        resultDisplay.innerHTML = secondNumber;
    };
};

function chooseOperator() {
    switch(this.id) {
        case 'divide-key':
            operator = 'divide';
            opForDisplay = '÷';
            break;
        case 'multiply-key':
            operator = 'multiply';
            opForDisplay = '×';
            break;
        case 'minus-key':
            operator = 'minus';
            opForDisplay = '–';
            break;
        case 'plus-key':
            operator = 'plus';
            opForDisplay = '+';
            break;
    };
    operatorChosen = true;
    topResultDisplay.innerHTML = firstNumber + opForDisplay;
    periodKey.addEventListener('click', periodChosenChange);
};

function operate() {
    if (firstNumber === '') {
        topResultDisplay.innerHTML = '0=';
    } else if (secondNumber === '') {
        topResultDisplay.innerHTML = firstNumber + '=';
    } else {
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        switch(operator) {
            case 'divide':
                if (secondNumber === 0) {
                    resultValue = "You can't divide by zero";
                    /*Grey out buttons and removeeventlisteners or something so u cant perform more actions until u reset by pressing C button*/
                } else {
                    resultValue = firstNumber / secondNumber;
                }
                break;
            case 'multiply':
                resultValue = firstNumber * secondNumber;
                break;
            case 'minus':
                resultValue = firstNumber - secondNumber;
                break;
            case 'plus':
                resultValue = firstNumber + secondNumber;
                break;
        };
        topResultDisplay.innerHTML = firstNumber + opForDisplay + secondNumber + '=';
        resultDisplay.innerHTML = resultValue;
        firstNumber = resultValue;
        secondNumber = '';
    };
};

function periodChosenChange() {
    periodChosen = true;
};

function clearEverything() {
    resultValue = 0;
    firstNumber = '';
    secondNumber = '';
    operator = '';
    opForDisplay = '';
    operatorChosen = false;
    periodChosen = false;
    resultDisplay.innerHTML = resultValue;
    topResultDisplay.innerHTML = '';
};

function backspaceClear() {
    if (!operatorChosen) {
        firstNumber = firstNumber.slice(0, -1);
        console.log(firstNumber.length)
        if (firstNumber.length === 0) {
            resultDisplay.innerHTML = '0';
        } else {
            resultDisplay.innerHTML = firstNumber;
        };
    } else {
        secondNumber = secondNumber.slice(0, -1);
        if (secondNumber.length === 0) {
            resultDisplay.innerHTML = '0';
        } else {
            resultDisplay.innerHTML = secondNumber;
        };
    };
};

function startParentheses() {
    /* add both and change parenthesesChosen = false to true, then on end parentheses change parenthesesChose to false again so the numbers are out; */
    if (!operatorChosen) {
        firstNumber += '(';
    } else {
        secondNumber += '(';
    };
};