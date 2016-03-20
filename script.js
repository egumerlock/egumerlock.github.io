$(document).ready(function(){


    $('.header').mouseenter(function() {
        $('.header').fadeTo('fast',.7);
    });


    $('.header').mouseleave(function() {
        $('.header').fadeTo('fast',1);
    });

    $('nav #button').mouseenter(function() {
        $('.projects').fadeTo('fast',.7);
        $('.bottomcontent').fadeTo('fast',.7);
        $(this).fadeTo('fast',1);
    });


    $('nav #button').mouseleave(function() {
      $('.projects').fadeTo('fast',1);
        $('.bottomcontent').fadeTo('fast',1);
        $(this).fadeTo('fast',1);
    });
});