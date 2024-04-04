gsap.registerPlugin(ScrollTrigger);
//gsap.registerPlugin(ScrollToPlugin);

let animationBreakpoint = 992;
let scrollTriggerObject;
let scrollTriggerObject2;
let mainTimeline = gsap.timeline();
let innerTimeline = gsap.timeline();

let pageAnimationType = null;
let animationSelectors = [];

let addTime = 1300;
let addTimeFooter = 200;

let dwidth = $(window).width();


$(document).ready(function (){
	initScrollAnimation();

	//анимация появления шапки
	if ($('.section__header').length > 0){
		gsap.to(".section__header", {
			duration: 1,
			top: 0,
			delay: 2,
			ease: "none",
		});
	}
});


//определение анимации на странице
function initScrollAnimation(){
	let scrollPage = $('.scroll-page');
	if (scrollPage.length > 0){
		let animation = scrollPage.data("animation");
		if (animation !== undefined && animation !== "") {
			pageAnimationType = animation;
		}
	}
	switch (pageAnimationType) {
		case "homepage":
			//анимация главной
			break;
		case "careerpage":
			//анимация страницы Карьера
			break;
		case "teampage":
			//анимация страницы Карьера
			break;
		case "productionpage":
			//анимация страницы Карьера
			break;
		case "aboutpage":
			//анимация страницы О компании
			break;
		default:
			//анимация только подвала
			if ($('.js-footer__animation').length > 0){
				pageAnimationType = "footer";
			} else {
				pageAnimationType = null;
			}
			break;
	}
	if (pageAnimationType !== null){
		startAnimation();

		//реинциализация анимации при изменнии размеров окна
		$(window).on('resize',function (){

			let wwidth = $(window).width();
			if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && wwidth < animationBreakpoint){
				if (dwidth!==wwidth){
					resetAnimation();
					startAnimation();
				}
			} else {
				resetAnimation();
				startAnimation();
			}
			dwidth = wwidth;
		});
	}
}



//сброс gsap при изменении окна
function resetAnimation(){
	//сбрасываем объекты ScrollTrigger
	if (typeof scrollTriggerObject !== "undefined") scrollTriggerObject.kill();
	if (typeof scrollTriggerObject2 !== "undefined") scrollTriggerObject2.kill();
	//очищаем таймлайны анимаций
	mainTimeline.clear();
	innerTimeline.clear();
	//очищаем стили добавленные анимациями
	let uniqueElementsArray = uniqueArray(animationSelectors);
	let selectorsString = uniqueElementsArray.join(", ");
	if(selectorsString.length > 0) {
		gsap.set(selectorsString, {clearProps:"all"});
	}
}

