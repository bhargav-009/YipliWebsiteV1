(function ($) {
	"use strict";
    jQuery(document).ready(function($){

        /*--------------------
            wow js init
        ---------------------*/
        new WOW().init();

        /*-------------------------
            magnific popup activation
        -------------------------*/
        $('.video-play-btn,.video-popup,.small-vide-play-btn').magnificPopup({
            type: 'video'
        });
        $('.image-popup').magnificPopup({
            type: 'image'
        });
        
        /*------------------
            back to top
        ------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 2000);
        });
        
        /*------------------------------
        smoth achor effect
        ------------------------------*/
        $(document).on('click','#primary-menu li a', function (e) {
            var anchor = $(this).attr('href');
            var link = anchor.slice(0,1);
            if ('#' == link) {
                e.preventDefault();
                var top = $(anchor).offset().top;
                $('html, body').animate({
                    scrollTop: $(anchor).offset().top
                }, 1000);
                $(this).parent().addClass('active').siblings().removeClass('active');
            }
           
        });
      
       
        /*-------------------------------------
            Product carousel
        --------------------------------------*/
        var $productCarousel = $('.product-carousel');
        if ($productCarousel.length > 0) {
            $productCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: false,
                nav: true,
                navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav:false,
                    },
                    414: {
                        items: 1,
                        nav:false,
                    },
                    767: {
                        items: 2,
                    },
                    960: {
                        items: 3,
                    },
                    1200: {
                        items: 4
                    },
                    1920: {
                        items: 4
                    }
                }
            });
        }
        
       
        /*-------------------------------------
            testimonial carousel
        --------------------------------------*/
        var $testimoinalCarousel = $('.testimonial-carousel');
        if ($testimoinalCarousel.length > 0) {
            $testimoinalCarousel.owlCarousel({
                loop: true,
                autoplay: true, //true if you want enable autoplay
                autoPlayTimeout: 1000,
                margin: 30,
                dots: false,
                nav: true,
                navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav:false,
                    },
                    414: {
                        items: 1,
                        nav:false,
                    },
                    768: {
                        items: 2,
                    },
                    960: {
                        items: 2,
                    },
                    1200: {
                        items: 3
                    },
                    1920: {
                        items: 3
                    }
                }
            });
        }
     
        /*----------------------
            Search Popup
        -----------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#search-popup');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
           bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
        });
        $(document).on('click','#search',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
           bodyOvrelay.addClass('active');
        });

    });//end of document ready functino 

    //define variable for store last scrolltop
    var lastScrollTop = '';
    $(window).on('scroll', function () {
        
        //back to top show/hide
       var ScrollTop = $('.back-to-top');
       if ($(window).scrollTop() > 1000) {
           ScrollTop.fadeIn(1000);
       } else {
           ScrollTop.fadeOut(1000);
       }
       /*--------------------------
        sticky menu activation
       -------------------------*/
        var st = $(this).scrollTop();
        var mainMenuTop = $('.navbar-area');
        if ($(window).scrollTop() > 1000) {
            if (st > lastScrollTop) {
                // hide sticky menu on scrolldown 
                mainMenuTop.removeClass('nav-fixed');
                
            } else {
                // active sticky menu on scrollup 
                mainMenuTop.addClass('nav-fixed');
            }

        } else {
            mainMenuTop.removeClass('nav-fixed ');
        }
        lastScrollTop = st;
       
    });
           
    $(window).on('load',function(){

        /*-----------------
            preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.fadeOut(1000);
        /*-----------------
            back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();
        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click','.cancel-preloader a',function(e){
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });

    });

}(jQuery));	
