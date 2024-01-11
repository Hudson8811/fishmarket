jQuery(function () { 

  // new Skroll()
  // .add(".start__title", {
  //     animation: "fadeInUp",
  //     delay: 850,
  //     duration: 750
  // })
  // .init();
	


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

let st1, st2, st3;
let tl1 = gsap.timeline({});
let tl2 = gsap.timeline({});
let tl3 = gsap.timeline({});

let s3Width, b1Width, b2Width, b3Width, b4Width;
let b1Height, b2Height, b3Height, b4Height, b5Height, b6Height, b7Height;


let urlParams = new URLSearchParams(window.location.search);
let yValue = urlParams.get('y');

let animationSection = $('.animation__section')
function initAnimation(){
	scHeight = $('.site-main').innerHeight();
	b1Height =  $('.assortment__section').innerHeight();
	b2Height =  $('.js-assortment__col--2').innerHeight();
	b3Height =  $('.hear__section').innerHeight();
	b4Height =  $('.news__section').innerHeight();
	footerHeight =  $('.js-footer').innerHeight();
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
          initScrollAnimationMobile();
      }

      $('body').addClass('active');
  }
}

initAnimation();
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
	gsap.set(".section__header, .start__slide__desc, .start__astronaut, .start__slide__btn, .start__swiper-buttons, .js-assortment__col--2, .js-assortment__col--3", {clearProps:"all"});
}
function initScrollAnimationDesktop(){
  gsap.to(".section__header", {
		duration: 1,
    top: 0,
    delay: 2,
		ease: "none",
		onComplete: function () {
				$('.fullPageOverlay').removeClass('active');
				$('body').addClass('active');
		}
	});
  gsap.to(".start__slide__desc", {
		duration: 1,
    delay: 4,
		autoAlpha: 1,
		ease: "none",
		onComplete: function () {
				$('.fullPageOverlay').removeClass('active');
				$('body').addClass('active');
		}
	});
  gsap.to(".start__slide__btn", {
		duration: 0.5,
    delay: 4.1,
		autoAlpha: 1,
		ease: "none",
		onComplete: function () {
				$('.fullPageOverlay').removeClass('active');
				$('body').addClass('active');
		}
	});
  gsap.to(".start__swiper-buttons", {
		duration: 0.5,
    delay: 4.1,
		autoAlpha: 1,
		ease: "none",
		onComplete: function () {
				$('.fullPageOverlay').removeClass('active');
				$('body').addClass('active');
		}
	});

	tl1.fromTo(".assortment__section", {
		y: "100%",
		top: "100%",
	}, {
		top: "-100%",
		y: "-100%",
		duration: 3,
		ease: "none",
	}, ">");
	tl1.fromTo(".js-assortment__col--2", {
		y: "100%",
		top: "100%",
	}, {
		top: "0%",
		// y: -1 * (b2Height - scHeight),
		y: "0%",
		duration: 2,
		ease: "none",
	}, "<+=0.1");
	tl1.fromTo(".hear__section", {
		left: "-100vw",
		opacity: "0"
	}, {
		left: "0vw",
		duration: 0.5,
		opacity: "1",
		ease: "none",
	}, "<+=1.2");

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
	}, "<+=0.3");
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
	tl1.fromTo(".footer__animation", {
		y: "100%",
		top: "100%",
	}, {
		y: "0%",
		top: "0%",
		// y: -1 * (footerHeight - scHeight),
		duration: 1,
		ease: "none",
	}, "<-=0.2");
	tl1.fromTo(".footer__menu", {
		right: "-100%",
	}, {
		right: "0%",
		// y: -1 * (footerHeight - scHeight),
		duration: 1,
		ease: "none",
	}, ">-=0.4");
	tl1.fromTo(".footer__title", {
		left: "100%",
	}, {
		left: "-100%",
		// y: -1 * (footerHeight - scHeight),
		duration: 1,
		ease: "none",
	}, "<+=0.8");




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
