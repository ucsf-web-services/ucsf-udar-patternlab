jQuery(function($){
	var $masonryContainer = $('.masonry-wrapper .masonry-results');

	var masonryEvents = {
		init: function() {
			if($masonryContainer.length > 0) this.renderMasonry();
		},
		renderMasonry: function() {
			var settings = this.masonrySettings();
			$masonryContainer.masonry(settings);
			$masonryContainer.imagesLoaded(function(){
				$masonryContainer.masonry(settings);
			});
		},
		masonrySettings: function(){
			return {
				isFitWidth: false,
				percentPosition: true,
				columnWidth: ".masonry-sizer",
				isInitLayout: false,
				itemSelector: '.masonry-wrapper .masonry-results li'
			};
		},
		reinit: function(){
			$masonryContainer = $('body').find('.masonry-wrapper .masonry-results');
			if($masonryContainer.length > 0) this.renderMasonry();
		}
	};

	masonryEvents.init();
	reinitButtons();
	reinitSelect();

	$('select[name="category"]').each(function(){
		var $select = $(this);
		var $options = $(this).find('option');
		var $parent = $('body').find('.filters');
		var $wrapper = $('<ul class="category-nav" role="navigation"></ul>');
		var $itemWrapper = $('<li></li>');


		$options.each(function(){
			var $option = $(this);
			var value = $option.val();
			var text = $(this).text();
			var lowerCaseText = text.toLowerCase();
				btnClass = 'btn--'+lowerCaseText.replace(/\s/g,'-');
			var _id = lowerCaseText.replace(/\s/g,'_');
			var value = $(this).val();
			var $link = $('<a class="btn btn--category '+btnClass+'" id="'+_id+'" data-value="' + value + '"></a>');
			var $new_link = $link.clone();
			var $list_wrapper = $itemWrapper.clone();
			$new_link.text(text).attr('href', $select.attr('name'));
			$list_wrapper.append($new_link);
			$wrapper.append($list_wrapper);
		});
		$parent.append($wrapper);
	});

	$('body').on('click', ".btn--category", function(e){
		e.preventDefault();
		if(!$(this).hasClass('active')){
			var $this = $(this);
			var _id = $this.data('value');
			var $select = $('body').find('select[name="category"]');
			var $options = $('select[name="category"] option');
	
			$select.val(_id);
			$select.trigger('change');
			$('.category-nav li .btn--category').removeClass('active');
			$(this).addClass('active');
		}
	});


	function reinitButtons(){
		$('body').find('.pager__item').find('a').on("click", function(e){
			setTimeout(function(){
				masonryEvents.reinit();
				reinitButtons();
			}, 1000);
		});
	}

	function reinitSelect(){
		$('body').on('change', 'select', function(){
			setTimeout(function(){
				masonryEvents.reinit();
				reinitSelect();
			}, 1000);
		});
	}


});
