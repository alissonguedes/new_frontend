'use strict';

var formSidenav = () => {

	var http = new Http();

	$('.form-sidenav-trigger').on('click', function() {

		var link = typeof $(this).data('link') !== 'undefined' && $(this).data('link') != '' ? $(this).data('link') : null;
		var target = typeof $(this).data('target') !== 'undefined' && $(this).data('target') != '' ? $(this).data('target') : null;
		var name = typeof $(this).attr('name') !== 'undefined' ? $(this).attr('name') : null;
		var id = typeof $(this).attr('id') !== 'undefined' ? $(this).attr('id') : null;
		var modal = $('.form-sidenav#' + target);

		var overlay = $('<div/>', {
			class: 'modal-overlay',
			style: 'z-index: 996; display: block; opacity: 0.5;'
		})

		var params = {
			[name]: id
		};

		modal.find('form').html('Carregando formulário');

		http.get(link, {
			datatype: 'html',
			data: params
		}, (response) => {

			var errors = isJSON(response) ? JSON.parse(response) : null;

			if (errors != null) {
				modal.find('.modal-close').click(function() {
					modal.removeClass('open')
					modal.next('div.modal-overlay').remove();
				});
				modal.find('.modal-close').click();
				alert(errors, errors.status);
				return false;
			}

			modal.addClass('open').parent().remove('.modal-overlay').append(overlay);
			modal.find('form').html($(response).find('#' + target).html());

			if (typeof modal.data('dismissible') !== 'undefined' && !modal.data('dismissible')) {
				overlay.on('click', function() {
					modal.find('.modal-close').click();
				});
			}

			modal.find('.modal-close').click(function() {
				modal.removeClass('open')
				modal.next('div.modal-overlay').remove();
			});

			$('#recorrente').on('change', function() {

				if ($(this).prop('checked')) {
					$(this).parents('.input').css({
						'border-bottom-left-radius': '0px',
						'border-bottom-right-radius': '0px'
					}).next('.days-of-week').slideDown(100);
				} else {
					$(this).parents('.input').css({
						'border-bottom-left-radius': '24px',
						'border-bottom-right-radius': '24px'
					}).next('.days-of-week').slideUp(100);
				}
			});

			new Request(modal);
			new Scroller();

		});

	});

}

formSidenav();
