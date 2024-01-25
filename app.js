const topResultDisplay = document.querySelector('.top-result-display');
const resultDisplay = document.querySelector('.bottom-result-display');
const numberKeyArr = document.querySelectorAll('.number-key');
const operatorKeyArr = document.querySelectorAll('.operator');
const equalsKey = document.querySelector('.equals-key');
let resultValue = 0;
let firstNumber = '';
let secondNumber = '';
let operator;
let opForDisplay;
let operatorChosen = false;


resultDisplay.innerHTML = resultValue;

function keysEventListeners() {
    numberKeyArr.forEach(numberKey => {
        numberKey.addEventListener('click', changeNumber);
    });
    operatorKeyArr.forEach(opKey => {
        opKey.addEventListener('click', chooseOperator);
    });
    equalsKey.addEventListener('click', operate);
};
keysEventListeners();

function changeNumber() {
    switch(this.id) {
        case '0':
            if (!operatorChosen) {
                firstNumber += '0';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
            } else {
                secondNumber += '0';
                secondNumber = Number(secondNumber);
                resultDisplay.innerHTML = secondNumber;
            };
            break;
        case '1':
            if (!operatorChosen) {
                firstNumber += '1';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
            } else {
                secondNumber += '1';
                secondNumber = Number(secondNumber);
                resultDisplay.innerHTML = secondNumber;
            };
            break;
        case '2':
            if (!operatorChosen) {
                firstNumber += '2';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
            } else {
                secondNumber += '2';
                secondNumber = Number(secondNumber);
                resultDisplay.innerHTML = secondNumber;
            };
            break;
        case '3':
            if (!operatorChosen) {
                firstNumber += '3';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
            } else {
                secondNumber += '3';
                secondNumber = Number(secondNumber);
                resultDisplay.innerHTML = secondNumber;
            };
            break;
        case '4':
            if (!operatorChosen) {
                firstNumber += '4';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
            } else {
                secondNumber += '4';
                secondNumber = Number(secondNumber);
                resultDisplay.innerHTML = secondNumber;
            };
            break;
        case '5':
            if (!operatorChosen) {
                firstNumber += '5';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
            } else {
                secondNumber += '5';
                secondNumber = Number(secondNumber);
                resultDisplay.innerHTML = secondNumber;
            };
            break;
        case '6':
            if (!operatorChosen) {
                firstNumber += '6';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
            } else {
                secondNumber += '6';
                secondNumber = Number(secondNumber);
                resultDisplay.innerHTML = secondNumber;
            };
            break;
        case '7':
            if (!operatorChosen) {
                firstNumber += '7';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
            } else {
                secondNumber += '7';
                secondNumber = Number(secondNumber);
                resultDisplay.innerHTML = secondNumber;
            };
            break;
        case '8':
            if (!operatorChosen) {
                firstNumber += '8';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
            } else {
                secondNumber += '8';
                secondNumber = Number(secondNumber);
                resultDisplay.innerHTML = secondNumber;
            };
            break;
        case '9':
            if (!operatorChosen) {
                firstNumber += '9';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
            } else {
                secondNumber += '9';
                secondNumber = Number(secondNumber);
                resultDisplay.innerHTML = secondNumber;
            };
            break;
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
};

function operate() {
    if (firstNumber === '') {
        topResultDisplay.innerHTML = '0=';
    } else if (secondNumber === '') {
        topResultDisplay.innerHTML = firstNumber + '=';
    } else {
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
