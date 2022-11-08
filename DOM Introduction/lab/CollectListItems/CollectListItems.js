function extractText() {
    let items = document.querySelectorAll('#items li');
    let res = document.getElementById('result');

    for(let i of items) {
        res.value += i.textContent + '\n';
    }
}