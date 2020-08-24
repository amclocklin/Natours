$(document).ready(function() {
        
      $('.js--scroll-to-about').click(function ()  {
          $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000);
        });
      
        $('.js--scroll-to-features').click(function ()  {
            $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
          });


          $('.js--scroll-to-tours').click(function ()  {
            $('html, body').animate({scrollTop: $('.js--section-tours').offset().top}, 1000);
          });
        
          $('.js--scroll-to-stories').click(function ()  {
              $('html, body').animate({scrollTop: $('.js--section-stories').offset().top}, 1000);
            });

            $('.js--scroll-to-booking').click(function ()  {
              $('html, body').animate({scrollTop: $('.js--section-booking').offset().top}, 1000);
            });
        
});



//animations for images and elements
///$('.js--wp-1').waypoint(function(direction) {
 // $('.js--wp-1').addClass('animated fadeIn');
//}, {
 // offset: '55%'
//})

//$('.js--wp-2').waypoint(function(direction) {
//  $('.js--wp-2').addClass('animated rotateInUpLeft');
//}, {
//  offset: '55%'
//})

//$('.js--wp-3').waypoint(function(direction) {
 // $('.js--wp-3').addClass('animated slideInUp');
//}, {
//  offset: '55%'
//})

///$('.js--wp-4').waypoint(function(direction) {
 // $('.js--wp-4').addClass('animated pulse');
//}, {
//  offset: '55%'
//})

//$('.js--nav-icon').click(function (){
 // var nav = $('.js--main-nav');
 // var icon = $('.js--nav-icon i');
  
 /// nav.slideToggle(200);
//
 // if (icon.hasClass('ion-navicon-round')) {
  //  icon.addClass('.ion-close-round');
 //   icon.removeClass('.ion-navicon-round');
 // } else {
 //   icon.addClass('.ion-navicon-round');
  //  icon.removeClass('.ion-close-round');
//  }
//});


//$('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element){
  //var nav = $('.js--main-nav');
 // var icon = $('.js--nav-icon i');

  //Gets the class name of the element that triggered the event
 // var clicked = element.target.className;

  //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
 // if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
  //    return;

  //Opens and closes the menu
 // if ($(window).width() < 768){
 //     nav.slideToggle(200);
 // }

  //Changes icon states of the menu button
  //if (icon.hasClass('ion-navicon-round')) {
  //    icon.addClass('ion-close-round');
  //    icon.removeClass('ion-navicon-round');
  //} else {
  //    icon.addClass('ion-navicon-round');
  ///    icon.removeClass('ion-close-round');
  //}
//});

