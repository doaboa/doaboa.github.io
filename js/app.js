var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);

(function() {

	'use strict';
	app.init();

})();

// redirects based on passcode entered
$(function() {
	$('.gbu').click(function () {
		// grab input, make all letters lowercase
		var input = ($('input:text').val()).toLowerCase();
		// evaluate input, append to URL if valid
		if (input == "hello") {
			window.location.href = "http://www.hellodoa.com/" + input;
		}
		// give error if not valid
		else {
			alert("Incorrect Access Code");
		}
	});
});