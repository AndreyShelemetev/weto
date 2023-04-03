$(document).ready(function () {
    $('.menu-burger_header').click(function () {
        $('.menu-burger_header').toggleClass('open-menu');
        $('.header_nav').toggleClass('open-menu');
    });
});






$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 700);
    });
});





$(window).ready(function () {
    $("#block").fadeIn('slow');
});


