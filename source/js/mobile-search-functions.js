jQuery(function($){

	var $searchMobile = $("#searchMobile"),
	$parent = $searchMobile.parent(),
	$placeholder = $parent.find('.placeholder');

	// Advanced Form
	// $label = $('.mobile-search-advanced-form .mobile-search-option label'),
	var $radioAllMobile = $('.mobile-search-advanced-form .mobile-search-option');

	// Toggle buttons
	var $searchFormToggle = $('.mobile-search-form-toggle'),
	$searchForm = $('.nav-main-mobile-search');


	var mobileSearchEvents = {
		init: function() {
			this.toggleSearchForm();
			this.togglePlaceholder();
			this.toggleOptions();

		},
		toggleSearchForm: function() {
			$searchFormToggle.on('click', function(e) {
				e.preventDefault();
				var $searchForm = $(this).parent().parent().parent().parent().parent().parent().find('.nav-main-mobile-search');

				$searchForm.toggleClass('open');

			});
		},
		togglePlaceholder: function() {
			$('body')
				.on('focusin', '#searchMobile', function(e){
					e.preventDefault();
					var val = $(this).val();
					if( '' != val) {
						 return;
					}
					console.log('working focusin');
					$('.placeholder').hide();
				})
				.on('focusout', '#searchMobile', function(e){
					e.preventDefault();
					var val = $(this).val();
					if( '' != val) {
						 return;
					}
					console.log('working focusout');
					$('.placeholder').show();
				});
			
		},
		toggleOptions: function() {
			$radioAllMobile.on('click', function(e) {
				$radioAllMobile.find('.radio-circle').removeClass('checked').find('input[type="radio"]').prop('checked',false);
				$(this).find('.radio-circle').addClass('checked').find('input[type="radio"]').prop('checked',true);
			});
		}
	};

	if($searchMobile.length > 0) mobileSearchEvents.init();

});
