/*========================================================================
EXCLUSIVE ON themeforest.net
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Template Name   : Olga
Author          : ThemePaa
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Copyright (c) 2018 - ThemePaa
========================================================================*/
  

(function($){
    "use strict"
    var OLGA = {};

    /*--------------------
      * Pre Load
    ----------------------*/
    OLGA.WebLoad = function(){
      document.getElementById("loading").style.display = "none"; 
    }

    /*--------------------
        * Header Class
    ----------------------*/
    OLGA.HeaderSticky = function(){
        $(".navbar-toggler").on("click", function(a) {
            a.preventDefault(), $(".navbar").addClass("fixed-header")
        });
    }

    OLGA.MenuTogglerClose = function(){
      $(".toggler-menu").on('click', function () {
          $(this).addClass("open");
          $(".top-side-nav").addClass("menu-open");
          $(".menu-overlay").addClass("overlay-show");
      });
      $(".menu-toggler-close, .menu-overlay, .top-side-nav li a").on('click', function () {
          $(".toggler-menu").removeClass("open");
          $(".top-side-nav").removeClass("menu-open");
          $(".menu-overlay").removeClass("overlay-show");
      });
    }
    /*--------------------
        * Menu Close
    ----------------------*/
    OLGA.MenuClose = function(){
      $('.navbar-nav .nav-link').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }

    /*--------------------
        * Smooth Scroll
    ----------------------*/
    OLGA.HeaderScroll = function(){
        $('a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 65,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

    /*--------------------
        * Header Fixed
    ----------------------*/
    OLGA.HeaderFixed = function(){
        if ($(window).scrollTop() >= 60) {
           $('.navbar').addClass('fixed-header');
        }
        else {
           $('.navbar').removeClass('fixed-header');
        }
    }    

    /*--------------------
        * Progress Bar 
    ----------------------*/
    OLGA.ProgressBar = function(){
        $(".progress .progress-bar").each(function () {
          var bottom_object = $(this).offset().top + $(this).outerHeight();
          var bottom_window = $(window).scrollTop() + $(window).height();
          var progressWidth = $(this).attr('aria-valuenow') + '%';
          if(bottom_window > bottom_object) {
            $(this).css({
              width : progressWidth
            });
          }
        });
    }

    /*--------------------
    * Counter JS
    ----------------------*/
    var a = 0;
    OLGA.Counter = function(){
      var oTop = $('.counter-box').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
          a = 1;
        }
    }

    /*--------------------
    * owl Slider
    ----------------------*/

    OLGA.ClientSlider = function(){
      var testimonials_slider = $('#client-slider-single');
        testimonials_slider.owlCarousel({
            loop: true,
            margin: 30,
            nav:false,
            responsive: {
              0: {
                items: 1
              },
              600: {
                items: 1
              },
              768: {
                items: 2
              },
              991: {
                items: 2
              },
              1140: {
                items: 3
              }
            }
        });
    }
    /*--------------------
    * owl Slider
    ----------------------*/
    OLGA.BlogSlider = function(){
      var testimonials_slider = $('#portfolio-slider-single');
        testimonials_slider.owlCarousel({
            loop: true,
            margin: 30,
            nav:false,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 1
              },
              991: {
                items: 2
              },
              1140: {
                items: 3
              }
            }
        });
    }


    /*--------------------
    * Isotope
    ----------------------*/
    OLGA.MasoNry = function () {
      var portfolioWork = $('.portfolio-content');
        $(portfolioWork).isotope({
            resizable: false,
            itemSelector: '.portfolio-item',
            layoutMode: 'masonry',
            filter: '*'
          });
          //Filtering items on portfolio.html
          var portfolioFilter = $('.filter li');
          // filter items on button click
          $(portfolioFilter).on( 'click', function() {
            var filterValue = $(this).attr('data-filter');
            portfolioWork.isotope({ filter: filterValue });
          });
          //Add/remove class on filter list
          $(portfolioFilter).on( 'click', function() {
            $(this).addClass('active').siblings().removeClass('active');
          });
    }


    OLGA.PopupVideo = function(){
      $('.popup-video').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: false,
              fixedContentPos: false
        });
    }

    OLGA.LightboxGallery = function(){
      $('.portfolio-col').magnificPopup({
          delegate: '.lightbox-gallery',
          type: 'image',
          tLoading: '#%curr%',
          mainClass: 'mfp-fade',
          fixedContentPos: true,
          closeBtnInside: true,
          gallery: {
              enabled: true,
              navigateByImgClick: true,
              preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
          }
      });
    }

     OLGA.mTypeIt = function() {
        new TypeIt('#type-it', {
            speed: 200,
            loop:true,
            strings: [
              'Software Developer',
            ],
            breakLines: false
        }); 
    }

    
    // Window on Load
    $(window).on("load", function(){
      OLGA.MasoNry(),
      OLGA.WebLoad();
    });

    $(document).on("ready", function(){
        OLGA.ClientSlider(),
        OLGA.MenuClose(),
        OLGA.MenuTogglerClose(),
        OLGA.BlogSlider(),
        OLGA.Counter(),
        OLGA.MasoNry(),
        OLGA.ProgressBar(),
        OLGA.HeaderScroll(),
        OLGA.PopupVideo(),
        OLGA.LightboxGallery(),
        OLGA.mTypeIt(),
        OLGA.HeaderSticky();
    });

    $(window).on("scroll", function(){
        OLGA.Counter(),
        OLGA.ProgressBar(),
        OLGA.HeaderFixed();
    });

})(jQuery);


