/**
  * isMobile
  * responsiveMenu
  * headerFixed
  * topSearch
  * flatClient
  * ajaxContactForm;
  * alertBox;
  * widgetTestimonial
  * flatTestimonial
  * flatCurrency
  * blogCarousel
  * flatAccordion
  * flatTabs
  * flatCounter
  * detectViewport
  * goTop
  * parallax
  * removePreloader
  * mouseScroll
  * resultCurrency
  * flatretinaLogo
*/

;(function($) {

   'use strict'

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 767px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('.mainnav').attr('class', 'mainnav-mobi').hide();
                    var hasChildMenu = $('.mainnav-mobi').find('li:has(ul)');

                    $('#header').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                    $('.mainav-mobi').css('color', '#fff');
                } else {
                    var $desktopMenu = $('.mainnav-mobi').attr('class', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.submenu').removeAttr('style');
                    $('#header').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();
                }
            }
        });

        $('.btn-menu').on('click', function() {         
            $('.mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '.mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    };

   var headerFixed = function() {
        if ( $('body').hasClass('header_sticky') ) {
            var nav = $('#header');

            if ( nav.size() !== 0 ) {
                var offsetTop = $('#header').offset().top,
                    headerHeight = $('#header').height(),
                    injectSpace = $('<div />', { height: headerHeight }).insertAfter(nav);   
                    injectSpace.hide();                 

                $(window).on('load scroll', function(){
                    if ( $(window).scrollTop() > offsetTop ) {
                        if ( $('#header').hasClass('header-classic') ) {
                                                    }
                        $('#header').addClass('downscrolled');  
                        $('.logo').attr('src','./images/logo2.png');   
                        $('.logo-mobi').attr('src', './images/logo2.png');                 
                    } else {
                        $('#header').removeClass('header-small downscrolled');
                        injectSpace.hide();
                        $('.logo').attr('src','./images/logo.png');
                        $('.logo-mobi').attr('src', './images/logo3.png');
                    }                    
                })
            }
        }
    };

    var topSearch = function () {
        $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID !== 'input-search' ) ) {
                $('.top-search').removeClass('show');                
            } 
        });

        $('.search').on('click', function(event){
            event.stopPropagation();
        });

        $('.search-form').on('click', function(event){
            event.stopPropagation();
        });        

        $('.search').on('click', function (event) {
            if(!$('.top-search').hasClass( "show" )) {
                $('.top-search').addClass('show');  
                event.preventDefault();                
            }
                
            else
                $('.top-search').removeClass('show');
                event.preventDefault();

        }); 
        $('.top-search .close').on('click', function(event){
            if($('.top-search').hasClass( "show" )) {
                $('.top-search').removeClass('show');  
                event.preventDefault();                
            }
        });        
  
    };

    var ajaxContactForm = function() {  
        $('#contactform').each(function() {
            $(this).validate({
                submitHandler: function( form ) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url:  $form.attr('action'),
                        data: str,
                        beforeSend: function () {
                            $form.find('.form-submit').append(loading);
                        },
                        success: function( msg ) {
                            var result, cls;                            
                            if ( msg === 'Success' ) {result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )'; cls = 'msg-success'; } else {result = 'Error sending email.'; cls = 'msg-error'; } $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text' : result
                                }).append(
                                    $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function (xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                    });
                }
            });
        }); // each contactform
    };   

    var alertBox = function() {
        $(document).on('click', '.close', function(e) {
            $(this).closest('.flat-alert').remove();
            e.preventDefault();
        })     
    }; 

    var flatClient = function() {
        $('.flat-row').each(function() {            
            if ( $().owlCarousel ) {
                $(this).find('.flat-client').owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: $('.flat-client').data('nav'),
                    dots: $('.flat-client').data('dots'),                     
                    autoplay: $('.flat-client').data('auto'), 
                    autoplayTimeout: 1000,                   
                    responsive:{
                        0:{
                            items: 1
                        },
                        320: {
                            items: 1
                        },
                        480:{
                            items: 2
                        },
                        767:{
                            items: 3
                        },
                        991:{
                            items: 3
                        },
                        1200: {
                            items: $('.flat-client').data('item')
                        }
                    }
                });
            }
        });
    };

    var widgetTestimonial = function() {
        $('.widget').each(function() {            
            if ( $().owlCarousel ) {
                $(this).find('.testimonials-item').owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: $('.testimonials-item').data('nav'),
                    dots: $('.testimonials-item').data('dots'),                     
                    autoplay: $('.testimonials-item').data('auto'), 
                    autoplayTimeout: 1000,                   
                    responsive:{
                        0:{
                            items: 1
                        },
                        320: {
                            items: 1
                        },
                        480:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 1
                        },
                        1200: {
                            items: $('.testimonials-item').data('item')
                        }
                    }
                });
            }
        });
    };

    var flatTestimonial = function() {
        $('.flat-row').each(function() {            
            if ( $().owlCarousel ) {
                $(this).find('.flat-testimonials').owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: $('.flat-testimonials').data('nav'),
                    dots: $('.flat-testimonials').data('dots'),                     
                    autoplay: $('.flat-testimonials').data('auto'), 
                    autoplayTimeout: 5000,                   
                    responsive:{
                        0:{
                            items: 1
                        },
                        320: {
                            items: 1
                        },
                        480:{
                            items: 1
                        },
                        767:{
                            items: 1
                        },
                        991:{
                            items: 1
                        },
                        1200: {
                            items: $('.flat-testimonials').data('item')
                        }
                    }
                });
            }
        });
    };

    var flatCurrency = function() {
        $('.flat-row').each(function() {            
            if ( $().owlCarousel ) {
                $(this).find('.owl-currency').owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: $('.owl-currency').data('nav'),
                    dots: $('.owl-currency').data('dots'),                     
                    autoplay: $('.owl-currency').data('auto'), 
                    autoplayTimeout: 5000,                   
                    responsive:{
                        0:{
                            items: 1
                        },
                        320: {
                            items: 1
                        },
                        480:{
                            items: 1
                        },
                        767:{
                            items: 2
                        },
                        991:{
                            items: 3
                        },
                        1200: {
                            items: $('.owl-currency').data('item')
                        }
                    }
                });
            }
        });
    };

    var blogCarousel = function() {
        $('.blog-carousel-wrap').each(function() {            
            if ( $().owlCarousel ) {
                $(this).find('.blog-carousel').owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: $('.blog-carousel').data('nav'),
                    dots: $('.blog-carousel').data('dots'),                     
                    autoplay: $('.blog-carousel').data('auto'), 
                    autoplayTimeout: 5000,                   
                    responsive:{
                        0:{
                            items: 1
                        },
                        320: {
                            items: 1
                        },
                        480:{
                            items: 1
                        },
                        767:{
                            items: 2
                        },
                        991:{
                            items: 3
                        },
                        1200: {
                            items: $('.blog-carousel').data('item')
                        }
                    }
                });
            }
        });
    };


    var flatAccordion = function() {
        var args = {duration: 600};
        $('.flat-toggle .toggle-title.active').siblings('.toggle-content').show();

        $('.flat-toggle.enable .toggle-title').on('click', function() {
            $(this).closest('.flat-toggle').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        }); // toggle 

        $('.flat-accordion .toggle-title').on('click', function () {
            if( !$(this).is('.active') ) {
                $(this).closest('.flat-accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).delay(3000).animate('easeInOutExpo').toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).delay(3000).animate('easeInOutExpo').toggleClass('active');
                $(this).next().slideToggle(args);
            }     
        }); // accordion
    }; 

    var flatTabs = function() {
        $('.flat-tabs').each(function() {
            $(this).children('.content-tab').children().hide();
            $(this).children('.content-tab').children().first().show();
            $(this).find('.menu-tab').children('li').on('click', function(e) {  
                var liActive = $(this).index(),
                    contentActive = $(this).siblings().removeClass('active').parents('.flat-tabs').children('.content-tab').children().eq(liActive);

                contentActive.addClass('active').animate('easeInQuad').fadeIn('slow');
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.flat-tabs').children('.content-tab').children().eq(liActive).siblings().hide();
                e.preventDefault();
            });
        });
    };


    var flatCounter = function() {       
        $('.flat-counter').on('on-appear', function() {             
            $(this).find('.numb-count').each(function() { 
                var to = parseInt( ($(this).attr('data-to')),10 ), speed = parseInt( ($(this).attr('data-speed')),10 );
                if ( $().countTo ) {
                    $(this).countTo({
                        to: to,
                        speed: speed
                    });
                }
            });
       });
    }; 

    var detectViewport = function() {
        $('[data-waypoint-active="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
            }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            });
        });
    };  

    var goTop = function() {
      $(window).scroll(function() {
          if ( $(this).scrollTop() > 800 ) {
              $('.go-top').addClass('show');
          } else {
              $('.go-top').removeClass('show');
          }
      }); 

      $('.go-top').on('click', function() {            
          $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
          return false;
      });
    };

    var parallax = function(){
      if( $().parallax && isMobile.any() == null ){
        $('.parallax1').parallax("50%", 0.8);
        $('.parallax2').parallax("50%", 0.6);
        $('.parallax3').parallax("50%", 0.8);
        $('.parallax4').parallax("50%", 0.8);
      }
    };

    var removePreloader = function() {        
         $(window).on("load", function () {
            $(".loader").delay(1000).fadeOut();
            $(".loading-overlay").delay(1200).fadeOut('slow',function(){
            $(this).remove();
          }); 
      });
    };

    var mouseScroll = function(){
        $("html, body").easeScroll({
            animationTime: 2000
        });
      
    };
    
    var resultCurrency = function() {
        $('.form-convert').each(function(){
            number_currency.oninput = function() {
                $('#result_currency').css('display','block');
                var x = document.getElementById("number_currency").value;
                var y = document.getElementById("currency_price").value;
                result_currency.innerHTML = number_currency.value * y;
              };
            currency_price.onchange = function() {
                $('#result_currency').css('display','block');
                var x = document.getElementById("number_currency").value;
                var y = document.getElementById("currency_price").value;
                result_currency.innerHTML = number_currency.value * y;
            }
        });
    };

    var flatretinaLogo = function() {
      var retina = window.devicePixelRatio > 1 ? true : false;
        if(retina) {
            $('.header .logo').find('img').attr({src:'./images/logo.png',width:'183',height:'50'});   
        }
    };

    var handleScroll = function() {
        $('.nav-scroll').localScroll(); 
    };


    // (function(b,i,t,C,O,I,N) {
    //     window.addEventListener('load',function() {
    //       if(b.getElementById(C))return;
    //       I=b.createElement(i),N=b.getElementsByTagName(i)[0];
    //       I.src=t;I.id=C;N.parentNode.insertBefore(I, N);
    //     },false)
    //   })(document,'script','https://widgets.bitcoin.com/widget.js','btcwdgt');

   	// Dom Ready
	$(function() {
        responsiveMenu();
        headerFixed();
        flatClient();
        ajaxContactForm();
        alertBox();
        widgetTestimonial();
        flatTestimonial();
        flatAccordion();
        blogCarousel();
        flatTabs();
        flatCounter();
        detectViewport();
        goTop();
        parallax();
        removePreloader();
        mouseScroll(); 
        resultCurrency();
        flatretinaLogo();
        handleScroll();
   	});
})(jQuery);