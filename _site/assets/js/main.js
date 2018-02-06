(function ($) {
  "use strict"; // Start of use strict

  new LazyLoad();

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  // Closes the Responsive Menu on Menu Item Click
  $('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
  });

  // Fit Text Plugin for Main Header
  $("h1").fitText(
    1.2, {
      minFontSize: '35px',
      maxFontSize: '65px'
    }
  );

  // Offset for Main Navigation
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  });

  $('.submit-form').on('click', function(e) {
    $.ajax({
      url: '//formspree.io/satuhearty@gmail.com',
      method: 'POST',
      data: $('#contactForm').serialize(),
      dataType: 'json',
      complete: function() {
        document.getElementById('contactForm').reset();
        $('.submit-form').prop('disabled', true);
      }
    });
  });

  // Initialize WOW.js Scrolling Animations
  new WOW().init();

})(jQuery); // End of use strict
