'use strict';

var http = new Http();

class Request {

	link = [
		'a',
		'[href]',
		'[data-href]',
		'.link'
	];

	constructor(element) {

		var element = typeof element !== 'undefined' ? element : 'body';

		this.createElement(element);

	}

	disableOnClick(el) {

		el.attr('disabled', true);

	}

	enableOnClick(el) {

		el.attr('disabled', false);

	}

	createElement(el) {

		var self = this;
		var links = this.link.toString(); // typeof el !== 'undefined' ? el : this.link.toString();

		$(el).find(links).on('click', function(e) {

			e.preventDefault();

			var href = $(this).data('href') || $(this).attr('href');

			// self.disableOnClick($(this));
			if (self.isLink(href)) {
				$('.progress, #loading').show();
				http.get(href, null, (response) => {
					// load_scripts();
					console.log(response);
					$('.progress, #loading').hide();
				});
			}
			// self.enableOnClick($(this));

		});

	}

	isLink(href) {

		if (typeof href === 'undefined' || href == '') return false;

		var url = typeof href.split(BASE_URL).splice(1) !== 'undefined' && href.split(BASE_URL).splice(1).length > 0 ? href.split(BASE_URL).splice(1) : href;
		var isAnchor = /^[jJ]ava[sS]cript(\:[a-z]+)?/i.test(url);
		var isLink = /^#([a-z0-9]+)?/i.test(url);

		return !isAnchor && !isLink;

	}

}
