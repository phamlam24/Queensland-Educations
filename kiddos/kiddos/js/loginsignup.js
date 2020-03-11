var LoginSuccessful = false;
// function login(){
//     document.getElementById("main").classList.add("blur");
//     console.log(document.getElementById("main").outerHTML);
// }
// function signup(){
//     document.getElementById("main").classList.add("blur");
//     console.log(document.getElementById("main").outerHTML);
// }
var just_opened = false;
$(window).load(function () {
    $(".trigger_popup_fricc_login").click(function(){
       $('.hover_bkgr_fricc_login').fadeIn();
       just_opened = true;
    });
    $("#gotologin").click(function(){
        $('.hover_bkgr_fricc_login').fadeIn();
        just_opened = true;
     });
    // $('.hover_bkgr_fricc_login').click(function(){
    //     $('.hover_bkgr_fricc_login').hide();
    // });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc_login').hide();
    });
    $(".trigger_popup_fricc_signup").click(function(){
        $('.hover_bkgr_fricc_signup').fadeIn();
        just_opened = true;
     });
    //  $('.hover_bkgr_fricc_signup').click(function(){
    //      $('.hover_bkgr_fricc_signup').hide();
    //  });
     $('.popupCloseButton').click(function(){
         $('.hover_bkgr_fricc_signup').hide();
     });
     $(".trigger_popup_fricc_forget").click(function(){
        $('.hover_bkgr_fricc_forget').fadeIn();
        just_opened = true;
     });
    //  $('.hover_bkgr_fricc_signup').click(function(){
    //      $('.hover_bkgr_fricc_signup').hide();
    //  });
     $('.popupCloseButton').click(function(){
         $('.hover_bkgr_fricc_forget').hide();
     });
     $('.send_email').click(function(){
         alert("An email has been sent to your address. Follow the instructions in the email to reset your password.");
         $('.hover_bkgr_fricc_forget').fadeOut();
     })
});


