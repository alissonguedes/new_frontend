'use strict';

class App {

	constructor() {

		require([
			BASE_PATH + 'js/app.js',
			BASE_PATH + 'js/http.js',
			BASE_PATH + 'js/request.js',
			BASE_PATH + 'js/scroller.js',
			BASE_PATH + 'js/functions/view.js'
		], () => {

			// Inicia Request
			new Request();

			// inicia Scroller
			new Scroller();

		})

	}

}
