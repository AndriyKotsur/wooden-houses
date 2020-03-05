document.addEventListener("DOMContentLoaded", () => {
    const successPopUp = document.querySelector('.pop-up');
    const errMsg = document.querySelector('.form-error');

    const message = {
        name: "Ви не ввели ім'я",
        phone: "Ви не ввели телефон",
        full: "Заповніть поля"
    };

    /* SEND */

    const formSend = (formData) => {
        fetch('mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(responce => {
                successPopUp.classList.add('active')
            })
            .catch(error => console.log(error));
    };

    /* CLOSE BTN */

    let closeBtn = document.querySelector('.pop-up-close');
    closeBtn.addEventListener('click', function () {
        successPopUp.classList.remove('active');
    });

    const forms = document.getElementsByTagName("form");
    const nameInp = document.querySelector('.form-items-name');
    const phoneInp = document.querySelector('.form-items-phone');

    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function (e) {
            e.preventDefault();
            if ((nameInp.value == null || nameInp.value == '') && (phoneInp.value == null || phoneInp.value == '')) {
                errMsg.innerHTML = message.full;
                errMsg.classList.add('active');
                return false;
            } else if (nameInp.value && phoneInp.value) {
                errMsg.classList.remove('active');
            }
            if (nameInp.value == null || nameInp.value == '') {
                errMsg.innerHTML = message.name;
                errMsg.classList.add('active');
                return false;
            }
            if (phoneInp.value == null || phoneInp.value == '') {
                console.log('wrong phone');
                errMsg.innerHTML = message.phone;
                errMsg.classList.add('active');
                return false;
            }
            let formData = new FormData(this);
            formData = Object.fromEntries(formData);

            formSend(formData);
            this.reset();
        })
    }
});