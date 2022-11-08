function solve() {
    let buttonAdd = document.getElementById('add');
    let resetBtn = document.getElementById('reset');

    resetBtn.addEventListener('click', clearInputFileds);

    let recipientName = document.getElementById('recipientName');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    let listOfMails = document.getElementById('list');
    let sendedEmails = document.getElementsByClassName('sent-list')[0];
    let deletedEmails = document.getElementsByClassName('delete-list')[0];

    buttonAdd.addEventListener('click', (e) => {
        e.preventDefault();
        let recipientNameValue = recipientName.value;
        let titleValue = title.value;
        let messageValue = message.value;

        if(!recipientNameValue || !titleValue || !messageValue) {
            return;
        }

        createDOMElements(recipientNameValue, titleValue, messageValue);
        clearInputFileds();
    }); 

    function createDOMElements(recipientNameValue, titleValue, messageValue) {
        let li = document.createElement('li');

        let mail = createMail(recipientNameValue, titleValue, messageValue);

        let h4Title = document.createElement('h4');
        h4Title.textContent = `Title: ${titleValue}`;

        let h4Recipient = document.createElement('h4');
        h4Recipient.textContent = `Recipient Name: ${recipientNameValue}`;

        let span = document.createElement('span');
        span.textContext = `${messageValue}`;

        li.appendChild(mail);
        li.appendChild(h4Title);
        li.appendChild(h4Recipient);
        li.appendChild(span);
        listOfMails.appendChild(li);
    }

    function createMail(recipientNameValue, titleValue, messageValue) {
        let div = document.createElement('div');
        div.classList.add('list-action');

        let buttonSend = document.createElement('button');
        buttonSend.setAttribute('send', 'ID');
        buttonSend.textContent = 'Send';
        buttonSend.addEventListener('click', (e) => {
            let currentMail = e.target.parentNode.parentNode;
            currentMail.remove();
            e.preventDefault();
            let li = document.createElement('li');
            let spanEmail = document.createElement('span');
            spanEmail.textContent = `To: ${recipientNameValue}`;
            let spanTitle = document.createElement('span');
            spanTitle.textContent = ` Title: ${titleValue}`;

            let divSend = document.createElement('div');
            divSend.classList.add('btn');
            // let buttonRemove = document.createElement('button');
            // buttonRemove.classList.add('delete');
            // buttonRemove.textContent = 'Delete';

            divSend.appendChild(buttonDelete);
            
            li.appendChild(spanEmail);
            li.appendChild(spanTitle);
            li.appendChild(divSend);
           
            sendedEmails.appendChild(li)
        });

        let buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('delete', 'ID');
        buttonDelete.textContent = 'Delete';
        buttonDelete.addEventListener('click', (e) => {
            let currentMail = e.target.parentNode.parentNode;
            currentMail.remove();
            e.preventDefault();

            let Email = document.createElement('span');
            Email.textContent = `To: ${recipientNameValue}`;
            let Title = document.createElement('span');
            Title.textContent = ` Title: ${titleValue}`;

            let lii = document.createElement('li');

            lii.appendChild(Email);
            lii.appendChild(Title);

            deletedEmails.appendChild(lii);
        });

        div.appendChild(buttonSend);
        div.appendChild(buttonDelete);

        return div;
    }

    function clearInputFileds() {
        recipientName.value = '';
        title.value = '';
        message.value = '';
    }
}
solve()