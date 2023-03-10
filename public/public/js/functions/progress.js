'use strict';

var progress = (action, timeout = 500) => {

	var timeFade = 200;

	if (action === 'undefined' || action == 'out') {

		setTimeout(function() {
			$('.progress, #loading').animate({
				'opacity': '0',
				'visibility': 'hidden',
				'display': 'none'
			}, timeFade, () => {
				$('.progress, #loading').hide();
			});
		}, timeout);

	} else if (action === 'in') {

		$('.progress, #loading').show();
		$('.progress, #loading').animate({
			'opacity': '1',
			'visibility': 'visible',
			'display': 'flex'
		}, timeFade, () => {
			$('.progress, #loading').show();
		});

	}

}
