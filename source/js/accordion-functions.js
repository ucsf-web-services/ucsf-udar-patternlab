jQuery(function($){
	var $accordionList = $('.accordion-list'),
	$accordionItem = $('.accordion-item'),
	$accordionToggle = $accordionItem.find('.accordion-header');

	var animationDuration = 300;

	var accordionEvents = {
		init: function() {
			this.acClickEvent();
		},
		acClickEvent: function() {
			var _this = this;
			$accordionToggle.on('click', function(e) {
				e.preventDefault();

				if($(this).parent().hasClass('active')) {
					_this.hideEvent();
					return;
				}

				_this.hideEvent();
				$(this).parent().addClass('active');
				$(this).parent().find('.accordion-content').slideDown(animationDuration).addClass('open');
			});
		},
		hideEvent: function() {
			$accordionList.find('.active').removeClass('active').find('.accordion-content').slideUp(animationDuration).removeClass('open');

		},
	};


	if( $accordionList.length > 0 )  accordionEvents.init();

});
