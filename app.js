const resultDisplay = document.querySelector('.bottom-result-display')
const numberKeyArr = document.querySelectorAll('.number-key');
let resultValue = 0;
let firstNumber = '';
let secondNumber = '';
let operatorChosen = false;


resultDisplay.innerHTML = resultValue;

function numberButtons() {
    numberKeyArr.forEach(numberKey => {
        numberKey.addEventListener('click', changeNumber);
    });
};
numberButtons();

function changeNumber() {
    if ((firstNumber.toString()).length < 9){
        switch(this.id) {
            case '1':
                console.log('Clicked ' + 1);
                firstNumber += '1';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
                break;
            case '2':
                console.log('Clicked ' + 2);
                firstNumber += '2';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
                break;
            case '3':
                console.log('Clicked ' + 3);
                firstNumber += '3';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
                break;
            case '4':
                console.log('Clicked ' + 4);
                firstNumber += '4';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
                break;
            case '5':
                console.log('Clicked ' + 5);
                firstNumber += '5';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
                break;
            case '6':
                console.log('Clicked ' + 6);
                firstNumber += '6';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
                break;
            case '7':
                console.log('Clicked ' + 7);
                firstNumber += '7';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
                break;
            case '8':
                console.log('Clicked ' + 8);
                firstNumber += '8';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
                break;
            case '9':
                console.log('Clicked ' + 9);
                firstNumber += '9';
                firstNumber = Number(firstNumber);
                resultDisplay.innerHTML = firstNumber;
                break;
        };
    }else {
        alert('Maximum number length reached');
    };
};


function operate(firstNum, secondNum, operator) {
    /* Add this function to the = sign) */
};