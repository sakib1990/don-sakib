(function ($) {
  'use strict';
  $('.slider-active').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  var grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-item'
    }
  })

  $('.protfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    grid.isotope({
      filter: filterValue
    });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
  });
  // magnific popup
  $('.popup-img').magnificPopup({
    type: 'image'
    // other options
  });




})(jQuery);