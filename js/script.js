// Slider
$(function () {
    'use strict'

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
    });

    $('.test_slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.brand_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        nextArrow: '<i class="fas fa-chevron-right nxt_arrw"></i>',
        prevArrow: '<i class="fas fa-chevron-left prv_arrw"></i>',
        centerMode: true,
        centerPadding: 0,
        swipeToSlide: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    //  Venobox Video
    new VenoBox({
        selector: '.video',
    });

    // Type Js
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings'
    });
    var typed = new Typed('#typedd', {
        stringsElement: '#typed-stringss'
    });

    var typed = new Typed('.element', {
        strings: ['Saidul Islam Uzzal'],
        smartBackspace: true // Default value
    });

    var typed = new Typed('.elementt', {
        strings: ['Shaila Farhana Bristy'],
        smartBackspace: true // Default value
    });

    // counter up
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

})

// Menu Fix
let navoff = $('.main_menu').offset().top
console.log(navoff);

$(window).scroll(function () {
    let scroliing = $(this).scrollTop();

    if (scroliing > navoff) {
        $('.main_menu').addClass('menu_fix');
    } else {
        $('.main_menu').removeClass('menu_fix');
    }
});

//  Bc Top

$('.bc_top').click(function () {
    $('html, body').animate({
        scrollTop: 0,
    }, 2000);
});

$(window).scroll(function () {
    let scrolling = $(this).scrollTop();

    if (scrolling > 200) {
        $('.bc_top').fadeIn();
    } else {
        $('.bc_top').fadeOut();
    }
});