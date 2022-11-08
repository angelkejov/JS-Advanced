function deleteByEmail() {
    var customers = document.querySelectorAll('#customers tbody td:nth-child(2)');
    var input = document.getElementsByName('email')[0].value;
    var found = false;

    for(var li of customers) {
        if(li.textContent === input) {
            li.parentElement.remove(li);
            found = true;
        }
    }

    var result = document.getElementById('result');

    if(found) {
        result.textContent = 'Deleted.'
    } else {
        result.textContent = 'Not found.';
    }
}