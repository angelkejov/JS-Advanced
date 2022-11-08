function colorize() {
    let row = document.querySelectorAll('table tr');
    let index = 0;

    for(let r of row) {
        index++;

        if(index % 2 == 0) {
            r.style.background = "teal";
        }
    }
}