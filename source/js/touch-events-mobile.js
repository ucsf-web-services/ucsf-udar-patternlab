jQuery(function($){

		var dragging = false;
		var $linkWithIcon = $('a.link.link--with-icon'),
			fundingPrioritiesItems = $('.block--funding-priorities-items');


		function tagTouchEvents(_objectName) {
			$(_objectName).on('touchend',function(e){
				if(dragging){
					e.prevenDefault();
				} else {
					var link = $(this).attr('href');
					window.location = link;
				}
			});

			$(_objectName).on('touchmove',function(){
				dragging=true;
			});

			$(_objectName).on('touchstart',function(){
				dragging=false;
			});
		}


		if (!("ontouchstart" in document.documentElement)) {
			$('html').addClass("no-touch");
		}else{
			tagTouchEvents('a.link.link--with-icon');
			tagTouchEvents('.block--funding-priorities-items');
			tagTouchEvents('.block--impact-stories-panel');
			tagTouchEvents('.block-ways-to-get-involved--item');


		}

});

