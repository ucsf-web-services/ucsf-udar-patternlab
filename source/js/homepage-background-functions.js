jQuery(function($){

	var $hero = $('.hero--wrapper .block-hero');
	var $bgWrapper = $hero.find('.hero-background');
	var $bgs = $bgWrapper.find('.backgrounds');
	var bgLength = $bgs.length;

	function pickRandomNumber(min,max) {
	    return Math.floor(Math.random()*(max-min+1)+min);
	}

	$bgWrapper.find('.backgrounds:nth-child('+ pickRandomNumber( 1,bgLength )+')').show();
});
