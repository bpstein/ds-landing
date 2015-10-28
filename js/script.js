$(document).ready(function(){

  // Declare global variables
  var $window = $(window);
  var $animation_elements = $('.animation-element');
  var panelClass = $('.panel').data('section-name');
  var scroll_position = $(document).scrollTop();

  // Scrollify script for locking panels to screen
  $.scrollify({
    section: "section",
    sectionName: "section-name",
    easing: "easeOutExpo",
    scrollSpeed: 500,
    offset: 0,
    scrollbars: true,
    before: function() {},
    after: function() {},
    afterResize: function() {}
  });

  // Animate elements if they are in the current viewport
  function check_if_in_view() {

    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      // Check to see if the current element is within the viewport
      if ((element_bottom_position >= window_top_position) && 
         (element_top_position <= window_bottom_position)) {
          // Animations and effects once screen is in viewport
          $('.scenario').fadeIn(1500);
          $('.response').fadeIn(1900);
          $('.detail-text-left').hide(); 
          $('.detail-text-right').hide();
          $element.addClass('viewable');
          $('.detail-text-left').fadeIn(1900);
          $('.detail-text-right').fadeIn(2600);
      }

      else {
        $element.removeClass('viewable');
      }

    });
  }

  $(window).scroll(function(){

    // Fades in the iPhone placeholder image depending on scroll position
    if (scroll_position > 1750) {
      $('#phoneImage').fadeOut(600);
    }

    else {
      $('#phoneImage').fadeIn(800);
    }
  });

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

});



  // // Hide elements as the default state
  // $('.detail-text').hide();
  // $('.info-block-left').hide();
  // $('.info-block-middle').hide();
  // $('.info-block-right').hide();

  // $(window).scroll(function(){

  //   $('.info-block-left').fadeIn(500);
  //   // $('.info-block-middle')fadeIn(1500);
  //   // $('.info-block-right')fadeOut(2500);



 

  //   // Hide info blocks on the About page 
  //   $('.info-block-left').hide();
  //   $('.info-block-middle').hide();
  //   $('.info-block-right').hide();

  // });
