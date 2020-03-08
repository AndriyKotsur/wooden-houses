window.addEventListener("load", () => {
    const successPopUp = document.querySelector('.pop-up');
    const errMsg = document.querySelector('.form-error');

    const message = {
        name: "Ви не ввели ім'я",
        phone: "Ви не ввели телефон",
        name_phone: "Заповніть поля"
    };

    /* SEND */

    const formSend = (formData) => {
        fetch('send.php', {
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

    /* FORM VALIDATION */
    const forms = document.getElementsByTagName("form");
    const nameInp = document.querySelector('.form-items-name');
    const phoneInp = document.querySelector('.form-items-phone');

    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function (e) {
            e.preventDefault();
            let errKey = null;
            if (!nameInp.value && !phoneInp.value) {
                errKey = 'name_phone';
            } else if (!nameInp.value) {
                errKey = 'name';
            } else if (!phoneInp.value) {
                errKey = 'phone';
            }
            if(errKey) {
                errMsg.innerHTML = message[errKey];
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