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
    let servicesCarousel = $('.owl-carousel.services-carousel');
    servicesCarousel.owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 10,
                center: true,
            },
            1024: {
                items: 3,
            }
        }
    })
    $(".services-carousel-next").on("click", function () {
        servicesCarousel.trigger('next.owl.carousel', [600]);
    });
    $(".services-carousel-prev").on("click", function () {
        servicesCarousel.trigger('prev.owl.carousel', [600]);
    });


    // services tab logic
    $(".services-tab").on("click", function () {
        let index = $(this).index(); // получаем номер таба (0,1,2,3)

        // Убираем активный класс у всех табов и добавляем только на текущий
        $(".services-tab").removeClass("active");
        $(this).addClass("active");

        // Прячем все контейнеры и показываем соответствующий
        $(".services-carousel-container").hide();
        $(".services-carousel-container").eq(index).fadeIn(300); // плавное появление
    });

    // Изначально показываем только первый контейнер
    $(".services-carousel-container").hide().first().show();


})