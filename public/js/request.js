'use strict';

class Request {

	link = [
		'[href]',
		'[data-href]',
		'.link'
	];

	constructor() {

		this.createElement();

	}

	disableOnClick(el) {

		el.attr('disabled', true);

	}

	enableOnClick(el) {

		el.attr('disabled', false);

	}

	createElement(el) {

		var self = this;
		var links = typeof el !== 'undefined' ? el : this.link.toString();

		$('body').find(links).on('click', function(e) {

			e.preventDefault();

			var http = new Http();
			var href = $(this).data('href') || $(this).attr('href');

			// self.disableOnClick($(this));
			if (self.isLink(href)) {
				http.get(href);
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
