
function calculateResult() {
    const resultTitle = document.querySelector('#result')

    let [firstValue, operator, secondValue] = document.querySelectorAll('.value');
    
    // text to number
    firstValue = Number(firstValue.value);
    operator = Number(operator.value);
    secondValue = Number(secondValue.value);

    if (isNaN(firstValue) || isNaN(secondValue) || isNaN(operator) || operator < 0 || operator > 3) {
        resultTitle.innerHTML = 'Insira valores numéricos nos campos e/ou uma operação válida!';
        resultTitle.style.color = 'red';
        return;
    }

    let result = 0;
    switch (operator) {
        case 0:
            result = firstValue + secondValue;
            break;
        case 1:
            result = firstValue - secondValue;
            break;
        case 2:
            result = firstValue * secondValue;
            break;
        case 3:
            result = firstValue / secondValue;
            break;
        default:
            break;
    }

    resultTitle.innerHTML = result;
    resultTitle.style.color = 'black';

}