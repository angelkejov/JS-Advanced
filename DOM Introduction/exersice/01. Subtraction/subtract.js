function subtract() {
    let n1 = document.getElementById('firstNumber').value;
    let n2 = document.getElementById('secondNumber').value;

    let result = document.getElementById('result');

    result.textContent = Number(n1) - Number(n2);
}