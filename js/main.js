(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });

  //magnificPopup
  $('.popup-img').magnificPopup({
    type: 'image'
  });
  $('.popup-video').magnificPopup({
  type: 'iframe'
  });
  // magnific-popup-img-gallery
  $('.album-img a').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    }
  });
  //multiple-img-gallery
  $('.image-box').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: '.img', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
  }); 


  // news-section
  $('.news-section').click(function(){
    $(this).addClass('expand-now');
  })


  // owl-carousel
  $('.video-slider-active').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    responsiveClass:true,
    nav:true,
    dots:true,
    navText: ['<span class="fas fa-chevron-left"></span>','<span class="fas fa-chevron-right"></span>'],
  });

})(jQuery);




$(document).ready(function(){

  // nice-select
  $('.nice-select').niceSelect();

  // preloader
  $("#preloader").fadeOut(500);

})











