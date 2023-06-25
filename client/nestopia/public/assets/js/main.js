/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Common Js
04. Menu Controls JS
05. Offcanvas Js
06. Search Js
07. cartmini Js
08. filter
09. Body overlay Js
10. Sticky Header Js
11. Theme Settings Js
12. Nice Select Js
13. Smooth Scroll Js
14. Slider Activation Area Start
15. Masonary Js
16. Wow Js
17. Counter Js
18. InHover Active Js
19. Line Animation Js
20. Video Play Js
21. Password Toggle Js
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});



	////////////////////////////////////////////////////
	// 03. Common Js

	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});

	$(".has-img").each(function () {
		var imgSrc = $(this).attr("data-menu-img");
		var img = `<img class="mega-menu-img" src="${imgSrc}" alt="img">`;
		$(this).append(img);

	});


	$('.wp-menu nav > ul > li').slice(-4).addClass('menu-last');


	$('.crn-hamburger-toggle').on('click', function () {
		$('.crn-header-side-menu').slideToggle('crn-header-side-menu');
	});



	if ($('.crn-main-menu-content').length && $('.crn-main-menu-mobile').length) {
		let navContent = document.querySelector(".crn-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".crn-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;


		let arrow = $(".crn-main-menu-mobile .has-dropdown > a");

		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fa-regular fa-angle-right'></i>";

			self.append(function () {
				return arrowBtn;
			});

			self.find("button").on("click", function (e) {
				e.preventDefault();
				let self = $(this);
				self.toggleClass("dropdown-opened");
				self.parent().toggleClass("expanded");
				self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
				self.parent().parent().children(".submenu").slideToggle();


			});

		});
	}


	////////////////////////////////////////////////////
	// 06. Search Js
	$(".search-open-btn").on("click", function () {
		$(".search-area").addClass("search-opened");
		$(".search-overlay").addClass("opened");
	});
	$(".search-close-btn").on("click", function () {
		$(".search-area").removeClass("search-opened");
		$(".search-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 05. Offcanvas Js
	$(".offcanvas-open-btn").on("click", function () {
		$(".offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas-close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 07. cartmini Js
	$(".cartmini-open-btn").on("click", function () {
		$(".cartmini__area").addClass("cartmini-opened");
		$(".body-overlay").addClass("opened");
	});


	$(".cartmini-close-btn").on("click", function () {
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 09. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".crn-search-area").removeClass("opened");
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 10. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 200) {
			$("#header-sticky").removeClass("crn-header-sticky");
		} else {
			$("#header-sticky").addClass("crn-header-sticky");
		}
	});


	if ($('.crn-header-height').length > 0) {
		var headerHeight = document.querySelector(".crn-header-height");

		var setHeaderHeight = headerHeight.offsetHeight;

		$(".crn-header-height").each(function () {
			$(this).css({
				'height': setHeaderHeight + 'px'
			});
		});
	}


	/////// add tag //////
	$('.crn-main-menu ul li a').each(function () {
		$(this).wrapInner("<span></span>");
	});

	////////////////////////////////////////////////////
	// 11. Theme Settings Js

	// settings append in body
	function crn_settings_append($x) {
		var settings = $('body');
		let dark;
		$x == true ? dark = 'd-block' : dark = 'd-none';
		var settings_html = `<div class="crn-theme-settings-area transition-3">
		<div class="crn-theme-wrapper">
		   <div class="crn-theme-header text-center">
			  <h4 class="crn-theme-header-title">Harry Theme Settings</h4>
		   </div>

		   <!-- THEME TOGGLER -->
		   <div class="crn-theme-toggle mb-20 ${dark}">
			  <label class="crn-theme-toggle-main" for="crn-theme-toggler">
				 <span class="crn-theme-toggle-dark active"><i class="fa-light fa-moon"></i> Dark</span>
					<input type="checkbox" id="crn-theme-toggler">
					<i class="crn-theme-toggle-slide"></i>
				 <span class="crn-theme-toggle-light"><i class="fa-light fa-sun-bright"></i> Light</span>
			  </label>
		   </div>

		   <!--  RTL SETTINGS -->
		   <div class="crn-theme-dir mb-20">
			  <label class="crn-theme-dir-main" for="crn-dir-toggler">
				 <span class="crn-theme-dir-rtl"> RTL</span>
					<input type="checkbox" id="crn-dir-toggler">
					<i class="crn-theme-dir-slide"></i>
				 <span class="crn-theme-dir-ltr active"> LTR</span>
			  </label>
		   </div>

		   <!-- COLOR SETTINGS -->
		   <div class="crn-theme-settings">
			  <div class="crn-theme-settings-wrapper">
				 <div class="crn-theme-settings-open">
					<button class="crn-theme-settings-open-btn">
					   <span class="crn-theme-settings-gear">
						  <i class="fa-light fa-gear"></i>
					   </span>
					   <span class="crn-theme-settings-close">
						  <i class="fa-regular fa-xmark"></i>
					   </span>
					</button>
				 </div>
				 <div class="row row-cols-4 gy-2 gx-2">
					<div class="col">
					   <div class="crn-theme-color-item crn-color-active">
						  <button class="crn-theme-color-btn crn-color-settings-btn d-none" data-color-default="#F50963" type="button" data-color="#F50963"></button>
						  <button class="crn-theme-color-btn crn-color-settings-btn" type="button" data-color="#F50963"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="crn-theme-color-item crn-color-active">
						  <button class="crn-theme-color-btn crn-color-settings-btn" type="button" data-color="#008080"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="crn-theme-color-item crn-color-active">
						  <button class="crn-theme-color-btn crn-color-settings-btn" type="button" data-color="#AB6C56"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="crn-theme-color-item crn-color-active">
						  <button class="crn-theme-color-btn crn-color-settings-btn" type="button" data-color="#3661FC"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="crn-theme-color-item crn-color-active">
						  <button class="crn-theme-color-btn crn-color-settings-btn" type="button" data-color="#2CAE76"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="crn-theme-color-item crn-color-active">
						  <button class="crn-theme-color-btn crn-color-settings-btn" type="button" data-color="#FF5A1B"></button>
					   </div>
					</div>
					<div class="col">
                        <div class="crn-theme-color-item crn-color-active">
                           <button class="crn-theme-color-btn crn-color-settings-btn" type="button" data-color="#03041C"></button>
                        </div>
                     </div>
					<div class="col">
					   <div class="crn-theme-color-item crn-color-active">
						  <button class="crn-theme-color-btn crn-color-settings-btn" type="button" data-color="#ED212C"></button>
					   </div>
					</div>
				 </div>
			  </div>
			  <div class="crn-theme-color-input">
				 <h6>Choose Custom Color</h6>
				 <input type="color" id="crn-color-setings-input" value="#F50963">
				 <label id="crn-theme-color-label" for="crn-color-setings-input"></label>
			  </div>
		   </div>
		</div>
	 </div>`;
		settings.append(settings_html);
	}
	// crn_settings_append(true); 
	// if want to enable dark light mode then send "true";

	// settings open btn
	$(".crn-theme-settings-open-btn").on("click", function () {
		$(".crn-theme-settings-area").toggleClass("settings-opened");
	});

	// rtl settings
	function crn_rtl_settings() {

		$('#crn-dir-toggler').on("change", function () {
			toggle_rtl();

		});


		// set toggle theme scheme
		function crn_set_scheme(crn_dir) {
			localStorage.setItem('crn_dir', crn_dir);
			document.documentElement.setAttribute("dir", crn_dir);

			if (crn_dir === 'rtl') {
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap-rtl.css");
			} else {
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap.css");
			}
		}

		// toogle theme scheme
		function toggle_rtl() {
			if (localStorage.getItem('crn_dir') === 'rtl') {
				crn_set_scheme('ltr');
				var list = $("[href='assets/css/bootstrap-rtl.css']");
				$(list).attr("href", "assets/css/bootstrap.css");
			} else {
				crn_set_scheme('rtl');
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap-rtl.css");
			}
		}

		// set the first theme scheme
		function crn_init_dir() {
			if (localStorage.getItem('crn_dir') === 'rtl') {
				crn_set_scheme('rtl');
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap-rtl.css");
				document.getElementById('crn-dir-toggler').checked = true;
			} else {
				crn_set_scheme('ltr');
				document.getElementById('crn-dir-toggler').checked = false;
				var list = $("[href='assets/css/bootstrap.css']");
				$(list).attr("href", "assets/css/bootstrap.css");
			}
		}
		crn_init_dir();
	}
	if ($("#crn-dir-toggler").length > 0) {
		crn_rtl_settings();
	}

	// dark light mode toggler
	function crn_theme_toggler() {

		$('#crn-theme-toggler').on("change", function () {
			toggleTheme();

		});


		// set toggle theme scheme
		function crn_set_scheme(crn_theme) {
			localStorage.setItem('crn_theme_scheme', crn_theme);
			document.documentElement.setAttribute("crn-theme", crn_theme);
		}

		// toogle theme scheme
		function toggleTheme() {
			if (localStorage.getItem('crn_theme_scheme') === 'crn-theme-dark') {
				crn_set_scheme('crn-theme-light');
			} else {
				crn_set_scheme('crn-theme-dark');
			}
		}

		// set the first theme scheme
		function crn_init_theme() {
			if (localStorage.getItem('crn_theme_scheme') === 'crn-theme-dark') {
				crn_set_scheme('crn-theme-dark');
				document.getElementById('crn-theme-toggler').checked = true;
			} else {
				crn_set_scheme('crn-theme-light');
				document.getElementById('crn-theme-toggler').checked = false;
			}
		}
		crn_init_theme();
	}
	if ($("#crn-theme-toggler").length > 0) {
		crn_theme_toggler();
	}


	// color settings
	function crn_color_settings() {

		// set color scheme
		function crn_set_color(crn_color_scheme) {
			localStorage.setItem('crn_color_scheme', crn_color_scheme);
			document.querySelector(':root').style.setProperty('--crn-theme-1', crn_color_scheme);
			document.getElementById("crn-color-setings-input").value = crn_color_scheme;
			document.getElementById("crn-theme-color-label").style.backgroundColor = crn_color_scheme;
		}

		// set color
		function crn_set_input() {
			var color = localStorage.getItem('crn_color_scheme');
			document.getElementById("crn-color-setings-input").value = color;
			document.getElementById("crn-theme-color-label").style.backgroundColor = color;


		}
		crn_set_input();

		function crn_init_color() {
			var defaultColor = $(".crn-color-settings-btn").attr('data-color-default');
			var setColor = localStorage.getItem('crn_color_scheme');

			if (setColor != null) {

			} else {
				setColor = defaultColor;
			}

			if (defaultColor !== setColor) {
				document.querySelector(':root').style.setProperty('--crn-theme-1', setColor);
				document.getElementById("crn-color-setings-input").value = setColor;
				document.getElementById("crn-theme-color-label").style.backgroundColor = setColor;
				crn_set_color(setColor);
			} else {
				document.querySelector(':root').style.setProperty('--crn-theme-1', defaultColor);
				document.getElementById("crn-color-setings-input").value = defaultColor;
				document.getElementById("crn-theme-color-label").style.backgroundColor = defaultColor;
				crn_set_color(defaultColor);
			}
		}
		crn_init_color();


		let themeButtons = document.querySelectorAll('.crn-color-settings-btn');

		themeButtons.forEach(color => {
			color.addEventListener('click', () => {
				let datacolor = color.getAttribute('data-color');
				document.querySelector(':root').style.setProperty('--crn-theme-1', datacolor);
				document.getElementById("crn-theme-color-label").style.backgroundColor = datacolor;
				crn_set_color(datacolor);
			});
		});



		const colorInput = document.querySelector('#crn-color-setings-input');
		const colorVariable = '--crn-theme-1';


		colorInput.addEventListener('change', function (e) {
			var clr = e.target.value;
			document.documentElement.style.setProperty(colorVariable, clr);
			crn_set_color(clr);
			crn_set_check(clr);
		});


		function crn_set_check(clr) {
			const arr = Array.from(document.querySelectorAll('[data-color]'));

			var a = localStorage.getItem('crn_color_scheme');

			let test = arr.map(color => {
				let datacolor = color.getAttribute('data-color');

				return datacolor;
			}).filter(color => color == a);

			var arrLength = test.length;

			if (arrLength == 0) {
				$('.crn-color-active').removeClass('active');
			} else {
				$('.crn-color-active').addClass('active');
			}
		}

		function crn_check_color() {
			var a = localStorage.getItem('crn_color_scheme');

			var list = $(`[data-color="${a}"]`);

			list.parent().addClass('active').parent().siblings().find('.crn-color-active').removeClass('active')
		}
		crn_check_color();

		$('.crn-color-active').on('click', function () {
			$(this).addClass('active').parent().siblings().find('.crn-color-active').removeClass('active');
		});

	}
	if (($(".crn-color-settings-btn").length > 0) && ($("#crn-color-setings-input").length > 0) && ($("#crn-theme-color-label").length > 0)) {
		crn_color_settings();
	}



	////////////////////////////////////////////////////
	// 12. Nice Select Js
	$('select').niceSelect();
	$('.crn-header-search-category select').niceSelect();


	////////////////////////////////////////////////////
	// 13. Smooth Scroll Js
	function smoothScroll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothScroll();

	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();

	var crn_rtl = localStorage.getItem('crn_dir');
	let rtl_setting = crn_rtl == 'rtl' ? true : false;


	////////////////////////////////////////////////////
	// Jquery Appear raidal
	if (typeof ($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
			var $this = $(this),
				knobVal = $this.attr('data-rel');

			$this.knob({
				'draw': function () {
					$(this.i).val(this.cv + '%')
				}
			});

			$this.appear(function () {
				$({
					value: 0
				}).animate({
					value: knobVal
				}, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.val(Math.ceil(this.value)).trigger('change');
					}
				});
			}, {
				accX: 0,
				accY: -150
			});
		});
	}



	// home 1
	var slider = new Swiper('.crn-project-active', {
		slidesPerView: 4,
		spaceBetween: 25,
		loop: true,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});



	//house listing
	if ($('.crn-house-active').length > 0) {
		const slider = new Swiper('.crn-house-active', {
			// Optional parameters
			loop: true,
			slidesPerView: 3,
			spaceBetween: 30,
			grabCursor: true,
			breakpoints: {
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},

			// scrollbar
			scrollbar: {
				el: ".crn-scrollbar",
				clickable: true,
				draggable: true,
			},
		});
	}


	//package listing
	if ($('.crn-package-active').length > 0) {
		const slider = new Swiper('.crn-package-active', {
			// Optional parameters
			loop: true,
			slidesPerView: 3,
			spaceBetween: 30,
			grabCursor: true,
			breakpoints: {
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},

			// scrollbar
			scrollbar: {
				el: ".crn-scrollbar-2",
				clickable: true,
				draggable: true,
			},
		});
	}



	//project listing
	if ($('.crn-project-active').length > 0) {
		const slider = new Swiper('.crn-project-active', {
			// Optional parameters
			loop: true,
			slidesPerView: 3,
			spaceBetween: 30,
			grabCursor: true,
			breakpoints: {
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},

			// scrollbar
			scrollbar: {
				el: ".crn-scrollbar-3",
				clickable: true,
				draggable: true,
			},
		});
	}



	//testimonial listing
	if ($('.crn-testimonial-active').length > 0) {
		const slider = new Swiper('.crn-testimonial-active', {
			// Optional parameters
			loop: true,
			slidesPerView: 3,
			spaceBetween: 30,
			centeredSlides: true,
			grabCursor: true,
			breakpoints: {
				'1200': {
					slidesPerView: 3,
				},
				'992': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},

			// scrollbar
			scrollbar: {
				el: ".crn-scrollbar-3",
				clickable: true,
				draggable: true,
			},
		});
	}



	// team active
	if ($('.crn-team-active').length > 0) {
		var slider = new Swiper('.crn-team-active', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			breakpoints: {
				'1700': {
					slidesPerView: 3,
				},
				'1400': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'767': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
			// Navigation arrows
			navigation: {
				nextEl: ".team-button-next-1",
				prevEl: ".team-button-prev-1",
			},
		});
	}


	// blog-2 active
	if ($('.crn-blog-2-active').length > 0) {
		var slider = new Swiper('.crn-blog-2-active', {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
			breakpoints: {
				'1700': {
					slidesPerView: 3,
				},
				'1400': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'767': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
			// Navigation arrows
			navigation: {
				nextEl: ".blog-button-next-1",
				prevEl: ".blog-button-prev-1",
			},
		});
	}




	////////////////////////////////////////////////////
	// 15. Masonary Js
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 1,
			}
		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	$('.popup-image-footer').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 5.0,
			scalarY: 5.0,
		});
	};

	////////////////////////////////////////////////////
	// 16. Wow Js
	new WOW().init();

	function crn_ecommerce() {
		$('.crn-cart-minus').on('click', function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});

		$('.crn-cart-plus').on('click', function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});


		$('.crn-checkout-payment-item label').on('click', function () {
			$(this).siblings('.crn-checkout-payment-desc').slideToggle(400);

		});


		$('.crn-color-variation-btn').on('click', function () {
			$(this).addClass('active').siblings().removeClass('active');
		});


		$('.crn-size-variation-btn').on('click', function () {
			$(this).addClass('active').siblings().removeClass('active');
		});

		////////////////////////////////////////////////////
		// 17. Show Login Toggle Js
		$('.crn-checkout-login-form-reveal-btn').on('click', function () {
			$('#tpReturnCustomerLoginForm').slideToggle(400);
		});

		////////////////////////////////////////////////////
		// 18. Show Coupon Toggle Js
		$('.crn-checkout-coupon-form-reveal-btn').on('click', function () {
			$('#tpCheckoutCouponForm').slideToggle(400);
		});

		////////////////////////////////////////////////////
		// 19. Create An Account Toggle Js
		$('#cbox').on('click', function () {
			$('#cbox_info').slideToggle(900);
		});

		////////////////////////////////////////////////////
		// 20. Shipping Box Toggle Js
		$('#ship-box').on('click', function () {
			$('#ship-box-info').slideToggle(1000);
		});
	}
	crn_ecommerce();


	// range controller
	$("#slider-range").slider({
		range: true,
		min: 0,
		max: 25000,
		values: [500, 25000],
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	$("#amount").val("$" + $("#slider-range").slider("values", 0) +
		" - $" + $("#slider-range").slider("values", 1));

	$("#slider-range-offcanvas").slider({
		range: true,
		min: 500,
		max: 25000,
		values: [500, 25000],
		slide: function (event, ui) {
			$("#amount-offcanvas").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	$("#amount-offcanvas").val("$" + $("#slider-range-offcanvas").slider("values", 0) + " - $" + $("#slider-range-offcanvas").slider("values", 1));


	// range 2 controller
	$("#slider-range-2").slider({
		range: true,
		min: 400,
		max: 1000,
		values: [400, 1000],
		slide: function (event, ui) {
			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		}
	});
	$("#amount").val("$" + $("#slider-range-2").slider("values", 0) +
		" - $" + $("#slider-range-2").slider("values", 1));

	$("#slider-range-offcanvas-2").slider({
		range: true,
		min: 400,
		max: 1000,
		values: [400, 1000],
		slide: function (event, ui) {
			$("#amount-offcanvas-2").val(ui.values[0] + " sqft" + - ui.values[1] + " sqft");
		}
	});
	$("#amount-offcanvas-2").val($("#slider-range-offcanvas-2").slider("values", 0) + " sqft -" + $("#slider-range-offcanvas-2").slider("values", 1) + " sqft");


	// range 3 controller
	$("#slider-range-offcanvas-3").slider({
		range: true,
		min: 2,
		max: 7,
		values: [2, 7],
		slide: function (event, ui) {
			$("#amount-offcanvas-3").val("" + ui.values[0] + " - " + ui.values[1]);
		}
	});
	$("#amount-offcanvas-3").val("" + $("#slider-range-offcanvas-3").slider("values", 0) + " - " + $("#slider-range-offcanvas-3").slider("values", 1));

	// range 4 controller
	$("#slider-range-offcanvas-4").slider({
		range: true,
		min: 1,
		max: 5,
		values: [1, 5],
		slide: function (event, ui) {
			$("#amount-offcanvas-4").val("" + ui.values[0] + " - " + ui.values[1]);
		}
	});
	$("#amount-offcanvas-4").val("" + $("#slider-range-offcanvas-4").slider("values", 0) + " - " + $("#slider-range-offcanvas-4").slider("values", 1));

	// range 5 controller
	$("#slider-range-offcanvas-5").slider({
		range: true,
		min: 1100,
		max: 2500,
		values: [100, 2500],
		slide: function (event, ui) {
			$("#amount-offcanvas-5").val(ui.values[0] + " sqft" + - ui.values[1] + " sqft");
		}
	});
	$("#amount-offcanvas-5").val($("#slider-range-offcanvas-5").slider("values", 0) + " sqft -" + $("#slider-range-offcanvas-5").slider("values", 1) + " sqft");





	////////////////////////////////////////////////////
	// 17. Counter Js
	new PureCounter();

	////////////////////////////////////////////////////
	// 18. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});

	$('.activebsba').on("click", function () {
		$('#services-item-thumb').removeClass().addClass($(this).attr('rel'));
		$(this).addClass('active').siblings().removeClass('active');
	});


	////////////////////////////////////////////////////
	// 19. Line Animation Js
	if ($('#marker').length > 0) {
		function crn_tab_line() {
			var marker = document.querySelector('#marker');
			var item = document.querySelectorAll('.menu-style-3  > nav > ul > li');
			var itemActive = document.querySelector('.menu-style-3  > nav > ul > li.active');

			function indicator(e) {
				marker.style.left = e.offsetLeft + "px";
				marker.style.width = e.offsetWidth + "px";
			}


			item.forEach(link => {
				link.addEventListener('mouseenter', (e) => {
					indicator(e.target);
				});

			});


			var activeNav = $('.menu-style-3 > nav > ul > li.active');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;

			var precedingAnchorWidth = anchorWidthCounter();


			$(marker).css('display', 'block');

			$(marker).css('width', totalWidth);

			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.menu-style-3 > nav > ul > li').each(function (index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft + "px";
					if (activeTest) {
						// Break out of the each function.
						return false;
					}

					a = $(elem).find('li');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;

					anchorWidths = anchorWidths + aTotalWidth;

				});

				return anchorWidths;
			}
		}
		crn_tab_line();
	}


	if ($('#productTabMarker').length > 0) {
		function crn_tab_line_2() {
			var marker = document.querySelector('#productTabMarker');
			var item = document.querySelectorAll('.crn-product-tab button');
			var itemActive = document.querySelector('.crn-product-tab .nav-link.active');

			// rtl settings
			var crn_rtl = localStorage.getItem('crn_dir');
			let rtl_setting = crn_rtl == 'rtl' ? 'right' : 'left';

			function indicator(e) {
				marker.style.left = e.offsetLeft + "px";
				marker.style.width = e.offsetWidth + "px";
			}


			item.forEach(link => {
				link.addEventListener('click', (e) => {
					indicator(e.target);
				});
			});

			var activeNav = $('.nav-link.active');
			var activewidth = $(activeNav).width();
			var activePadLeft = parseFloat($(activeNav).css('padding-left'));
			var activePadRight = parseFloat($(activeNav).css('padding-right'));
			var totalWidth = activewidth + activePadLeft + activePadRight;

			var precedingAnchorWidth = anchorWidthCounter();


			$(marker).css('display', 'block');

			$(marker).css('width', totalWidth);

			function anchorWidthCounter() {
				var anchorWidths = 0;
				var a;
				var aWidth;
				var aPadLeft;
				var aPadRight;
				var aTotalWidth;
				$('.crn-product-tab button').each(function (index, elem) {
					var activeTest = $(elem).hasClass('active');
					marker.style.left = elem.offsetLeft + "px";
					if (activeTest) {
						// Break out of the each function.
						return false;
					}

					a = $(elem).find('button');
					aWidth = a.width();
					aPadLeft = parseFloat(a.css('padding-left'));
					aPadRight = parseFloat(a.css('padding-right'));
					aTotalWidth = aWidth + aPadLeft + aPadRight;

					anchorWidths = anchorWidths + aTotalWidth;

				});

				return anchorWidths;
			}
		}
		crn_tab_line_2();
	}

	////////////////////////////////////////////////////
	// 20. Video Play Js
	var play = false;
	$('.crn-video-toggle-btn').on('click', function () {

		if (play === false) {
			$('.crn-slider-video').addClass('full-width');
			$(this).addClass('hide');
			play = true;

			$('.crn-slider-video').find('video').each(function () {
				$(this).get(0).play();
			});
		} else {
			$('.crn-slider-video').removeClass('full-width');
			$(this).removeClass('hide');
			play = false;
			$('.crn-slider-video').find('video').each(function () {
				$(this).get(0).pause();
			});
		}

	});

	////////////////////////////////////////////////////
	// 21. Password Toggle Js
	if ($('#password-show-toggle').length > 0) {
		var btn = document.getElementById('password-show-toggle');

		btn.addEventListener('click', function (e) {

			var inputType = document.getElementById('crn_password');
			var openEye = document.getElementById('open-eye');
			var closeEye = document.getElementById('close-eye');

			if (inputType.type === "password") {
				inputType.type = "text";
				openEye.style.display = 'block';
				closeEye.style.display = 'none';
			} else {
				inputType.type = "password";
				openEye.style.display = 'none';
				closeEye.style.display = 'block';
			}
		});
	}

	if ($('.crn-header-height').length > 0) {
		var headerHeight = document.querySelector(".crn-header-height");
		var setHeaderHeight = headerHeight.offsetHeight;

		$(".crn-header-height").each(function () {
			$(this).css({
				'height': setHeaderHeight + 'px'
			});
		});
	}



	//////////// cursor style//////////
	var circle = $('.cursor');

	function moveCircle(e) {
		TweenMax.to(circle, 1, {
			css: {
				left: e.pageX,
				top: e.pageY
			},
			ease: Elastic.easeOut
		});
	}

	$(window).on('mousemove', moveCircle);

	$('a').mouseenter(function (e) {
		TweenMax.to(circle, 0.2, {
			scale: 4,
			backgroundColor: 'rgba(23,43,77,.4)'
		});
	});

	$('a').mouseleave(function (e) {
		TweenMax.to(circle, 0.2, {
			scale: 1,
			backgroundColor: '#172B4D'
		});
	});

})(jQuery);