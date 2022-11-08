function calc() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;

    let res = document.getElementById('sum');

    res.value = Number(n1) + Number(n2);
}
