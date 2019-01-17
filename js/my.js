//All are my java script


$(document).ready(function () {




    // hoverl dropdown for bootstrap script code
    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });


    // Code fpr slick carousel
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 11,
        slidesToScroll: 3,
        autoplaySpeed: 1500,
        nextArrow: '<span role="button" class="fa fa-chevron-right " ><span > </span></span> '


    });


    $('.slick-slider-trending-now').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
    }
  ]


    });

    $('.slick-slider-trending-news').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
    }
  ]


    });
    $('.slick-slider-news').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
    }
  ]


    });


});

//Code for go to top button
$(".go-top-btn").css({
    'display': 'none'
});
$(window).scroll(function () {
    if ($(this).scrollTop() >= 800) {
        $(".go-top-btn").fadeIn(500);
    } else {
        $(".go-top-btn").fadeOut(500);
    }
})
$(document).ready(function () {
    $(".go-top-btn").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 700)
    });
});

//Code for floating navbar activation

//Code for go to top button

$(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
        $('.floating-navbar').addClass('slidedown');

    } else {
        $('.floating-navbar').removeClass('slidedown');
    }
})
$(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
        $('.news-view-navbar ').addClass('slidedown');

    } else {
        $('.news-view-navbar ').removeClass('slidedown');
    }
})




// Code fpr slick video carousel responsive carousel and also able disable ability using extra code prev button deactivate for first slider and next button is deactivate for last slider-----------------------------------------------------------------------------------------------------


var slider2 = $('.video-slick-slider').slick({
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 5,
    stopAtEnd: true,
    prevArrow: '<span role="button" class="fa fa-chevron-left video-charvon-left" ><span > </span></span> ',
    nextArrow: '<span role="button" class="fa fa-chevron-right video-charvon" ><span > </span></span> ',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
    },
        {
            breakpoint: 480,
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

//Extra code for carousel
$('.video-charvon-left').hide();

slider2.on('afterChange', function (event, slick, currentSlide) {
    console.log(currentSlide);
    //If we're on the first slide hide the Previous button and show the Next
    if (currentSlide === 0) {
        $('.video-charvon-left').hide();
        $('.video-charvon').show();
    } else {
        $('.video-charvon-left').show();
    }


    //If we're on the last slide hide the Next button.
    if (slick.slideCount === currentSlide + 1 || slick.slideCount === currentSlide + 5) {
        $('.video-charvon').hide();
    } else {
        $('.video-charvon').show();
    }
});

//Code fpr slick video carousel ended here --------------------



$('.trending-video-slick-slider').slick({
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 5,
    stopAtEnd: true,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
    },
        {
            breakpoint: 480,
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


//code when click on more button to popo up small menu screen started-------------------------------------------------------------------------------------------

$('.more, .share-more').click(function () {
    $('.subbody').addClass('subbody-open');
    $('.video-page .navbar').removeClass('navbar-fixed-top ');
    $('.original-content').css({
        'display': 'none'
    })


})
$('.sub-close-btn').click(function () {
    $('.subbody').removeClass('subbody-open');
    $('.video-page .navbar').addClass('navbar-fixed-top ');
    $('.original-content').css({
        'display': 'block'
    })
})

//when screen is big then 954px then small screen for more button will disable or default function will work  autimatically..


var trackingWindowWidth;
$(window).resize(function () {
    trackingWindowWidth = window.innerWidth;
    if (trackingWindowWidth > 954) {
        $('.original-content').css({
            'display': 'block'
        })
        $('.subbody').removeClass('subbody-open');
        $('.video-page .navbar').addClass('navbar-fixed-top ');

    }
})

//code when click on more button to popo up small menu screen ended-------------------------------------------------------------------------------------------
