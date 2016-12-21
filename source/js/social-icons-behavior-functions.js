jQuery(function($){

	var $window = $(window),
		$shareBlck = $('.block--share-btns'),
		$contentArea = $('.content-area'),
		$nav = $('.nav--wrapper'),
		$thresholdId = ( $('.block--story-detail-hero').length > 0 ) ? $('.block--story-detail-hero') : $('.header-section.section--title.story');

	var threshold,
		calculatedThreshold,
		offsetLeft;

	var snsScrollEvents = {
		init: function() {
			this.scrollEvent();
			this.resizeEvent();

		},
		scrollEvent: function() {
			$window.on('scroll',function(){
				var scrollTop = $(this).scrollTop();
				maxThreshold = $nav.height()+$thresholdId.height(),
				calculatedThreshold = threshold,
				offsetLeft = $contentArea.offset().left-30;
				if(scrollTop >= calculatedThreshold) {
					$shareBlck.addClass("followScroll").css(
						{
							"left" : offsetLeft+"px"
						}
					);

				} else {
					$shareBlck.removeClass("followScroll").removeAttr("style");
				}
			});
		},
		resizeEvent: function() {
			$window.on('resize',function(){
				maxThreshold = $nav.height()+$thresholdId.height(),
				calculatedThreshold = threshold,
				offsetLeft = $contentArea.offset().left-30;
			});
		}
	};


	if($shareBlck.length > 0 ) {
		threshold = $nav.height()+$thresholdId.height(),
		calculatedThreshold = threshold,
		offsetLeft = $contentArea.offset().left-30;

		if($window.width() >= 1024) snsScrollEvents.init();
		$window.on('resize',function() {
			if($window.width() >= 1024) snsScrollEvents.init();
			if($shareBlck.hasClass('followScroll')) {
				$shareBlck.removeClass('followScroll').removeAttr('style');
			}
		});
	}


	var $shareBtn = $('.article-share-btn');

	var snsBtnEvents = {
		init: function() {
			this.clickEvent();
		},
		clickEvent: function() {
			var _this = this;
			$shareBtn.on('click',function(e) {
				e.preventDefault();

				var $btn = $(this),
					url = window.location.href,
					parsedUrl = encodeURIComponent(url),
					title = "Share article on ",
					windowTitle,
					shareUrl;

				if( $btn.hasClass('facebook') ) {
					shareUrl = _this.getShareUrl('facebook') + parsedUrl;
					windowTitle = title+"Facebook";
				}

				if ( $btn.hasClass('twitter') ) {
					shareUrl = _this.getShareUrl('twitter') + parsedUrl;
					windowTitle = title+"Twitter";
				}

				if ( $btn.hasClass('linkedin') ) {
					shareUrl = _this.getShareUrl('linkedin') + parsedUrl;
					windowTitle = title+"LinkedIn";
				}

				if ( $btn.hasClass('google-plus') ) {
					shareUrl = _this.getShareUrl('google-plus') + parsedUrl;
					windowTitle = title+"Google Plus";
				}
				window.open(shareUrl, windowTitle, _this.createWinProp());
			});
		},
		getShareUrl: function(shareTo) {
			var shareLinks = {
				"facebook" : "https://www.facebook.com/sharer/sharer.php?u=",
				"twitter" : "https://twitter.com/intent/tweet?url=",
				"linkedin" : "https://www.linkedin.com/shareArticle?url=",
				"google-plus" : "https://plus.google.com/share?url="
			}

			return shareLinks[shareTo];
		},
		createWinProp: function() {
			var width = 512;
		    var height = 520;
		    var left = (screen.width/2)-(width/2);
		    var top = (screen.height/2)-(height/2);
		    var winProp = 'width='+ width+'px,height='+height+'px,top='+top+'px,left='+left+'px';

		    return winProp;
		}
	};

	if($shareBtn.length > 0) snsBtnEvents.init();

});
