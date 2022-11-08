window.addEventListener("load", solve);

function solve() {
    document.getElementsByTagName('button')[0].addEventListener('click', sendForm);

    let typeOfProduct = document.getElementById('type-product');
    let description = document.getElementById('description');
    let clientName = document.getElementById('client-name');
    let clientPhone = document.getElementById('client-phone');
    let recievedOrder = document.getElementById('received-orders');
    let completeOrder = document.querySelector('#completed-orders');

    let clearBTN = document.getElementById('clear-btn');
    clearBTN = ' ';
    document.getElementById('clear-btn').addEventListener('click', clearRepairs);
    function clearRepairs() 
        Array.from(document.querySelectorAll('#completed-orders .container')).forEach(x => x.remove());
    }

    function sendForm() {
        let typeValue = typeOfProduct.value;
        let descriptionValue = description.value;
        let clientNameValue = clientName.value;
        let clientPhoneValue = clientPhone.value;

        if(!typeValue || !descriptionValue || !clientNameValue || !clientPhoneValue) {
            return;
        }

        createDOMElements(typeValue, descriptionValue, clientNameValue, clientPhoneValue);
        clearFormField();
    }

    function clearFormField() {
        description.value = '';
        clientName.value = '';
        clientPhone.value = '';
      }

      function createDOMElements(typeValue, descriptionValue, clientNameValue, clientPhoneValue) {
        let li = document.createElement('li');

        let order = createOrder(typeValue, descriptionValue, clientNameValue, clientPhoneValue);

        let startBTN = document.createElement('button');
        startBTN.classList.add('start-btn');
        startBTN.textContent = 'Start repair';
        startBTN.addEventListener('click', e => {
            e.target.disabled = true;
            finishBTN.disabled = false;
        });

        let finishBTN = document.createElement('button');
        finishBTN.classList.add('finish-btn');
        finishBTN.textContent = 'Finish repair';
        finishBTN.disabled = true;
        finishBTN.addEventListener('click', finishOrder);
        // finishBTN.addEventListener('click', (ev) => {
            
        // });

        li.appendChild(order);
        li.appendChild(startBTN);
        li.appendChild(finishBTN);
        recievedOrder.appendChild(li);
      }

      function createOrder(typeValue, descriptionValue, clientNameValue, clientPhoneValue) {
        let div = document.createElement('div');
        div.classList.add('container');

        let h2 = document.createElement('h2');
        h2.textContent = `Product type for repair: ${typeValue}`;

        let h3 = document.createElement('h3');
        h3.textContent = `Client information: ${clientNameValue} ${clientPhoneValue}`;

        let h4 = document.createElement('h4');
        h4.textContent = `Description of the problem: ${descriptionValue}`;

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);

        return div;
      }

      function finishOrder(e) {
        let currentOrder = e.target.parentElement;
        completeOrder.appendChild(currentOrder);
        
        Array.from(currentOrder.querySelectorAll('button')).forEach(btn => btn.remove());
      
}