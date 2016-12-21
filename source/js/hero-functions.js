jQuery(function($){


	// Detect IE Browsers
	var detectIE = function() {
		var ua = window.navigator.userAgent;

		// Test values; Uncomment to check result …

		// IE 10
		// ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

		// IE 11
		// ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

		// Edge 12 (Spartan)
		// ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

		// Edge 13
		// ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

		var ie9Detect = $('#detectIE');
		if( ie9Detect.hasClass('ie9') || ie9Detect.hasClass('ie8') || ie9Detect.hasClass('ie7') ) {
			return true;
		}


		var msie = ua.indexOf('MSIE ');
		if (msie > 0) {
		// IE 10 or older => return version number
			return true;
		}

		var trident = ua.indexOf('Trident/');
		if (trident > 0) {
		// IE 11 => return version number
			var rv = ua.indexOf('rv:');
			return true;
		}

		var edge = ua.indexOf('Edge/');
		if (edge > 0) {
		// Edge (IE 12+) => return version number
			return true;
		}

		// other browser
		return false;
	};


	// Global Variables and Objects
	var heroEvents;
	var $window = $(window);
	var $hero = $('.block.block-hero');
	var windowHeight = ( detectIE() ) ? window.innerHeight : $window.height();
	var windowWidth = ( detectIE() ) ? window.innerWidth : $window.width();
	var desktopLarge = 1200;
	var desktopMediumMax = desktopLarge-1;
	var desktopMediumMin = 1024;
	var tabletMax = desktopMediumMin-1;
	var tabletMin = 768;
	var heroHeight;


	// Events
	var heroEvents = {
		init: function() {
			this.onRenderEvent();
			this.onResizeEvent();
		},
		onRenderEvent: function() {
			if( windowWidth <= 1023 ) {
				return;
			}

			if( windowWidth >= desktopLarge ) {

				heroHeight = (windowWidth >= desktopLarge && windowWidth <= 1366) ? (windowHeight * 0.7256614) : (windowHeight * 0.7656614);

			} else if ( (windowWidth >= desktopMediumMin && windowWidth <= desktopMediumMax) ) {

				heroHeight = windowHeight * 0.7256614;

			}
			console.log(heroHeight);
			$hero.css({ "height" : heroHeight });
		},
		onResizeEvent: function() {
			var _this = this;
			var resizeTimeout;

			$window.on('resize',function(){
				var onResize = function(){
			        //The method which alter some css properties triggers
			        //window.resize again and it ends in an infinite loop
			        windowWidth = winNewWidth;
	        		windowHeight = winNewHeight;
			        _this.onRenderEvent();
			    }

				//New height and width
			    var winNewHeight = ( detectIE() ) ? window.innerHeight : $window.height(),
			        winNewWidth = ( detectIE() ) ? window.innerWidth : $window.width();

		        if(windowWidth != winNewWidth || windowHeight != winNewHeight ) {
		        	window.clearTimeout(resizeTimeout);
        			resizeTimeout = window.setTimeout(onResize, 10);
		        }

			});
		}
	};


	// Initialize
	if( detectIE() === true ) heroEvents.init();

});
