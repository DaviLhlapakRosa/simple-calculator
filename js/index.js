
function calculateResult() {
    const resultTitle = document.querySelector('#result');

    // Valid Operations
    const validOperators = {
        sum(firstValue, secondValue){
            return firstValue + secondValue;
        },
        subtract(firstValue, secondValue){
            return firstValue - secondValue;
        },
        multiply(firstValue, secondValue){
            return firstValue * secondValue;
        },
        divide(firstValue, secondValue){
            return firstValue / secondValue;
        },
    }

    let [firstValue, operator, secondValue] = document.querySelectorAll('.value');

    // text to number
    firstValue = Number(firstValue.value);
    secondValue = Number(secondValue.value);

    //Get the function related to the mathematical operator
    operatorFunction = validOperators[operator.value];

    if (isNaN(firstValue) || isNaN(secondValue) || operatorFunction === null) {
        resultTitle.innerHTML = 'Insira valores numéricos nos campos e/ou uma operação válida!';
        resultTitle.style.color = 'red';
        return;
    }

    let result = operatorFunction(firstValue,secondValue);

    resultTitle.innerHTML = result;
    resultTitle.style.color = 'black';

}