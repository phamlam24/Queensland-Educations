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
     $('.txt1').click(function(){
        $('.hover_bkgr_fricc_login').hide();
        setTimeout($('.hover_bkgr_fricc_signup').fadeIn(),500);
     })
    //  $(document).click(function (e){

    //     var container = $("#loginpopup");
    
    //     if (!container.is(e.target) && container.has(e.target).length === 0 && !just_opened){
    
    //         container.fadeOut();
            
    //     }
    //     if(just_opened){
    //         just_opened = false;
    //     }
    //     console.log(just_opened);

    // });
    // $(document).click(function (e){
    
    //     var container = $("#signuppopup");
    
    //     if (!container.is(e.target) && container.has(e.target).length === 0 && !just_opened){
    
    //         container.fadeOut();
            
    //     }
    //     if(just_opened){
    //         just_opened = false;
    //     }
    //     console.log(just_opened);
    // });
});
function reloadCss()
{
    var links = document.getElementsByTagName("link");
    for (var cl in links)
    {
        var link = links[cl];
        if (link.rel === "stylesheet")
            link.href += "";
    }
}
function confirmSignup(){
    var SignupSuccessful = true;
    // CONVERT TO VARIABLES:
    var firstname_tag = document.getElementById("firstname");
    var lastname_tag = document.getElementById("lastname");
    var mail_tag = document.getElementById("mail");
    var username_tag = document.getElementById("username");
    var password_tag = document.getElementById("passtmp1");
    var conf_password_tag = document.getElementById("passtmp2");
    var firstname = firstname_tag.innerHTML;
    var lastname = lastname_tag.innerHTML;
    var mail = mail_tag.innerHTML;
    var username = username_tag.innerHTML;
    var password = password_tag.innerHTML;
    var conf_password = conf_password_tag.innerHTML;
    firstname = firstname.trim();
    lastname = lastname.trim();
    mail = mail.trim();
    username = username.trim();
    // NAMECHECK:
    if(firstname.length >= 20){
        firstname_tag.setAttribute("data-validate","Name too long");
    }
    else if(firstname.length == 0){
        firstname_tag.setAttribute("data-validate","Please enter your first name");
    }
    if(lastname.length >= 20){
        lastname_tag.setAttribute("data-validate","Name too long");
    }
    else if(lastname.length == 0){
        lastname_tag.setAttribute("data-validate","Please enter your last name");
    }
    // TODO: ADD EMAIL FUNCTION (check if email already taken)
    // USERNAME:
    if(username.length > 15){
        username_tag.setAttribute("data-validate","Username should not contain more than 15 letters");
    }
    else if(username.length < 6){
        username_tag.setAttribute("data-validate","Username should not contain less than 6 letters");
    }
    else{
        for(var i = 0;i<username.length;++i){
            var current_char = username.charCodeAt(0);
            if(!((current_char>64 && current_char<91) || (current_char>47 && current_char<58) || (current_char>96 && current_char<123))){
                username_tag.setAttribute("data-validate","Username should not contain symbols");
            }
        }
    }
}
