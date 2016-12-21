jQuery(function($){
	/**
	 * Desktop Search Script
	 */

	var $search = $('#searchDesktop'),
	$parent = $search.parent(),
	$placeholder = $parent.find('.placeholder');

	// Advanced Form
	$label = $('.search-advanced-form label'),
	$radioAll = $('.search-advanced-form .radio-circle');

	// Toggle buttons
	$advancedFormToggle = $('.search-advanced-form-toggle, .advanced-form-close-button'),
	$searchAdvancedForm = $('.search-advanced-form');


	var searchEvents = {
		init: function(){
			this.headerSearch();
			this.advancedForm();
		},
		headerSearch: function() {
			$search.on({
				focusin: function(e) {
					e.preventDefault();

					var val = $(this).val();
					if( '' != val) {
						 return;
					}

					$placeholder.hide();
				},
				focusout: function(e) {
					e.preventDefault();

					var val = $(this).val();
					if( '' != val) {
						 return;
					}

					$placeholder.show();
				}
			});
		},
		advancedForm: function() {
			$call = this;

			// label events
			$label.on({
				mouseenter: function(e) {
					$call.toggleRadioHover($(this), 'label', 'add');
				},
				mouseleave: function(e) {
					$call.toggleRadioHover($(this), 'label', 'remove');
				}
			});

			$label.on('click',function(e){
				e.preventDefault();
				$selectedRadio = $(this).prev();
				$call.toggleRadioCheck( $selectedRadio );
			});

			// radio events
			$radioAll.on({
				mouseenter: function(e) {
					$call.toggleRadioHover($(this), 'radio-circle', 'add');
				},
				mouseleave: function(e) {
					$call.toggleRadioHover($(this), 'radio-circle', 'remove');
				}
			});

			$radioAll.on('click',function(e){
				e.preventDefault();
				$selectedRadio = $(this);
				$call.toggleRadioCheck( $selectedRadio );
			});

			// form toggle
			$advancedFormToggle.on('click', function(e){
				e.preventDefault();
				$searchAdvancedForm.toggleClass('open');
			});
		},
		toggleRadioCheck: function(selector) {

			if(selector.hasClass('checked')) {
				return;
			}

			$radioAll.removeClass('checked');
			$radioAll.find('input[type="radio"]').prop('checked',false);
			selector.addClass('checked');
			selector.find('input[type="radio"]').prop('checked',true);
		},
		toggleRadioHover: function(selector, elementCall, action) {
			if ( action == 'add' ) {
				if ( elementCall == 'label' ) {
					selector.addClass('hover');
					selector.prev().addClass('hover');
				} else if ( elementCall == 'radio-circle' ) {
					selector.addClass('hover');
					selector.next().addClass('hover');
				}
			} else if ( action == 'remove' ) {
				if ( elementCall == 'label' ) {
					selector.removeClass('hover');
					selector.prev().removeClass('hover');
				} else if ( elementCall == 'radio-circle' ) {
					selector.removeClass('hover');
					selector.next().removeClass('hover');
				}
			}
		}

	};


	if( $search.length > 0 ) searchEvents.init();



});
