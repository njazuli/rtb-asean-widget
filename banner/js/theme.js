; (function ($) {
    "use strict"
    /*----------------------------------------------------*/
    /*  Videos Slider
    /*----------------------------------------------------*/
    function video_slider() {
        if ($('.video_slider').length) {
            $('.video_slider').owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                items: 6,
                autoplay: true,
                nav: true,
                navText: [
                        "<i class='fa fa-angle-left'></i>",
                        "<i class='fa fa-angle-right'></i>" ],
                smartSpeed: 1500,
                dots: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2,
                    },
                    400: {
                        items:2,
                    },
                    575: {
                        items:2,
                    },
                    768: {
                        items:3,
                    },
                    992: {
                        items: 6,
                    }
                }
            })
        }
    }
    video_slider();


})(jQuery)


