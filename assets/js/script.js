$(document).ready(function(o){

	/*================
	 Header
	==================*/

	$('.menu-toggle').click(function(){
		$(this).toggleClass('show');
		$('.header-nav').slideToggle();
		$('.nav-menu').slideToggle();
	});

	// Sticky Menu

	var headers1 = $('.site-header');
	$(window).on('scroll', function () {

		if ($(window).scrollTop() > 450) {
			headers1.addClass('sticky');
		} else {
			headers1.removeClass('sticky');
		}

	});

	if ($(window).width() < 1200){
		$('.sub-menu-toggle').click(function(){
			$(this).siblings('.sub-menu').slideToggle();
		});
	};

  // Team 2

  $(".team-socail-icon").hide();
    $('.team-icon').click(function(){
        $(this).siblings(".team-socail-icon").slideToggle("slow");
  });

	/*================
	 Back to Top
	==================*/

	if($('.prgoress_scrollup path').length){
	    var progressPath = document.querySelector('.prgoress_scrollup path');
	    var pathLength = progressPath.getTotalLength();
	    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
	    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	    progressPath.style.strokeDashoffset = pathLength;
	    progressPath.getBoundingClientRect();
	    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
	    var updateProgress = function () {
	      var scroll = $(window).scrollTop();
	      var height = $(document).height() - $(window).height();
	      var progress = pathLength - (scroll * pathLength / height);
	      progressPath.style.strokeDashoffset = progress;
	    };
	    updateProgress();
	    $(window).on('scroll', updateProgress);
	    var offset = 250;
	    var duration = 550;
	    jQuery(window).on('scroll', function () {
	      if (jQuery(this).scrollTop() > offset) {
	        jQuery('.prgoress_scrollup').addClass('active-progress');
	      } else {
	        jQuery('.prgoress_scrollup').removeClass('active-progress');
	      }
	    });
	    jQuery('.prgoress_scrollup').on('click', function (event) {
	      event.preventDefault();
	      jQuery('html, body').animate({ scrollTop: 0 }, duration);
	      return false;
	    });
	}

  /*================
	 Counter
	==================*/

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

	/*================
	 Pricing Plan
	==================*/

	$('.pricing-table').hover(function(){
		$('.pricing-table').removeClass("active");
		$(this).toggleClass('active');
	});

	/*================
	 Brand Section
	==================*/

	$('.brand-carousel').owlCarousel({
		items: 4,
		loop: true,
		autoplay: true,
		dots: false,
		lazyLoad:true,
		autoplayHoverPause:true,
		smartSpeed: 1000,
		navText: ["<i class='fal fa-angle-left'></i>", "<i class='fal fa-angle-right'></i>"],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 3,
			},
			1920: {
				items: 4,
			}
		}
	});

	/*================
	 Portfolio Section
	==================*/

	$('.portfolio-carousel').owlCarousel({
		items: 2,
		loop: true,
		autoplay: false,
		autoplayTimeout: 8000,
		margin: 30,
		center: true,
		dots: true,
		dotsEach: true,
		lazyLoad:true,
		autoplayHoverPause:true,
		smartSpeed: 1000,
		nav:false,
		navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 1,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 2,
			},
			1920: {
				items: 2,
			}
		}
	});

	// style two
		
	$('.portfolio-carousel-two').owlCarousel({
		items: 2,
		loop: true,
		autoplay: true,
		margin: 30,
		center: false,
		stagePadding: 306.5,
		dots: false,
		dotsEach: true,
		lazyLoad: true,
		smartSpeed: 1000,
		nav: true,
		navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: false,
				stagePadding: 0,
			},
			768: {
				nav: false,
				items: 2,
				stagePadding: 0,
			},
			992: {
				nav: false,
				items: 2,
				stagePadding: 0,
			},
			1200: {
				items: 3,
				nav: false,
				stagePadding: 0,
			},
			1920: {
				items: 3,
				nav:false,
			}
		}
	});

	/*================
	 Team
	==================*/

	$('.team-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		autoplayTimeout: 8000,
		dots: false,
		margin: 30,
		dotsEach: true,
		lazyLoad:true,
		autoplayHoverPause:true,
		smartSpeed: 1000,
		nav:true,
		navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			768: {
				nav: false,
				items: 2,
			},
			992: {
				nav: false,
				items: 2,
			},
			1200: {
				items: 3,
				nav: true,
			},
			1920: {
				items: 3,
				nav:true,
			}
		}
	});

	/*================
	 Team
	==================*/

	$('.team-two-carousel').owlCarousel({
		items: 1,
		loop: true,
		autoplay: false,
		autoplayTimeout: 8000,
		dots: false,
		dotsEach: true,
		lazyLoad:true,
		autoplayHoverPause:true,
		smartSpeed: 1000,
		nav:true,
		navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			768: {
				nav: false,
				items: 2,
			},
			992: {
				nav: false,
				items: 2,
			},
			1200: {
				items: 4,
				nav: true,
			},
			1920: {
				items: 4,
				nav:true,
			}
		}
	});
	/*================
	 Testimonial
	==================*/

	$('.testimonial-1-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		margin: 30,
		dots: false,
		dotsEach: true,
		lazyLoad:true,
		autoplayHoverPause:true,
		smartSpeed: 1000,
		nav: false,
		navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			768: {
				items: 2,
				nav: false,
			},
			992: {
				items: 2,
				nav: false,
			},
			1920: {
				items: 3,
				nav:false,
			}
		}
	});

	$('.testimonial-carousel').owlCarousel({
		loop: true,
		autoplay: false,
		autoplayTimeout: 8000,
		margin: 30,
		dots: true,
		dotsEach: true,
		lazyLoad:true,
		autoplayHoverPause:true,
		smartSpeed: 1000,
		nav:false,
		navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			768: {
				items: 2,
				nav: false,
			},
			992: {
				items: 2,
				nav: false,
			},
			1920: {
				items: 3,
				nav:false,
			}
		}
	});
	
	
	/*================
	 Accordion
	==================*/

	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

	$('.accordion a').click(function(j) {
		var dropDown = $(this).closest('li').find('p');

		$(this).closest('.accordion').find('p').not(dropDown).slideUp();

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.accordion').find('a.active').removeClass('active');
			$(this).addClass('active');
		}

		dropDown.stop(false, true).slideToggle();

		j.preventDefault();
	});

	// Venubox

  $('.venobox').venobox({
    numeratio: true,
    infinigall: true
  });

	/*================
	 About Tab
	==================*/

	$('#tabs li a:not(:first)').addClass('inactive');
	$('.tab-content').hide();
	$('.tab-content:first').show();

	$('#tabs li a').click(function(){
		var t = $(this).attr('id');
		if($(this).hasClass('inactive')){
			$('#tabs li a').addClass('inactive');           
			$(this).removeClass('inactive');

			$('.tab-content').hide();
			$('#'+ t + 'C').fadeIn('slow');
		}
	});

	/*================
	 Search Popup
	==================*/

	if($('.search-icon').length) {
		$('.search-icon').on('click', function() {
			$('body').addClass('search-active');
		});
		$('.search-close').on('click', function() {
			$('body').removeClass('search-active');
		});
	}

	/*================
	 WOW JS
	==================*/

	new WOW().init();

	/*================
	 Sidebar
	==================*/

	0 < o(".offset-side-bar").length &&
	o(".offset-side-bar").on("click", function (e) {
		e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive");
	}),
	0 < o(".close-side-widget").length &&
	o(".close-side-widget").on("click", function (e) {
		e.preventDefault(), o(".cart-group").removeClass("isActive");
	}),
	0 < o(".navSidebar-button").length &&
	o(".navSidebar-button").on("click", function (e) {
		e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
	}),
	0 < o(".close-side-widget").length &&
	o(".close-side-widget").on("click", function (e) {
		e.preventDefault(), o(".info-group").removeClass("isActive");
	}),
	o("body").on("click", function (e) {
		o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
	}),
	o(".sidebar-widget").on("click", function (e) {
		e.stopPropagation();
	}),
	0 < o(".xs-modal-popup").length &&
	o(".xs-modal-popup").magnificPopup({
		type: "inline",
		fixedContentPos: !2,
		fixedBgPos: !0,
		overflowY: "auto",
		closeBtnInside: !2,
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
			},
		},
	});

});

	/*================
	 Preloader
	==================*/

	window.onload = function(){
		$("#preloader").hide();
	}