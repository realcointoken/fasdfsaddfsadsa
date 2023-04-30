(function($) {
    'use strict';

//Toggle Nav for mobile  menu
$('.menu-toggle').click(function(){
    $('.menu-wrapper').toggleClass('active-nav');
});
//Toggle Nav for mobile menu
$('.open_bar').click(function(){
    $('nav').addClass('active-nav');
    $('.menu-toggle').addClass('closee');
});
$('.close_bar').click(function(){
    $('nav').removeClass('active-nav');
    $('.menu-toggle').removeClass('closee');
});

$(document).ready(function(){
    $('.venobox').venobox(); 
});


// Loder  
    $(function () {
      $('body').addClass('loaded');
    });

	 // Slider Active//
     $('.banner_list').owlCarousel({
        loop: true,
        autoplay:true,
        smartSpeed:1500,
        autoplayTimeout:5000,
        dots:false,
        nav: true,
        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1000: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });
     
         // service Active//
         $('.service_list').owlCarousel({
            loop: true,
            autoplay:true,
            smartSpeed:1500,
            autoplayTimeout:5000,
            dots:false,
            nav: true,
            navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1000: {
                    items: 2
                },
                1365: {
                    items: 3
                },
                1500: {
                    items: 3
                },
                1920: {
                    items: 4
                }
            }
        });
         
			   // testimonial //
			   $('.testimonial_list').owlCarousel({
				loop: true,
				autoplay:true,
				smartSpeed:1500,
				autoplayTimeout:5000,
				dots:false,
				nav: true,
				navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 1
					},
					992: {
						items: 1
					},
					1000: {
						items: 1
					},
					1500: {
						items: 1
					},
					1920: {
						items: 1
					}
				}
			});

                     // case //
                     $('.brand_list').owlCarousel({
                        loop: true,
                        autoplay:true,
                        smartSpeed:1500,
                        autoplayTimeout:5000,
                        dots:false,
                        nav: false,
                        navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
                        responsive: {
                            0: {
                                items: 1
                            },
                            768: {
                                items: 3
                            },
                            992: {
                                items: 3
                            },
                            1000: {
                                items: 3
                            },
                            1365: {
                                items: 4
                            },
                            1500: {
                                items: 5
                            },
                            1920: {
                                items: 6            }
                            }
                        });
                     
                         //faq //
                         $('.faq_list').owlCarousel({
                            loop: true,
                            autoplay:true,
                            smartSpeed:1500,
                            autoplayTimeout:5000,
                            dots:false,
                            nav: true,
                            navText: ["<i class='fas fa-angle-left''></i>", "<i class='fas fa-angle-right''></i>"],
                            responsive: {
                                0: {
                                    items: 1
                                },
                                768: {
                                    items: 1
                                },
                                992: {
                                    items: 1
                                },
                                1000: {
                                    items: 1
                                },
                                1365: {
                                    items: 1
                                },
                                1500: {
                                    items: 1
                                },
                                1920: {
                                    items: 1            }
                                }
                            });
				   // counterUp
				   $('.counter').counterUp({
					delay: 10,
					time: 1000
				});
				   
				// sticky
				var wind = $(window);
				var sticky = $('#sticky-header');
				wind.on('scroll', function () {
					var scroll = wind.scrollTop();
					if (scroll < 100) {
						sticky.removeClass('sticky-nav');
					} else {
						sticky.addClass('sticky-nav');
					}
				});


				 //Header Search
				 if($('.search-box-outer').length) {
					$('.search-box-outer').on('click', function() {
						$('body').addClass('search-active');
					});
					$('.close-search').on('click', function() {
						$('body').removeClass('search-active');
					});
				}

				 //scrollup animate

				 $("#to-top").click(function(){
					$('html , body').animate({scrollTop :0},800)
				});

				//venobox
				$('.venobox_custom').venobox({
					framewidth : '400px',                            // default: ''
					frameheight: '300px',                            // default: ''
					border     : '10px',                             // default: '0'
					bgcolor    : '#5dff5e',                          // default: '#fff'
					titleattr  : 'data-title',                       // default: 'title'
					numeratio  : true,                               // default: false
					infinigall : true,                               // default: false
					share      : ['facebook', 'twitter', 'download'] // default: []
				});
          // color section aila
        $('.themes-btn').click(function () {

          $('.wrapper, .themes-btn').toggleClass('active');

        });
        var bodycolor;
        var titlecolor;
        var textcolor;
        var btna;
        var span;

        $('.body-color li').on('click', function() {

          bodycolor = $(this).data('color');
          $('body').css('background', bodycolor);
          localStorage.setItem('background', bodycolor);
        });
        bodycolor = localStorage.getItem('background');
        $('body').css('background', bodycolor);

        $('.h2-color li').on('click', function() {

          titlecolor = $(this).data('color');
          $('h2').css('color', titlecolor);
          localStorage.setItem('h2-color', titlecolor);
        });
        titlecolor = localStorage.getItem('h2-color');
        $('h2').css('color', titlecolor);
        
        $('.p-color li').on('click', function() {

          textcolor = $(this).data('color');
          $('p').css('color', textcolor);
          localStorage.setItem('p-color', textcolor);
      });
        textcolor = localStorage.getItem('p-color');
        $('p').css('color', textcolor);
        
        $('.a-color li').on('click', function() {

          btna = $(this).data('color');
          $('a').css('color', btna);
          localStorage.setItem('a-color', btna);
      });
        btna = localStorage.getItem('a-color');
        $('a').css('color', btna);

        
        $('.span-color li').on('click', function() {

          span = $(this).data('color');
          $('span').css('color', span);
          localStorage.setItem('span-color',span);
      });
        span = localStorage.getItem('span-color');
        $('span').css('color', span);
        // reset color//

        $('.reset').on('click', function(){
            $('body').css('background', '');
            localStorage.setItem('background', '');
            $('h2').css('color', '');
            localStorage.setItem('h2-color', '');
          $('p').css('color', '');
          localStorage.setItem('p-color', '');
          $('a').css('color', '');
          localStorage.setItem('a-color', '');
          $('span').css('color', '');
          localStorage.setItem('span-color','');

        })


            $(function(){
               $("#tabs").tabs();
           });
        // to wow Jquery
        new WOW().init();

           // to top Jquery
           $(window).scroll(function(){
            if($(this).scrollTop() > 40){
                $('#to-top').fadeIn();
            } else{
                $('#to-top').fadeOut();
            }
        })
           

	
})(jQuery);

 