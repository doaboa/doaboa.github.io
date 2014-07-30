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
		// evaluate input to see if it is contained in codes, if so append to URL
		if ( codes.indexOf(input) !== -1 ) {
			// reconstruct page url & redirect. chose location.protocol and .host over document.URL in case of /# after failed pw entry
			window.location.href = location.protocol + '//' + location.host + '/' + input + '.html';
		}
		// if not contained, open error modal
		else {
			$('#wrongCode').foundation('reveal', 'open');
		}
	});

	$('.dontHave').click(function(){
		$('.sneakPeek').css('opacity', '1');
	});

// ***** RESUME PAGE *****

	// animate link transitions in nav
	$('a[href^="#"]').on('click',function (e) {
	        e.preventDefault();

	        var target = this.hash,
	        $target = $(target);

	        $('html, body').stop().animate({
	            'scrollTop': $target.offset().top -100
	        }, 900, 'swing', function () {
	            window.location.hash = target;
	        });
	    });

	// darken overlay on scroll
	$(window).scroll(function() { 
		var windowScroll = $(this).scrollTop();

		if (windowScroll < 550) {
			$('.navigation').css({
				'background-color': "rgba(0,0,0,0.2)"
			});
		} else {
			$('.navigation').css({
				'background-color': "rgba(0,0,0,.7)"
			});
		}

		$('.overlay').css({ 
			'margin-top': - (windowScroll / 3) + "px", 
			'opacity': 1 - (windowScroll / 550)
		}); 
		});
	});




