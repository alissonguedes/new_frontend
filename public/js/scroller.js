'use strict'

class Scroller {

	constructor($scroller) {

		var $scroller = typeof element !== 'undefined' ? element : '.scroller';

		if (0 < $($scroller).length) new PerfectScrollbar($scroller, {
			theme: "dark",
			'wheelPropagation': false,
			'suppressScrollY': typeof $($scroller).data('hide-y') !== 'undefined' && $($scroller).data('hide-y') != '' ? $($scroller).data('hide-y') : false,
			'suppressScrollX': typeof $($scroller).data('hide-x') !== 'undefined' && $($scroller).data('hide-x') != '' ? $($scroller).data('hide-x') : false
		});

	}

	init() {
		alert('initialize scroller');
	}

}
