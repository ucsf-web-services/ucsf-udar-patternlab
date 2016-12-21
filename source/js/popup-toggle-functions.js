jQuery(function($){
	$('#message_popup .popup_body button, #message_popup .popup_body .btn').on('click', function(e) {
		e.preventDefault();
		console.log('clicked');
		$(this).parent().parent().fadeOut();

	});

});

