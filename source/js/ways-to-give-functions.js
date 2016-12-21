jQuery(function($){
	var $giveOptionLabel = $('.ways-to-give-option label'),
		$defaultValue = "100",
		$giveOtherField = $('.give-value-other-input');


		$giveOtherField.on({
			keydown: function(e) {
				var keyPressed = (e.keyCode) ? e.keyCode : e.which;

				/* LIST OF ALLOWED KEYS
				 * - Select All(Ctrl/Cmd+A) [65]
				 * - Paste (Ctrl/Cmd+V) [86]
				 * - Navigation Keys (Up, Down, Left, Right, Home, End) [35 ~ 40]
				 * - Num Row Keys (Only when shift key is not pressed.) [48 ~ 57]
				 * - Numpad Keys [96 ~ 105]
				 * - Delete [45]
				 * - Insert [46]
				 * - Backspace [8]
				 * - Tab [9]
				 * - Refresh Key [116]
				 */

				if( (( keyPressed == 65 || keyPressed == 86) && ( e.ctrlKey || e.metaKey  ))
					|| (keyPressed >= 35 && keyPressed <= 40)
					|| (keyPressed >= 48 && keyPressed <= 57 && !(e.shiftKey || e.altKey))
					|| (keyPressed >= 96 && keyPressed <= 105)
					|| (keyPressed == 45) || (keyPressed == 46)
					|| (keyPressed == 8) || (keyPressed== 9)
					|| (keyPressed == 116)
					) {
					return true;
				}

				return false;
			},
			change: function(e) {
				var currentValue = $(this).val();
				if(!new RegExp('^[0-9]*$').test(currentValue)) {
					$(this).val(currentValue.replace(/\D/g, ""));
				}
			},
			keyup: function(e) {
				var currentValue = $(this).val();
				if(!new RegExp('^[0-9]*$').test(currentValue)) {
					$(this).val(currentValue.replace(/\D/g, ""));
				}
				if( currentValue != '' ) {
					$(this).addClass('selected');
					$(this).removeClass('empty');
				} else {
					$(this).removeClass('selected');
					$(this).addClass('empty');
				}
			},
			focusin: function(e) {
				e.preventDefault();
				$(this).parent().parent().find('.ways-to-give-option').each(function(){
					var $radioChecked = $(this).find('input[type="radio"]:checked');
					$radioChecked.prop('checked',false);
				});
				$(this).prev().prev().prop('checked', true);
				var val = $(this).val(),
				$label = $(this).next().find('.label-text');

				if( '' != val) {
					 return;
				}
				$label.hide();
			},
			focusout: function(e) {
				e.preventDefault();
				var val = $(this).val(),
				$label = $(this).next().find('.label-text');
				if( '' != val) {
					 return;
				}
				$(this).prev().prev().prop('checked', false);
				// $defaultValueObj.prop('checked', true);
				$(this).parent().parent().find('.ways-to-give-option').each(function(){
					var $radioDefault = $(this).find('input[type="radio"]');
					if( $radioDefault.val() == $defaultValue ) {
						$radioDefault.prop('checked',true);
					}
				});
				$(this).removeClass('empty');
				$label.show();
			}
		});

		$giveOptionLabel.on('click',function(){
			$(this).prev().prop('checked',true);
			$(this).parent().parent().find('.ways-to-give-option').each(function(){
				var $radioOther = $(this).find('input[type="radio"]'),
					$radioParent = $radioOther.parent();
				if($radioOther.val() == "other") {
					$radioParent.find('.selected').removeClass('selected').val('');
					$radioParent.find('.empty').removeClass('empty').val('');
					$radioParent.find('input[type="text"]').next().find('.label-text').show()
				}
			});

		});

		$('form[name="ways-to-give"]').on('submit',function(e) {
			e.preventDefault();
			var action = $(this).attr('action');
			var selectedValue;
			var params;

			if($giveOtherField.val() != '') {
				selectedValue = $giveOtherField.val();
				params = "&Amount="+selectedValue;
			} else {
				selectedValue = $('input[type="radio"][name="GiftChoice"]:checked').val();
				params = "&GiftChoice="+selectedValue;
			}

			var finalUrl = action+params;

			window.location = finalUrl;
		});


});
