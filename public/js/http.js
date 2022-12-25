'use strict';

class Http {

	constructor() {

		let xhr;

		if (window.XMLHttpRequest) {
			this.xhr = new XMLHttpRequest();
		} else {
			this.xhr = ActiveXObject('Microsoft.XMLHTTP');
		}

	}

	get(url, params, ...callback) {

		this.open('GET', url);

	}

	post(url, params, ...callback) {

	}

	open(type, url) {

		this.xhr.open(type, url);
		this.xhr.setRequestHeader('Request-Type', 'xmlhttprequest');
		this.send(url);

	}

	send(url) {

		var xhr = this.xhr;

		xhr.onprogress = function(e) {

		}

		xhr.onreadystatechange = function(e) {

			// var status = xhr.getResponseHeader('Location');
			// if (status === 302)
			// 	console.log(xhr.responseUrl);

		}

		xhr.onloadstart = function(e) {

			// $('.progress').show();

		}

		xhr.onloadend = function(e) {

			if (xhr.readyState === 4) {

				require([BASE_PATH + 'js/app.js'], function() {
					new App();
					return view(xhr);
				})

			}

			// $('.progress').hide();

		}

		xhr.onprogress = function(e) {

			console.log(e);
			$('.progress').children().css({
				'width': e.loaded
			});

		}

		xhr.onload = function(e) {

		}

		xhr.noerror = function(e) {

		}

		xhr.send(null);

	}

}
