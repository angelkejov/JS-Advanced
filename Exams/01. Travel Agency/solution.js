window.addEventListener('load', solution);

function solution() {
    let submitButton = document.getElementById('submitBTN');
    let editButton = document.getElementById('editBTN');
    let continueButton = document.getElementById('continueBTN');
    let block = document.getElementById('block');
    let preview = document.getElementById('infoPreview');

    let inputValues = Array.from(document.getElementById('form').querySelectorAll('input'));
    let labelValues = Array.from(document.getElementById('form').querySelectorAll('label'));
    inputValues.pop();

    submitButton.disabled = false;
    editButton.disabled = true;
    continueButton.disabled = true;

    submitButton.addEventListener('click', (ev) => {
        const fullName = inputValues[0];
        const email = inputValues[1];
        if(fullName.value && email.value !== '') {
            for(let i = 0; i < inputValues.length; i++) {
                const liElement = document.createElement('li');
                liElement.textContent = `${labelValues[i].textContent} ${inputValues[i].value}`;
                preview.appendChild(liElement);
            }
            
            for(let input of inputValues) {
              input.value = '';
            }
            ev.target.disabled = true;
            editButton.disabled = false;
            continueButton.disabled = false;
        }
        
    });

    editButton.addEventListener('click', (ev) => {
      let listItems = Array.from(preview.childNodes);

      for(let i = 0; i < inputValues.length; i++) {
        inputValues[i].value = listItems[i].textContent.split(': ')[1];
        listItems[i].remove();
      }

      submitButton.disabled = false;
      editButton.disabled = true;
      continueButton.disabled = true;
    });

    continueButton.addEventListener('click', (ev) => {
      block.innerHTML = '';
      let h3 = document.createElement('h3');
      h3.textContent = 'Thank you for your reservation!';
      
      block.appendChild(h3);
    });
}
