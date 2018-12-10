// menu burger

$(".burger").click(function() {
    $(this).toggleClass("burger-active"); //burger devient croix
    $(this).next(".menu-burger").toggleClass("menu-active"); //menu s'affiche
})

// scroll burger

let scroll = $('main').offset().top; // calcule ce qu'il y a de top au dessus du main

$(window).scroll(function() {
    let scrollTop = $(window).scrollTop();  // calcule la distance déjà parcourue
    if (scrollTop > scroll) { 
        $('.burger').addClass('scroll-burger'); 
    } else {
        $('.burger').removeClass('scroll-burger'); 
    }
});
