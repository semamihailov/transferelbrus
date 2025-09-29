"use strict";
$(function () {
    // scroll
    $(".menu-item-link, .hero-button").on("click", function () {
        let get_id = $(this).attr("data-item");
        let target = $("#" + get_id).offset().top;
        let headerHeight = $(".header").outerHeight();
        $(" html, body").animate({scrollTop: target - headerHeight}, 800);
    });

    // sticky header
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 50) { // 50px можно поменять
            $(".header").addClass("fixed");
        } else {
            $(".header").removeClass("fixed");
        }
    });
    
    // carousels init
    // let worksCarousel = $('.owl-carousel.works-carousel');
    // worksCarousel.owlCarousel({
    //     loop: true,
    //     margin: 24,
    //     nav: false,
    //     dots: false,
    //     responsive: {
    //         0: {
    //             items: 1.2,
    //             margin: 10,
    //             center: true,
    //         },
    //         480: {
    //             items: 2,
    //         },
    //         1024: {
    //             items: 4,
    //         }
    //     }
    // })
    // $(".works-carousel-next").on("click", function () {
    //     worksCarousel.trigger('next.owl.carousel', [600]);
    // });
    // $(".works-carousel-prev").on("click", function () {
    //     worksCarousel.trigger('prev.owl.carousel', [600]);
    // });



})