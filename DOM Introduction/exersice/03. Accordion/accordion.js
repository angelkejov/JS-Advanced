function toggle() {
    let more = document.getElementById('extra');
    let button = document.getElementsByClassName('button')[0];

    if(button.textContent === 'More') {
        button.textContent = 'Less';
        more.style.display = 'block';
    } else {
        button.textContent = 'More';
        more.style.display = 'none';
    }
}