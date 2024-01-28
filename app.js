const topResultDisplay = document.querySelector('.top-result-display');
const resultDisplay = document.querySelector('.bottom-result-display');
const numberKeyArr = document.querySelectorAll('.number-key');
const operatorKeyArr = document.querySelectorAll('.operator');
const equalsKey = document.querySelector('.equals-key');
const periodKey = document.querySelector('.period-key');
const clearKey = document.querySelector('.clear-key');
const backspaceKey = document.querySelector('.backspace-key');
let resultValue = 0;
let firstNumber = '';
let secondNumber = '';
let operator;
let opForDisplay;
let operatorChosen = false;
let periodChosen = false;


//Display default resultValue (0) on page load
resultDisplay.innerHTML = resultValue;


//Add event listeners to all keys on page load
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
};
keysEventListeners();


//This function operates on strings, the strings are converted into numbers once you click the '=' key (in the operate() function at line 85).
/*
If operator isn't chosen (so none of these (+ - / x) keys were pushed), it performs operations on the first number, otherwise on the second one
*/
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


//Equals '=' key function
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
                    grayOutButtons();
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


//Period key function
function periodChosenChange() {
    periodChosen = true;
};


//C (clear) key function
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
    bringButtonsBack();
};


//Backspace key function
function backspaceClear() {
    if (!operatorChosen) {
        firstNumber = firstNumber.slice(0, -1);
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


//This function is called, when you try to divide by zero, so after you get the alert 'You can't divide by zero' you are forced to press the C button to reset the calculator
function grayOutButtons() {
    numberKeyArr.forEach(numberKey => {
        numberKey.removeEventListener('click', changeNumber);
        numberKey.classList.add('grayed-out');
    });
    operatorKeyArr.forEach(opKey => {
        opKey.removeEventListener('click', chooseOperator);
        opKey.classList.add('grayed-out');
    });
    equalsKey.removeEventListener('click', operate);
    equalsKey.classList.add('grayed-out');
    periodKey.removeEventListener('click', periodChosenChange);
    periodKey.classList.add('grayed-out');
    backspaceKey.removeEventListener('click', backspaceClear);
    backspaceKey.classList.add('grayed-out');
};


//This function 'un-grays' the buttons - brings their functionality and looks back
function bringButtonsBack() {
    keysEventListeners();
    numberKeyArr.forEach(numberKey => {
        numberKey.classList.remove('grayed-out');
    });
    operatorKeyArr.forEach(opKey => {
        opKey.classList.remove('grayed-out');
    });
    equalsKey.classList.remove('grayed-out');
    periodKey.classList.remove('grayed-out');
    backspaceKey.classList.remove('grayed-out');
};