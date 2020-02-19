
// function login(){
//     document.getElementById("main").classList.add("blur");
//     console.log(document.getElementById("main").outerHTML);
// }
// function signup(){
//     document.getElementById("main").classList.add("blur");
//     console.log(document.getElementById("main").outerHTML);
// }
$(window).load(function () {
    $(".trigger_popup_fricc_login").click(function(){
       $('.hover_bkgr_fricc_login').show();
    });
    $('.hover_bkgr_fricc_login').click(function(){
        $('.hover_bkgr_fricc_login').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc_login').hide();
    });
    $(".trigger_popup_fricc_signup").click(function(){
        $('.hover_bkgr_fricc_signup').show();
     });
     $('.hover_bkgr_fricc_signup').click(function(){
         $('.hover_bkgr_fricc_signup').hide();
     });
     $('.popupCloseButton').click(function(){
         $('.hover_bkgr_fricc_signup').hide();
     });
});