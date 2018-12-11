//fonction de changement de couleur des liens du menu
function activeBlue() {$(".menu-burger>a").each(function () {
   let targetSection = $(this.hash);
   let sectionOffset = targetSection.offset().top;
   let scrollTop = $(window).scrollTop();
   if(scrollTop >= sectionOffset-10) {
       $(".menu-burger>a").each(function () {
           $(this).removeClass("blue");
       });
       $(this).addClass("blue");
   }
});
}

// menu burger

$(".burger").click(function() {
   $(this).toggleClass("burger-active"); //burger devient croix
   $(this).next(".menu-burger").toggleClass("menu-active"); //menu s'affiche

//changement de couleur dans le menu selon où on est dans la page
 activeBlue()
});

// changement de couleur en direct si on scroll quand le menu est ouvert
$(window).scroll(function() {
   activeBlue()
});
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

// smooth scroll

$(".menu-burger>a").on('click', function(event) {
   //---cache le menu au click-------//
   $(".menu-burger").removeClass("menu-active");
   $(".burger").removeClass("burger-active")
   //-------smooth scroll---//
   event.preventDefault();
   let hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 800, function(){
   });
});