function startAnimation(){
	if (pageAnimationType !== undefined && pageAnimationType !== null) {
		switch (pageAnimationType) {
			case "footer":
				//анимация только подвала
				if (window.innerWidth > animationBreakpoint ){
					addFooterAnimationDesktop();
					scrollTriggerObject = ScrollTrigger.create({
						trigger: ".js-footer__animation",
						pin: true,
						start: "top top",
						end: () => "+=" + addTimeFooter + "%",
						scrub: 2,
						animation: mainTimeline,
					});
				}
				break;
			case "homepage":
				//анимация главной
				if (window.innerWidth > animationBreakpoint ){
					homepageAnimationDesktop();
					scrollTriggerObject = ScrollTrigger.create({
						trigger: ".scroll-page",
						pin: true,
						start: "top top",
						end: () => "+=" + addTime + "%",
						scrub: 2,
						animation: mainTimeline,
					});
				}
				break;
			case "aboutpage":
				//анимация страницы О компании
				let aboutEmployeesSection = document.querySelector("[data-js='teamEmployeesSection']");
				let aboutEmployeesSliders = aboutEmployeesSection.querySelectorAll('[data-js="teamEmployeesSlider"]')

				if (window.innerWidth > animationBreakpoint ) {

					//удаляем слайдеры если они уже есть
					if(aboutEmployeesSliders.length > 0) {
						aboutEmployeesSliders.forEach(aboutEmployeesSliders => {
							if(aboutEmployeesSliders.swiper) {
								aboutEmployeesSliders.swiper.destroy()
							}
						})
					}

					//устанавливаем высоту секции с карточками
					let columnsHeightArr = [
						aboutEmployeesSection.querySelector(".js-team__column--1").offsetHeight, 
						aboutEmployeesSection.querySelector(".js-team__column--2").offsetHeight,
						aboutEmployeesSection.querySelector(".js-team__column--3").offsetHeight
					]
					aboutEmployeesSection.style.height = (Math.max(...columnsHeightArr) * 0.90) + 'px'

					aboutPageAnimationDesktop();
					scrollTriggerObject = ScrollTrigger.create({
						trigger: ".scroll-page",
						pin: true,
						start: "top top",
						end: () => "+=" + addTime + "%",
						scrub: 2,
						animation: mainTimeline,
					});
				} else {

					gsap.fromTo(".js-about-intro__title", 
					{
						y: "60%",
						opacity: 0
				
					},
					{
						duration: 0.5,
						y: '0',
						opacity: 1,
						delay: 4,
						ease: "none",
					});
					gsap.fromTo(".js-about-intro__text", 
					{
						y: "30%",
						opacity: 0
				
					},
					{
						duration: 0.3,
						delay: 4.4,
						y: '0',
						opacity: 1,
						ease: "none",
				
					});
					gsap.fromTo(".js-about-history__text", 
					{
						y: "30%",
						opacity: 0
				
					},
					{
						duration: 0.3,
						delay: 5,
						y: '0',
						opacity: 1,
						ease: "none",
				
					});

					//сбрасываем высоту секции
					aboutEmployeesSection.style.height = 'auto';

					//инициализируем слайдеры если их ещё нет
					if(aboutEmployeesSliders.length > 0) {
						aboutEmployeesSliders.forEach(aboutEmployeesSlider => {
							if(!aboutEmployeesSlider.swiper) {
								let aboutEmployeesSliderEx = new Swiper(aboutEmployeesSlider, {
									slidesPerView: 'auto',
									spaceBetween: 20,
								});
							}
						})
					}
				}
				break;
			case "careerpage":
				//анимация страницы Карьера
				if (window.innerWidth > animationBreakpoint ){
					careerPageAnimationDesktop();
					scrollTriggerObject = ScrollTrigger.create({
						trigger: "[data-js=careerPurposeSection]",
						start: "top 90%",
						endTrigger:"[data-js='careerNumbersSection']",
						end: "bottom top",
						scrub: 2,
						animation: innerTimeline,
					});
					scrollTriggerObject2 = ScrollTrigger.create({
						trigger: ".js-footer__animation",
						start: "top top",
						pin: true,
						end: () => "+=" + addTimeFooter + "%",
						scrub: 2,
						animation: mainTimeline,
					});
				}
				break;
			case "teampage":
				//анимация страницы Наша команда
				let teamEmployeesSection = document.querySelector("[data-js='teamEmployeesSection']");
				let teamEmployeesSliders = teamEmployeesSection.querySelectorAll('[data-js="teamEmployeesSlider"]')

				if (window.innerWidth > animationBreakpoint ){

					//удаляем слайдеры если они уже есть
					if(teamEmployeesSliders.length > 0) {
						teamEmployeesSliders.forEach(teamEmployeesSlider => {
							if(teamEmployeesSlider.swiper) {
								teamEmployeesSlider.swiper.destroy()
							}
						})
					}
					
					//устанавливаем высоту секции с карточками
					let columnsHeightArr = [
						teamEmployeesSection.querySelector(".js-team-employees__column--1").offsetHeight, 
						teamEmployeesSection.querySelector(".js-team-employees__column--2").offsetHeight,
						teamEmployeesSection.querySelector(".js-team-employees__column--3").offsetHeight
					]
					teamEmployeesSection.style.height = (Math.max(...columnsHeightArr) * 0.90) + 'px'
					
					//запускаем анимацию
					teamPageAnimationDesktop();
					scrollTriggerObject = ScrollTrigger.create({
						trigger: "[data-js=teamPhotosSection]",
						start: "top 90%",
						endTrigger:"[data-js='teamEmployeesSection']",
						end: "bottom top",
						scrub: 2,
						animation: innerTimeline,
					});
					scrollTriggerObject2 = ScrollTrigger.create({
						trigger: ".js-footer__animation",
						start: "top top",
						pin: true,
						end: () => "+=" + addTimeFooter + "%",
						scrub: 2,
						animation: mainTimeline,
					});

				} else {
					
					//сбрасываем высоту секции
					teamEmployeesSection.style.height = 'auto';

					//инициализируем слайдеры если их ещё нет
					if(teamEmployeesSliders.length > 0) {
						teamEmployeesSliders.forEach(teamEmployeesSlider => {
							if(!teamEmployeesSlider.swiper) {
								let teamEmployeesSliderEx = new Swiper(teamEmployeesSlider, {
									slidesPerView: 'auto',
									spaceBetween: 20,
								});
							}
						})
					}
				}
				break;
			case "productionpage":
				//анимация страницы Наше производство
				if (window.innerWidth > animationBreakpoint ){
					productionPageAnimationDesktop();
					scrollTriggerObject = ScrollTrigger.create({
						trigger: "[data-js='productionServicesSection']",
						start: "top 150%",
						end: "bottom top",
						scrub: 2,
						animation: innerTimeline,
					});
					scrollTriggerObject2 = ScrollTrigger.create({
						trigger: ".js-footer__animation",
						start: "top top",
						pin: true,
						end: () => "+=" + addTimeFooter + "%",
						scrub: 2,
						animation: mainTimeline,
					});
				}
				break;
			default:
				break;
		}
	}
}




