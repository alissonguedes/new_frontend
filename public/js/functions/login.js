'use strict';

var login = () => {

	let titulo = null;

	$('#frm-login').on('submit', function(e) {

		e.preventDefault();

		var form = new Form();

		form.submit($(this),

			(response) => {

				let status = response.statusCode;
				titulo = 'Olá, ' + response.data.user + ', seja bem-vindo!';

				if (status === 201) {

					if (response.message) {
						form.showMessages($(this), response.message, response.status);
					}

					$('#boas-vindas')
						.removeClass('fadeOutLeft fadeInLeft fadeInRight fadeOutRight')
						.find('h5')
						.html(titulo);

					$('#boas-vindas')
						.removeClass('fadeOutLeft')
						.addClass('fadeInLeft')

					$('#input-login')
						.removeClass('fadeOutLeft fadeInLeft fadeInRight fadeOutRight')
						.addClass('fadeOutLeft')
						.find('[name="login"]')
						.attr('disabled', true);

					$('#input-pass')
						.removeClass('fadeOutLeft fadeInLeft fadeInRight fadeOutRight')
						.addClass('fadeInRight')
						.show()
						.find('[name="senha"]')
						.attr('disabled', false);

					setTimeout(function() {
						$('#input-pass').find('[name="senha"]')
							.focus()
					}, 700);

					$('#relembrar_login')
						.hide();

					$('#btn-back,#relembrar_senha')
						.css('display', 'flex')
						.attr('disabled', false);

					$(this).find(':submit').attr('disabled', false)

				} else {

					if (response.message) {
						form.showMessages($(this), response.message, response.status);
					}

					http.get(response.url);

				}

			}

		);

	});

	$('#frm-login').find('#btn-back').on('click', function() {

		$('#boas-vindas')
			.removeClass('fadeOutLeft fadeInLeft fadeInRight fadeOutRight');

		$('#boas-vindas')
			.removeClass('fadeOutRight')
			.addClass('fadeInRight')

		$('#input-pass')
			.removeClass('fadeOutLeft fadeInLeft fadeInRight fadeOutRight')
			.addClass('fadeOutRight')
			.find('[name="senha"]')
			.val('')
			.attr('disabled', true);

		$('#input-pass').find('.input-field').find('label').removeClass('active');

		$('#btn-back,#relembrar_senha')
			.css('display', 'flex')
			.attr('disabled', true)
			.hide();

		$('#input-login')
			.removeClass('fadeOutLeft fadeInLeft fadeInRight fadeOutRight')
			.addClass('fadeInLeft')
			.show()
			.find('[name="login"]')
			.attr('disabled', false)
			.focus()
			.select();

		$('#relembrar_login').show();

	});

}
