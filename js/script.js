$(function(){
    $('.header__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 1000,
        fade: true
    });
});

$(function(){
    $('.projects__slider-photo').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        arrows: true,
        dots: false,
        infinite: true,
        // autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 1000,
        fade: true,
        asNavFor: '.projects__slider-info'
    });
});

$(function(){
    $('.projects__slider-info').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        arrows: false,
        dots: false,
        infinite: true,
        // autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 5000,
        speed: 1000,
        fade: true,
        asNavFor: '.projects__slider-photo'
    });
});

$(function(){
    $('.contact-customers__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        lazyLoad: 'ondemand',
        arrows: true,
        dots: false
    });
});
