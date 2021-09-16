$(document).ready(function(){
    $('.banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
      });

    //   counter up 
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // wow js 
    new WOW().init();

    // mixit up 
    var containerEl = document.querySelector('.port_part');

    var mixer = mixitup(containerEl);
// aos plugin 
AOS.init();

// owl carousel 
// $(".owl-carousel").owlCarousel(){

// };


})