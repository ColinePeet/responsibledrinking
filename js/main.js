$(".onglet-f-title").click(function() {
    $(this).children(".fa-arrow-down").toggleClass("active");
    $(this).next("p").slideToggle();
    $(this).next("p").toggleClass("hidden");
})

// $(".onglet-f-title").click(function() {
//     $(this).children(".fa-arrow-down").toggleClass("active");
//     $(this).next("p").slideToggle();
//     $(this).next("p").toggleClass("hidden-else");
//     if ($(this).next("p").hasClass("hidden-else")) {
//         $(this).next("p").slideDown();
//         $(this).next("p").addClass("hidden-else");
//     }
//     else 
//         $(this).next("p").slideUp();
//         $(this).next("p").removeClass("hidden-else");
// })

//clic sur onglet title
// toggle le rotate sur l'icone
// toggle le slide du texte


    //si clic sur un onglet title
    //toggleClass sur l'icone 
    //slideToggle sur le texte
    //sinon
    //removeCLass sur l'icone
    //slideUp sur le txt

    