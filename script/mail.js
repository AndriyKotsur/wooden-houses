(function ($) {
	$("form").submit(function (event) {
		event.preventDefault();

		// Сохраняем в переменную form id текущей формы, на которой сработало событие submit
		let form = $('#' + $(this).attr('id'))[0];

		// Сохраняем в переменные значения полей (для валидации)
		let inpName = $(this).find('.form-items-name').val();
		let inpPhone = $(this).find('.form-items-phone').val();

		// Сохраняем в переменные дивы, в которые будем выводить текст ошибки
		let inpNameError = $(this).find('.form-error-name');
		let inpPhoneError = $(this).find('.form-error-phone');

        let formTitle = $(this).find('main-page-us-form-title');
        let formDescription = $(this).find('.main-page-us-form-description');

		let fd = new FormData(form);
		$.ajax({
			url: "/php/mail.php", //тут вкажи шлях до файлу із обробкою форми
			type: "POST",
			data: fd,
			processData: false,
			contentType: false,
			success: function success(res) {
				let respond = $.parseJSON(res);

				if (respond.name) {
					inpNameError.text(respond.name);
				} else {
                    inpNameError.show();
					inpNameError.text("Ви не ввели ім'я");
				}

				if (respond.phone) {
					inpPhoneError.text(respond.tel);
				} else {
                    inpPhoneError.show();
					inpPhoneError.text("Ви не ввели телефон");
				}

                if (respond.success) {
                    formTitle.hide();
                    formDescription.text();
                    setTimeout(() => {
                        formDescription.hide();
                    }, 4000);
                    setTimeout(() => {
                        formDescription.text('Дякуємо за звернення! Ми зателефонуємо вам протягом 30 хвилин');
                    }, 5000);
                }
    
			},
		});
	});
}(jQuery));