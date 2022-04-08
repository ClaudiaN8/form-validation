function validateForm() {
    const form = document.querySelector('[data-form]');
    const genderM = document.querySelector('[data-gender=male]');
    const genderF = document.querySelector('[data-gender=female]');
    const successHeader = document.querySelector('header');
    const text = document.querySelector('[data-text]');

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();

        const firstname = form.elements.firstname.value;
        const lastname = form.elements.lastname.value;
        const message = form.elements.message.value;
        const headerMessage = 'Thank you for contacting us, ';

        if (firstname === '') {
            // show error
            form.elements.firstname.style.borderColor = 'red';
        } else {
            form.elements.firstname.style.borderColor = 'black';
        }
        if (lastname === '') {
            form.elements.lastname.style.borderColor = 'red';
        } else {
            form.elements.lastname.style.borderColor = 'black';
        }
        if (genderM.checked == false && genderF.checked == false) {
            genderM.classList.add('error');
            genderF.classList.add('error');
        } else {
            genderM.classList.remove('error');
            genderF.classList.remove('error');
        }
        if (message === '') {
            form.elements.message.style.borderColor = 'red';
        } else {
            form.elements.message.style.borderColor = 'black';
            //show succes
            successHeader.style.visibility = 'visible';
            text.innerText = headerMessage + firstname;

            if (genderM.checked == true) {
                console.log(
                    `${firstname} ${lastname}, ${genderM.value}, wrote: '${message}'.`
                );
            } else if (genderF.checked == true) {
                console.log(
                    `${firstname} ${lastname}, ${genderF.value}, wrote: '${message}'.`
                );
            }
        }
    }
}

validateForm();

// const body = document.querySelector('body');
// const msgHeader = document.createElement('header');
// const msgContainer = document.createElement('div');
// const msgCheck = document.createElement('i');
// const msgText = document.createElement('p');
// const msgClose = document.createElement('i');
// const text = `Thank you for contacting us, `;

// msgContainer.class = 'container';
// msgCheck.class = 'fas fa-check-circle';
// msgText.class = 'Text';
// msgText.innerText = text + firstname;
// msgClose.class = 'fas fa-times';

// msgHeader.appendChild(msgContainer);
// msgContainer.appendChild(msgCheck);
// msgContainer.appendChild(msgText);
// msgContainer.appendChild(msgClose);
// body.appendChild(msgHeader);
