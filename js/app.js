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



$(function() {
	'use strict'


// ***** MAIN PAGE ***** redirects based on passcode entry

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
			var root = location.protocol + '//' + location.host;
			// can use document.URL instead of manual URL once I get godaddy to route correctly
			window.location.href = root + input + '.html';
		}
		// if not contained, open error modal
		else {
			$('#wrongCode').foundation('reveal', 'open');
		}
	});


// ***** RESUME PAGE *****




});