'use strict';


var autocompleteFind = (url, query, input) => {

	$.ajax({

		url: url,
		dataType: 'json',
		data: {
			// 'length': limit,
			'search': query
		},

		success: (response) => {

			var data = {};

			Object.keys(response).forEach((i) => {
				var item = response[i];
				data[item.label] = {
					'label': item.label,
					'icon': item.icon,
					'value': item.value,
					'name': item.name
				};
			});

			input.updateData(data);
			// new Scroller($('.dropdown-content'));

		}

	});

}

var inputAutocomplete = (input, ...callback) => {

	var limit = 100;
	var hidden = null;
	var autocomplete = input.autocomplete({
		'limit': limit,
		'minLength': 0,
		onAutocomplete: (name, value) => {
			hidden = name;
			input.parent().find(':hidden[name="' + name + '"]').remove();
			input.parent().append($('<input>', {
				type: 'hidden',
				name: name,
				value: value
			}));

			if (callback) {
				for (var i in callback) {
					if (typeof callback[i] === 'function') {
						callback[i](callback);
					}
				}
			}
		}
	});

	var instance = M.Autocomplete.getInstance(autocomplete);

	input.bind('keyup paste', function(e) {

		e.preventDefault();
		var key = e.keyCode;
		var url = $(this).data('url');
		var search = $(this).val();

		if (![37, 38, 39, 40].includes(key))
			autocompleteFind(url, search, instance)

	});

	autocompleteFind(input.data('url'), input.val(), instance)

}
