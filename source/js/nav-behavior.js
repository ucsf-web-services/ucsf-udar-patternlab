jQuery(function($){
	var $window = $(window), $body = $('.body-content--wrapper'), $nav = $('.nav--wrapper'), $content = $('.contents--wrapper');
	var navHeight = ($('.body-content--wrapper').hasClass('transparent')) ? $nav.find('.nav-global--wrapper').height() : $nav.height();
	var firstElementHeight = $content.find('div:first').height();
	var threshold = navHeight+firstElementHeight;
	var thresholdHide = threshold*0.95;

	if($window.width() >= 1024) {
		if($body.hasClass('transparent')) {
			// console.log(threshold);
			$window.scroll(function(e){
				var scrollTop = $(this).scrollTop();
				if(scrollTop >= threshold) {

					if($body.hasClass('transparent')) {
						$body.removeClass('transparent').find('.nav--wrapper').addClass('scrolling').css({'top':'-'+$nav.height()+'px'});
						$content.css({'margin-top':'40px'});
						$nav.animate({'top':'0'},300,'linear',function(){
								$(this).removeAttr('style');
						});
					}
				} else {
					if(!$body.hasClass('transparent')) {
						$body.addClass('transparent');
						$nav.removeClass('scrolling');
						$content.removeAttr('style');

					}
				}


			});
		} else {
			$nav.css({'position':'absolute'}).addClass("static");
			thresholdHide = threshold*0.50;
			$window.scroll(function(e){
				var scrollTop = $(this).scrollTop();
				if(scrollTop >= threshold) {
					if($nav.hasClass('static')) {
						$nav.removeAttr('style').removeClass('static').addClass('scrolling');
						$nav.css({'position':'fixed'}).css({'top':'-'+$nav.height()+'px'}).animate({'top':'0'},300,'linear');
						$content.css({'margin-top':$nav.height()+'px'});
					}
				} else {
					if($nav.hasClass('scrolling')) {
						$nav.removeClass('scrolling').addClass("static").css({'position':'absolute'});
						$content.removeAttr('style');
					}
				}


			});
		}
	}

});
