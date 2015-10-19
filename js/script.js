$(document).ready(function(){

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

  $(window).scroll(function(){

    // var panelClass = $('.panel').data('section-name');
    // alert(panelClass);

    var scrollPos = $(document).scrollTop();

    // Fades in the iPhone placeholder image depending on scroll position
    if (scrollPos > 1750) {
      $('#phoneImage').fadeOut(600);
    }

    else {
      $('#phoneImage').fadeIn(800);
    }

    if($('.panel').is(':visible')) {
      $('.response').addClass('response-up');
      $('.response-up').fadeIn(600);
    }

      //   $(window).scroll(function() {
//     if ($('.panel home').is(':visible')) {
//       $('.phoneImage').hide();
//     } 

//     else ($('.phoneImage').hide())
//   });

  });


  // $('.iPhone').hide();

  // $('.about').scroll(function() {
  //   ('.iPhone').fadeOut();
  //   ('#phoneImage').fadeOut();
  // });

  // $('iPhone').hide();
  // $('#phoneImage').hide();

  // $(window).scroll(function() {


  //   if ($(this).scrollTop()>0) {
  //     $('.iPhone').fadeOut();
  //     $('#phoneImage').fadeOut();
  //     $('detail-text').fadeIn();
  //   }

  //   else {
  //     $('.iPhone').fadeIn();
  //     $('#phoneImage').show();
  //   }
  // });

// $(window).scroll(function(){
//   var threshold = 200; // number of pixels before bottom of page that you want to start fading
//   var op = (($(document).height() - $(window).height()) - $(window).scrollTop()) / threshold;
//   if( op <= 0 ){
//     $("#phoneImage").show();
//   } else {
//     $("#phoneImage").hide();
//   }
//   $("#phoneImage").css("opacity", op ); 
// });


  // $('.phoneImage').show();

  // $(window).scroll(function() {
  //   if($('#phoneDemo1').is(':visible')) {
  //     $('.phoneImage').show();
  //   }
  // });

//   $(window).scroll(function() {
//     if ($('.panel home').is(':visible')) {
//       $('.phoneImage').hide();
//     } 

//     else ($('.phoneImage').hide())
//   });
// });

});