//фунция содержащая анимацию для страниц с анимацией только подвала - десктоп
function addFooterAnimationDesktop(){
	mainTimeline.fromTo(
		".footer__menu", {
			right: "-24.6354166667vw",
		}, {
			right: "0vw",
			duration: 0.3,
			ease: "none",
		},
		"<-=1"
	);
	animationSelectors.push(".footer__menu");

	mainTimeline.fromTo(".footer__title", {
			left: "55%",
		}, {
			left: "-100%",
			duration: 1,
			ease: "none",
		},
		"<-=0.5"
	);
	animationSelectors.push(".footer__title");
}

//фунция содержащая анимацию для главной - десктоп
function homepageAnimationDesktop(){
	//анимация первого экрана не привязана к таймлайну
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


	//Убираем класс статики с футера
	$('.js-footer__animation').removeClass('footer__animation--personally');


	let scHeight = $('.main-site').innerHeight();
	let footerHeight =  $('.js-footer__animation').innerHeight();

	mainTimeline.fromTo(".js-assortment__section", {
		y: "100vh",
	}, {
		y: 0,
		duration: 0.6,
		ease: "none",
	}, "0");
	animationSelectors.push(".js-assortment__section");

	mainTimeline.fromTo(".js-assortment__col--2", {
		y: "65%",
	}, {
		y: "-50%",
		duration: 1.5,
		ease: "none",
	}, "<-=0.1");
	animationSelectors.push(".js-assortment__col--2");

	mainTimeline.fromTo(".js-assortment__col--3", {
		y: "65%",
	}, {
		y: "-60%",
		duration: 1.5,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-assortment__col--3");

	mainTimeline.fromTo(".js-assortment__section", {
		y: 0,
	}, {
		y: "-100%",
		duration: 0.6,
		ease: "none",
	}, ">");


	mainTimeline.fromTo(".hear__section", {
		left: "-100vw",
		opacity: "0"
	}, {
		left: "0vw",
		duration: 0.5,
		opacity: "1",
		ease: "none",
	}, "<-=1");
	animationSelectors.push(".hear__section");

	mainTimeline.fromTo(".hear__title", {
		top: "45%",
		left: "100%",
	}, {
		top: "45%",
		left: "-200%",
		duration: 2,
		ease: "none",
	}, ">+=0.6");
	animationSelectors.push(".hear__title");

	mainTimeline.fromTo(".news__section", {
		y: "100%",
		top: "100%",
	}, {
		top: "-100%",
		y: "-100%",
		duration: 2,
		ease: "none",
		onStart: function () {
			$('.news__btn').addClass('active');
		},
	}, "<+=0.6");
	animationSelectors.push(".news__section");

	mainTimeline.fromTo(".js-advantage__col--1", {
		y: "0%",
		top: "0%",
	}, {
		top: "-30%",
		y: "-30%",
		duration: 1,
		ease: "none",
	}, "<+=0.4");
	animationSelectors.push(".js-advantage__col--1");

	mainTimeline.fromTo(".js-advantage__col--2", {
		y: "30%",
		top: "30%",
	}, {
		top: "-60%",
		y: "-60%",
		duration: 1,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-advantage__col--2");

	mainTimeline.fromTo(".js-advantage__col--3", {
		y: "60%",
		top: "60%",
	}, {
		top: "-90%",
		y: "-90%",
		duration: 1,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-advantage__col--3");

	mainTimeline.fromTo(".js-news__btn", {
		marginTop: "22%",
	}, {
		marginTop: "147%",
		duration: 0.5,
		ease: "none",
	}, "<+=0.6");
	animationSelectors.push(".js-news__btn");

	mainTimeline.fromTo(".js-news__col--2", {
		y: "10%",
		top: "10%",
	}, {
		top: "-20%",
		y: "-20%",
		duration: 2,
		ease: "none",
	}, "<-=0.1");
	animationSelectors.push(".js-news__col--2");

	mainTimeline.fromTo(".js-footer__animation", {
		y: "100%",
	}, {
		y: -1 * (footerHeight - scHeight),
		duration: 0.5,
		ease: "none",
	}, "<+=0.2");
	animationSelectors.push(".js-footer__animation");

	mainTimeline.fromTo(".footer__menu", {
		right: "-100%",
	}, {
		right: "0%",
		duration: 1,
		ease: "none",
	}, ">-=1");
	animationSelectors.push(".footer__menu");

	mainTimeline.fromTo(".footer__title", {
		left: "55%",
	}, {
		left: "-100%",
		duration: 1,
		ease: "none",
	}, "<+=0.5");
	animationSelectors.push(".footer__title");
}

//фунция содержащая анимацию для страницы Карьера - десктоп
function careerPageAnimationDesktop() {

	//анимация контента
	innerTimeline.fromTo(".js-career-purpose__content", {
		y: "100",
		opacity: "0",
	}, {
		opacity: "1",
		y: "0",
		duration: 0.3,
		ease: "none",
	}, "0");
	animationSelectors.push(".js-career-purpose__content");

	//анимация квадратов
	innerTimeline.fromTo(".js-advantage__col--1", {
		y: "0%",
		top: "0%",
	}, {
		top: "-30%",
		y: "-30%",
		duration: 1,
		ease: "none",
	}, ">");
	animationSelectors.push(".js-advantage__col--1");

	innerTimeline.fromTo(".js-advantage__col--2", {
		y: "30%",
		top: "30%",
	}, {
		top: "-60%",
		y: "-60%",
		duration: 1,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-advantage__col--2");

	innerTimeline.fromTo(".js-advantage__col--3", {
		y: "60%",
		top: "60%",
	}, {
		top: "-90%",
		y: "-90%",
		duration: 1,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-advantage__col--3");

	//анимация футера
	mainTimeline.fromTo(".footer__menu", {
		right: "-100%",
	}, {
		right: "0%",
		duration: 1,
		ease: "none",
	}, "0");
	animationSelectors.push(".footer__menu");

	mainTimeline.fromTo(".footer__title", {
		left: "55%",
	}, {
		left: "-100%",
		duration: 1,
		ease: "none",
	}, "<+=0.1");
	animationSelectors.push(".footer__title");
}

//фунция содержащая анимацию для страницы Наша команда - десктоп
function teamPageAnimationDesktop() {

	//анимация контента
	innerTimeline.fromTo("[data-js='teamPhotosContent']", {
		y: "100",
		opacity: "0",
	}, {
		opacity: "1",
		y: "0",
		duration: 0.2,
		ease: "none",
	}, "0");
	animationSelectors.push("[data-js='teamPhotosContent']");

	//анимация квадратов
	innerTimeline.fromTo(".js-team-employees__column--1", {
		y: "-10%",
	}, {
		y: "-30%",
		duration: 1,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-team-employees__column--1");

	innerTimeline.fromTo(".js-team-employees__column--2", {
		y: "13%",
	}, {
		y: "-30%",
		duration: 1,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-team-employees__column--2");

	innerTimeline.fromTo(".js-team-employees__column--3", {
		y: "10%",
	}, {
		y: "-25%",
		duration: 1,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-team-employees__column--3");

	//анимация футера
	mainTimeline.fromTo(".footer__menu", {
		right: "-100%",
	}, {
		right: "0%",
		duration: 1,
		ease: "none",
	}, "0");
	animationSelectors.push(".footer__menu");

	mainTimeline.fromTo(".footer__title", {
		left: "55%",
	}, {
		left: "-100%",
		duration: 1,
		ease: "none",
	}, "<+=0.1");
	animationSelectors.push(".footer__title");
}

//фунция содержащая анимацию для страницы Наше производство - десктоп
function productionPageAnimationDesktop() {

	//анимация квадратов
	innerTimeline.fromTo(".js-production-services__col--1", {
		y: "20%",
	}, {
		y: "-75%",
		duration: 1,
		ease: "none",
	}, "0");
	animationSelectors.push(".js-production-services__col--1");

	innerTimeline.fromTo(".js-production-services__col--2", {
		y: "10%",
	}, {
		y: "-65%",
		duration: 1,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-production-services__col--2");

	innerTimeline.fromTo(".js-production-services__col--3", {
		y: "20%",
	}, {
		y: "-75%",
		duration: 1,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-production-services__col--3");

	//анимация футера
	mainTimeline.fromTo(".footer__menu", {
		right: "-100%",
	}, {
		right: "0%",
		duration: 1,
		ease: "none",
	}, "0");
	animationSelectors.push(".footer__menu");

	mainTimeline.fromTo(".footer__title", {
		left: "55%",
	}, {
		left: "-100%",
		duration: 1,
		ease: "none",
	}, "<+=0.1");
	animationSelectors.push(".footer__title");
}

//фунция содержащая анимацию для границы о компании - десктоп
function aboutPageAnimationDesktop(){
	//анимация первого экрана не привязана к таймлайну
	gsap.fromTo(".js-about-intro__title", 
	{
		y: "60%",
		opacity: 0

	},
	{
		duration: 0.5,
		y: '0',
		opacity: 1,
		delay: 5.5,
		ease: "none",
	});
	gsap.fromTo(".js-about-intro__text", 
	{
		y: "30%",
		opacity: 0

	},
	{
		duration: 0.3,
		delay: 5.9,
		y: '0',
		opacity: 1,
		ease: "none",

	});


	//Убираем класс статики с футера
	$('.js-footer__animation').removeClass('footer__animation--personally');


	let scHeight = $('.main-site').innerHeight();
	let windowHeight = window.innerHeight; 
	let careerHeight = $('.js-career-section').innerHeight();
	let teamHeight = $('.js-team-section').innerHeight();	
	let offerHeight = $('.js-offer-section').innerHeight();
	let careerOffsetHeight = careerHeight - windowHeight;
	let footerHeight =  $('.js-footer__animation').innerHeight();

	mainTimeline.fromTo(".js-history-section", {
		y: "100vh",
	}, {
		y: '-100%',
		duration: 1,
		ease: "none",
	}, "0");
	animationSelectors.push(".js-history-section");

	mainTimeline.fromTo(".js-main-screen", {
		y: "0",
	}, {
		y: '-100%',
		duration: 1.5,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-main-screen");

	mainTimeline.fromTo(".js-advantages-section", {
		y: '100%',
	}, {
		y: "0",
		duration: 0,
		ease: "none",
	}, "<+30%");
	animationSelectors.push(".js-advantages-section");

	mainTimeline.fromTo(".js-advantages__title", {
		x: "100%",
	}, {
		x: "-50%",
		duration: 1,
		ease: "none",
	}, ">");
	animationSelectors.push(".js-advantages__title");

	mainTimeline.fromTo(".js-advantages__cards", {
		y: "100%",
	}, {
		y: "-120%",
		duration: 2,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-advantages__cards");

	mainTimeline.fromTo(".js-advantages__video", {
		opacity: '1',
	}, {
		opacity: "0",
		duration: 0,
		ease: "none",
	}, ">-33%");
	animationSelectors.push(".js-advantages__video");

	mainTimeline.fromTo(".js-advantages__title", {
		opacity: '1',
	}, {
		opacity: "0",
		duration: 0,
		ease: "none",
	}, "<");
	
	mainTimeline.fromTo(".js-production-section", {
		y: "100vh",
	}, {
		y: "0",
		duration: 0,
		ease: "none",
	}, "<-100%");
	animationSelectors.push(".js-production-section");

	mainTimeline.fromTo(".js-advantages-section", {
		y: '0',
	}, {
		y: "-100%",
		duration: 1,
		ease: "none",
	}, "<-0.02");

	mainTimeline.fromTo(".js-logistics-section", {
		y: "100vh",
	}, {
		y: "0",
		duration: 0.8,
		ease: "none",
	}, ">-=0.2");
	animationSelectors.push(".js-logistics-section");

	mainTimeline.fromTo(".js-society-section", {
		y: "100vh",
	}, {
		y: "0",
		duration: 0.8,
		ease: "none",
	}, ">+=0.5");
	animationSelectors.push(".js-society-section");
	
	mainTimeline.fromTo(".js-career-section", {
		y: `${careerHeight}px`,
	}, {
		y: `-${careerOffsetHeight}px`,
		duration: 1.5,
		ease: "none",
	}, ">+=0.1");
	animationSelectors.push(".js-career-section");
	
	mainTimeline.fromTo(".js-team-section", {
		y: windowHeight,
	}, {
		y: `-${offerHeight + teamHeight}px`,
		duration: 2.2,
		ease: "none",
	}, ">+=0.2");
	animationSelectors.push(".js-team-section");

	mainTimeline.fromTo(".js-team__column--1", {
		y: "0%",
	}, {
		y: "-25%",
		duration: 1.7,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-team__column--1");

	mainTimeline.fromTo(".js-team__column--2", {
		y: "13%",
	}, {
		y: "-35%",
		duration: 1.7,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-team__column--2");

	mainTimeline.fromTo(".js-team__column--3", {
		y: "10%",
	}, {
		y: "-30%",
		duration: 1.7,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-team__column--3");

	mainTimeline.fromTo(".js-offer-section", {
		y: `${windowHeight + teamHeight}px`,
	}, {
		y: `-100%`,
		duration: 2.2,
		ease: "none",
	}, "<");
	animationSelectors.push(".js-offer-section");

	mainTimeline.fromTo(".js-footer__animation", {
		y: "100%",
	}, {
		y: -1 * (footerHeight - scHeight),
		duration: 0,
		ease: "none",
	}, ">-=0.64");
	animationSelectors.push(".js-footer__animation");

	mainTimeline.fromTo(".footer__menu", {
		right: "-100%",
	}, {
		right: "0%",
		duration: 1,
		ease: "none",
	}, ">-=0.6");
	animationSelectors.push(".footer__menu");

	mainTimeline.fromTo(".footer__title", {
		left: "100%",
	}, {
		left: "-100%",
		duration: 1,
		ease: "none",
	}, "<+=0.5");
	animationSelectors.push(".footer__title");
}