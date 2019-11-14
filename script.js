jQuery( document ).ready(function($) {
     $('.topbar-bar').slideDown();
     $('.topbar-lever').slideUp();
     $('body').css('margin-top','40px')
     $('.closelink').on("click", function(){
       $('.topbar-bar').slideUp();
       $('.topbar-lever').slideDown();
       $('body').css('margin-top','7px');


     })

     $('.topbar-lever').on("click", function(){
      $('.topbar-bar').slideDown();
      $('.topbar-lever').slideUp();
      $('body').css('margin-top','40px');


    });

});