const topResultDisplay = document.querySelector('.top-result-display');
const resultDisplay = document.querySelector('.bottom-result-display');
const numberKeyArr = document.querySelectorAll('.number-key');
const operatorKeyArr = document.querySelectorAll('.operator');
const equalsKey = document.querySelector('.equals-key');
const periodKey = document.querySelector('.period-key');
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
};
keysEventListeners();

function periodChosenChange() {
    periodChosen = true;
};

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
            periodChosen = false;
        };
        resultDisplay.innerHTML = secondNumber;
    };


    /*if (!operatorChosen) {
        if (!periodChosen) {
            firstNumber += this.id;
        } else {
            firstNumber += '.' + this.id;
            periodChosen = false;
        };
        firstNumber = Number(firstNumber);
        resultDisplay.innerHTML = firstNumber;
    } else {
        if (!periodChosen) {
            secondNumber += this.id;
        } else {
            secondNumber += '.' + this.id;
            periodChosen = false;
        };
        secondNumber = Number(secondNumber);
        resultDisplay.innerHTML = secondNumber;
    };*/
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
    /* FIX THIS, SO U CANT HAVE MULTIPLE PERIODS IN ONE NUMBER*/
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
