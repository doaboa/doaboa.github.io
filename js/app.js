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
	'use strict'

	// allows the enter key to also trigger the button click event
	$(".enterAccess").keypress(function(event){
    	if(event.keyCode == 13){
        	event.preventDefault();
        		$(".button").click();
    		}
	});

	// string of approved passcodes
	var codes = "columbia sneakpeek";
	$('.button').click(function () {
		// grab input, make all letters lowercase
		var input = ($('input:text').val()).toLowerCase();
		// evaluate input to see if it is contained in codes, if so append to URL if valid
		if ( codes.indexOf(input) !== -1 ) {
			window.location.href = document.URL + input + '.html';
		}
		// if not contained, open error modal
		else {
			$('#wrongCode').foundation('reveal', 'open');
		}
	});
});