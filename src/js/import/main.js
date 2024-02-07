
//map
function MapInit() {

	if ($('.contacts__map').length > 0) {
		const map = new ymaps.Map('js-map', {
			center: [55.672925, 37.625181],
			zoom:13,
			// type: 'yandex#satellite',
			// Карта будет создана без
			// элементов управления.
			controls: []
		});
	myPlacemark2 = new ymaps.Placemark([55.672925, 37.625181],{},{
			iconLayout: 'default#image',
			iconImageHref: '/img/svg/predstvo_act.svg',
			iconImageSize: [30, 36],
			iconImageOffset: [-15, -18]
	});

	// Добавляем метку на карту.
	map.geoObjects.add(myPlacemark2);
	$(".contacts__office").on("click", function () {
			$('.contacts__office').each(function() {
				var office = $(this);
				office.removeClass( "active" )
			});
			$(this).addClass( "active" );
			var coor = $(this).attr('data-coords');
			console.log (coor)
			var a = coor;
			var xy = a.split(',');
			var x = parseFloat(xy[0]);
			var y = parseFloat(xy[1]);


			
			myPlacemark2 = new ymaps.Placemark([x, y],{},{
					iconLayout: 'default#image',
					iconImageHref: '../img/svg/predstvo_act.svg',
					iconImageSize: [26, 26],
					iconImageOffset: [-13, -13]
			});

			// Добавляем метку на карту.
			map.geoObjects.add(myPlacemark2);
			map.setCenter([x, y]);

	}) 
	
	}
	

	
}
//map
document.addEventListener("DOMContentLoaded", () => {
	
var startSlider
$('.js-start__slider').each(function(){
  var slider=$(this)
  var serviceSlider = new Swiper(slider[0], {
    // watchOverflow: true,
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,
    // preventInteractionOnTransition: true,
    spaceBetween: 10,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: slider.find('.swiper-button-next')[0],
      prevEl: slider.find('.swiper-button-prev')[0]
    },
    pagination: {
      el: slider.find('.swiper-pagination')[0],
      type: 'bullets',
      clickable: true
    },
    // autoplay: {
    //   delay: 2000,
    //   // reverseDirection: true,
    //   disableOnInteraction: false,
    // },	
      breakpoints: {
        // when window width is >= 480px
        992: {
            spaceBetween: 0
        },
    }
  });

})
$(".js-contacts__form__select").select2({
  placeholder: "Список товаров",
  allowClear: true
});
$(".js-mob-menu__city__select").select2({
  placeholder: "Выбрать город",
  allowClear: true
});
// $(".js-search__select").select2({
//   placeholder: "по каталогу",
//   allowClear: true
// });
$('.contacts__form__input').on('input', function (e) {
	var state = e.target.value;
	if (state.length > 0) {
		$(this).addClass( "value" );
	} else {
		$(this).removeClass( "value" );
	}
});

$('.js-mask-phone').mask('+7(000)000-00-00');
$('.js-mask-name').mask("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", {'translation': {
	A: {pattern: /[а-яА-ЯёЁa-zA-Z]/, },
}
});


// accordions
	const accordions = document.querySelectorAll(".accordion");

	const openAccordion = (accordion) => {

			let headerHeight = 0;
				if (window.innerWidth > 1100){
						// headerHeight = $('.fixed-header').outerHeight();
						headerHeight = 100;
				}
		const content = accordion.querySelector(".accordion__content");
		accordion.classList.add("accordion__active");
				var accordionActiveHeaight = $(".accordion__active .accordion__content").height();
				if(typeof(accordionActiveHeaight) === "undefined") {
						accordionActiveHeaight = 0;
				}
		content.style.maxHeight = content.scrollHeight + "px";
		$('html, body').stop().animate({ scrollTop:$(accordion).offset().top - accordionActiveHeaight - headerHeight}, 300);
				// console.log(accordionActiveHeaight);
				
	};

	const closeAccordion = (accordion) => {
		const content = accordion.querySelector(".accordion__content");
		accordion.classList.remove("accordion__active");
		content.style.maxHeight = null;
	};

	accordions.forEach((accordion) => {
		const intro = accordion.querySelector(".accordion__intro");
		const content = accordion.querySelector(".accordion__content");

		intro.onclick = () => {
			if (content.style.maxHeight) {
				closeAccordion(accordion);
			} else {
								openAccordion(accordion);
								$(accordions).not($(accordion)).each(function(){
										closeAccordion($(this)[0]);
								});
			}
		};
	});



// accordions








// $(window).scroll(function() {
// 	var height = $(window).scrollTop();
// 	 /*Если сделали скролл на 100px задаём новый класс для header*/
// 	if(height > 10){
// 		$('.section__header').addClass('bg__black');
// 	} else{
// 	/*Если меньше 100px удаляем класс для header*/
// 		$('.section__header').removeClass('bg__black');
// 	}
// });





  
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(ScrollToPlugin);

let tl = gsap.timeline({});


var initMode = null;

let addTime = 1300;
let addTimeFooter = 500;

let st1, st2, st3;
let tl1 = gsap.timeline({});
let tl2 = gsap.timeline({});
let tl3 = gsap.timeline({});

let s3Width, b1Width, b2Width, b3Width, b4Width;
let b1Height, b2Height, b3Height, b4Height, b5Height, b6Height, b7Height;


// let urlParams = new URLSearchParams(window.location.search);
// let yValue = urlParams.get('y');

let animationSection = $('.scroll-page')
		animationSection
	if (animationSection.is('[data-animation]')) {
		initAnimation();
	} else {
		initAnimationFooter()
	}
// $('div').click(function() {
// 	if ($(this).is('[data-specs]')) {
// 		console.log('has specs');
// 	} else {
// 		console.log('no specs');
// 	}
// });
// let animationSectionDataAnimation = animationSection.hasAttribute("data-animation")
// console.log(animationSectionDataAnimation)
// if (animationSection.hasAttribute("data-animation")) {
// 	// data attribute doesn't exist
// }
function initAnimation(){
	scHeight = $('.main-site').innerHeight();
	b2Height =  $('.js-assortment__col--2').innerHeight();
	b3Height =  $('.hear__section').innerHeight();
	b4Height =  $('.news__section').innerHeight();
	b5Height =  $('.assortment__btn').innerHeight();
	b6Height =  $('.js-assortment__section').innerHeight();
	footerHeight =  $('.js-footer__animation').innerHeight();
	console.log(b6Height)
	if (window.innerWidth > 992 && animationSection.length > 0 ){
			if (initMode != 'desk'){
					window.scrollTo({
							top: 0,
							behavior: "instant"
					});
					initMode = 'desk';
					reInit();
					initScrollAnimationDesktop();
			}
	}else if(window.innerWidth > 699){
      if (initMode != 'tablet'){
          if (initMode != null){
              window.scrollTo({
                  top: 0,
                  behavior: "instant"
              });
          }
          initMode = 'tablet';
          reInit();
          initScrollAnimationTablet();
      }

      $('body').addClass('active');
  } else {
      if (initMode != 'mobile'){
          if (initMode != null){
              window.scrollTo({
                  top: 0,
                  behavior: "instant"
              });
          }
          initMode = 'mobile';
          reInit();
					initScrollAnimationTablet()
          // initScrollAnimationMobile();
      }

      $('body').addClass('active');
  }
}
function initAnimationFooter(){
	scHeight = $('.main-site').innerHeight();
	// b1Height =  $('.assortment__section').innerHeight();
	footerHeight =  $('.js-footer__animation').innerHeight();
	if (window.innerWidth > 992 && animationSection.length > 0 ){
		if (initMode != 'desk'){
				window.scrollTo({
						top: 0,
						behavior: "instant"
				});
				initMode = 'desk';
				reInit();
				initScrollAnimationDesktopFooter()
		}
	}else if(window.innerWidth > 699){
			if (initMode != 'tablet'){
					if (initMode != null){
							window.scrollTo({
									top: 0,
									behavior: "instant"
							});
					}
					initMode = 'tablet';
					reInit();
					initScrollAnimationTabletFooter()
			}

			$('body').addClass('active');
	} else {
			if (initMode != 'mobile'){
					if (initMode != null){
							window.scrollTo({
									top: 0,
									behavior: "instant"
							});
					}
					initMode = 'mobile';
					reInit();
					initScrollAnimationTabletFooter()
					// initScrollAnimationMobile();
			}

			$('body').addClass('active');
	}
}

// initAnimation();
// checkYearValue();

var dwidth = $(window).width();
$(window).on('resize',function (){
	var wwidth = $(window).width();
	if(dwidth!==wwidth){
		initAnimation();
	}
});

function reInit(){
	if (typeof st1 !== "undefined") st1.kill();
	if (typeof st2 !== "undefined") st2.kill();
	if (typeof st3 !== "undefined") st3.kill();
	tl.clear();
	tl1.clear();
	tl2.clear();
	tl3.clear();
	gsap.set(".section__header, .start__slide__desc, .start__astronaut, .start__slide__btn, .start__swiper-buttons, .js-assortment__col--2, .js-assortment__col--3" +
	".assortment__section,.js-assortment__col--2,.hear__section,.hear__title,.news__section,.js-advantage__col--1,.js-advantage__col--2,.js-advantage__col--3,.js-news__col--2,.js-footer__animation,.footer__menu,.footer__title" , {clearProps:"all"});
}
function initScrollAnimationDesktopFooter(){
  gsap.to(".section__header", {
		duration: 1,
    top: 0,
    delay: 2,
		ease: "none",

	});
  // gsap.to(".start__slide__desc", {
	// 	duration: 1,
  //   delay: 4,
	// 	autoAlpha: 1,
	// 	ease: "none",

	// });
  // gsap.to(".start__slide__btn", {
	// 	duration: 0.5,
  //   delay: 4.1,
	// 	autoAlpha: 1,
	// 	ease: "none",

	// });
  // gsap.to(".start__swiper-buttons", {
	// 	duration: 0.5,
  //   delay: 4.1,
	// 	autoAlpha: 1,
	// 	ease: "none",
	// });
  // gsap.to(".js-mob-menu__city__section", {
	// 	duration: 0.9,
  //   delay: 5,
	// 	onComplete: function () {
	// 		$('.js-mob-menu__city__section').addClass('active');
	// 	}
	// });

	tl1.fromTo(".footer__menu", {
		right: "-24.6354166667vw",
	}, {
		right: "0vw",
		// y: -1 * (footerHeight - scHeight),
		duration: 0.3,
		ease: "none",
	}, "<-=1");
	tl1.fromTo(".footer__title", {
		left: "100%",
	}, {
		left: "-100%",
		// y: -1 * (footerHeight - scHeight),
		duration: 1,
		ease: "none",
	}, "<-=0.1");




	// ScrollTrigger.clearScrollMemory('manual') ;
	st1 = ScrollTrigger.create({
		trigger: ".js-footer__animation",
		pin: true,
		start: "top top",
		end: () => "+=" + addTimeFooter + "%",
		scrub: 2,
		animation: tl1,
	});


}
function initScrollAnimationTabletFooter(){
	gsap.to(".section__header", {
		duration: 0,
    top: 0,
    delay: 0,
		ease: "none",

	});
  gsap.to(".start__slide__desc", {
		duration: 0,
    delay: 0,
		autoAlpha: 1,
		ease: "none",

	});
  gsap.to(".start__slide__btn", {
		duration: 0,
    delay: 0,
		autoAlpha: 1,
		ease: "none",

	});
  gsap.to(".start__swiper-buttons", {
		duration: 0,
    delay: 0,
		autoAlpha: 1,
		ease: "none",
	});
  gsap.to(".js-mob-menu__city__section", {
		duration: 0.3,
    delay: 3,
		onComplete: function () {
			$('.js-mob-menu__city__section').addClass('active');
		}
	});

}
function initScrollAnimationMobileFooter(){

}
function initScrollAnimationDesktop(){
  gsap.to(".section__header", {
		duration: 1,
    top: 0,
    delay: 2,
		ease: "none",

	});
  gsap.to(".start__slide__desc", {
		duration: 1,
    delay: 4,
		autoAlpha: 1,
		ease: "none",

	});
  gsap.to(".start__slide__btn", {
		duration: 0.5,
    delay: 4.1,
		autoAlpha: 1,
		ease: "none",

	});
  gsap.to(".start__swiper-buttons", {
		duration: 0.5,
    delay: 4.1,
		autoAlpha: 1,
		ease: "none",
	});
  gsap.to(".js-mob-menu__city__section", {
		duration: 0.9,
    delay: 5,
		onComplete: function () {
			$('.js-mob-menu__city__section').addClass('active');
		}
	});

	tl1.fromTo(".js-assortment__section", {
		y: "100vh",
	}, {
		y: -1 * (b6Height - scHeight),
		duration: 1,
		ease: "none",
		onComplete: function () {
			console.log("onComplete")
			$('.assortment__btn').addClass('active');
		},
		
	}, "0");
	tl1.fromTo(".js-assortment__section", {
		y: -1 * (b6Height - scHeight),
	}, {
		y: "-100%",
		duration: 0.8,
		ease: "none",
		// onReverseComplete: function () {
		// 	$('.assortment__btn').removeClass('active');
		// },
	}, ">");
	tl1.fromTo(".js-assortment__col--2", {
		y: "23%",
		top: "23%",
	}, {
		top: "0%",
		// y: -1 * (b2Height - scHeight),
		y: "0%",
		duration: 1,
		ease: "none",
	}, "<-=0.8");
	tl1.fromTo(".assortment__btn", {
		bottom: "-100%",
		
	}, {
		bottom: "1.71875vw",
		duration: 0.5,
		ease: "power1.out",
	}, "<-=0.20");



	tl1.fromTo(".hear__section", {
		left: "-100vw",
		opacity: "0"
	}, {
		left: "0vw",
		duration: 0.5,
		opacity: "1",
		ease: "none",
	}, "<+=0.53");

	tl1.fromTo(".hear__title", {
		top: "50%",
		left: "100%",
	}, {
		top: "50%",
		left: "-200%",
		duration: 2,
		ease: "none",
	}, ">+=0.3");

	tl1.fromTo(".news__section", {
		y: "100%",
		top: "100%",
	}, {
		top: "-100%",
		y: "-100%",
		// y: -1 * (b4Height - scHeight),
		duration: 2,
		ease: "none",
		onStart: function () {
			console.log("onStart")
			$('.news__btn').addClass('active');
		},
	}, "<+=0.6");
	tl1.fromTo(".js-advantage__col--1", {
		y: "0%",
		top: "0%",
	}, {
		top: "-30%",
		y: "-30%",
		duration: 1,
		ease: "none",
	}, "<+=0.4");
	tl1.fromTo(".js-advantage__col--2", {
		y: "30%",
		top: "30%",
	}, {
		top: "-60%",
		y: "-60%",
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".js-advantage__col--3", {
		y: "60%",
		top: "60%",
	}, {
		top: "-90%",
		y: "-90%",
		duration: 1,
		ease: "none",
	}, "<");
	tl1.fromTo(".js-news__btn", {
		// top: "0%",
		marginTop: 0,
	}, {
		marginTop: "180%",
		// y: -1 * (b2Height - scHeight),
		// y: "-20%",
		duration: 0.5,
		ease: "none",
		// ease: "power1.out",
		// ease: "circ.out",
	}, "<+=0.6");
	tl1.fromTo(".js-news__col--2", {
		y: "10%",
		top: "10%",
	}, {
		top: "-20%",
		// y: -1 * (b2Height - scHeight),
		y: "-20%",
		duration: 2,
		ease: "none",
	}, "<-=0.1");
	tl1.fromTo(".js-footer__animation", {
		y: "100%",
		// top: "100%",
	}, {
		y: "0%",
		// top: "0%",
		y: -1 * (footerHeight - scHeight),
		duration: 0.5,
		ease: "none",
	}, "<+=0.2");
	tl1.fromTo(".footer__menu", {
		right: "-100%",
	}, {
		right: "0%",
		// y: -1 * (footerHeight - scHeight),
		duration: 1,
		ease: "none",
	}, ">-=1");
	tl1.fromTo(".footer__title", {
		left: "55%",
	}, {
		left: "-100%",
		// y: -1 * (footerHeight - scHeight),
		duration: 1,
		ease: "none",
	}, "<+=0.5");




	// ScrollTrigger.clearScrollMemory('manual') ;
	st1 = ScrollTrigger.create({
		trigger: ".scroll-page",
		pin: true,
		start: "top top",
		end: () => "+=" + addTime + "%",
		scrub: 2,
		animation: tl1,
	});


}
function initScrollAnimationTablet(){
	gsap.to(".section__header", {
		duration: 0,
    top: 0,
    delay: 0,
		ease: "none",

	});
  gsap.to(".start__slide__desc", {
		duration: 0,
    delay: 0,
		autoAlpha: 1,
		ease: "none",

	});
  gsap.to(".start__slide__btn", {
		duration: 0,
    delay: 0,
		autoAlpha: 1,
		ease: "none",

	});
  gsap.to(".start__swiper-buttons", {
		duration: 0,
    delay: 0,
		autoAlpha: 1,
		ease: "none",
	});
  gsap.to(".js-mob-menu__city__section", {
		duration: 0.3,
    delay: 3,
		onComplete: function () {
			$('.js-mob-menu__city__section').addClass('active');
		}
	});

}
function initScrollAnimationMobile(){

}

$('.js-mask-phone').mask('+7(000)000-00-00');




});

function bodyNoScroll() {
	let bodyBodymotionless = document.querySelector('body')
	bodyBodymotionless.classList.add("Bodymotionless")
	
}
function bodyYesScroll() {
	let bodyBodymotionless = document.querySelector('body')
	bodyBodymotionless.classList.remove("Bodymotionless")	
}
