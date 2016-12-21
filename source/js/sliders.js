jQuery(function($){
    // Funding priorities section
    var windowWidth = $(window).width();
    var slidesToShow;
    var $fundingPrioritiesItems = $('#fundingPrioritiesItems');
    var $blockItems = $fundingPrioritiesItems.find('.block--item');
    var blockLength = $blockItems.length;
    var windowLarge = 1200,
        windowMediumMin = 1024,
        windowMediumMax = 1199,
        windowSmallMin = 768,
        windowSmallMax = 1023;

    var slickOptions = {
            infinite: false,
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            mobileFirst: true,
            prevArrow: "<button type=\"button\" class=\"slick-prev\"><span class=\"fa fa-angle-left\"></span></button>",
            nextArrow: "<button type=\"button\" class=\"slick-next\"><span class=\"fa fa-angle-right\"></span></button>",
            responsive:[
                {
                    breakpoint: 319,
                    settings: "unslick"
                },
                {
                    breakpoint: 1023,
                    settings: { slidesToShow: 3, slidesToScroll: 1, arrows: false }
                },
                {
                    breakpoint: 1084,
                    settings: {slidesToShow: 3, slidesToScroll: 1, arrows: true}
                },
                {
                    breakpoint: 1199,
                    settings: { slidesToShow: 4, slidesToScroll: 1, arrows: false }
                },
                {
                    breakpoint: 1299,
                    settings: { slidesToShow: 4, slidesToScroll: 1, arrows:true }
                }

            ]
        };

    // if(windowWidth >= 1300){
    //     slidesToShow = 4;
    // }
    // else if(windowWidth >= 1024){
    //     slidesToShow = 3;
    // }

    function initiateSlick() {

        if (!$fundingPrioritiesItems.hasClass('slick-initialized') && !$fundingPrioritiesItems.hasClass('slick-slider')) { $fundingPrioritiesItems.slick( slickOptions ); }


        $(window).resize(function(){
            var $windowWidth = $(window).width();
            if ($windowWidth >= windowMediumMin && !$fundingPrioritiesItems.hasClass('slick-initialized') && !$fundingPrioritiesItems.hasClass('slick-slider')) {
                if (!$fundingPrioritiesItems.hasClass('slick-initialized') && !$fundingPrioritiesItems.hasClass('slick-slider')) {
                    $fundingPrioritiesItems.slick(slickOptions);
                } else {
                    $fundingPrioritiesItems.slick('unslick');
                    $fundingPrioritiesItems.slick(slickOptions);
                }
            } else if (blockLength >= 4 && (windowWidth >= windowMediumMin && windowWidth <= windowMediumMax) ) {
                if (!$fundingPrioritiesItems.hasClass('slick-initialized') && !$fundingPrioritiesItems.hasClass('slick-slider')) {
                    $fundingPrioritiesItems.slick(slickOptions);
                } else {
                    $fundingPrioritiesItems.slick('unslick');
                    $fundingPrioritiesItems.slick(slickOptions);
                }
            }
        });
    }


    if( blockLength >= 4) {
        initiateSlick();
    }

});
