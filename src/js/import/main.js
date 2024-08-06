//map
function MapInit() {
	if ($('.contacts__map').length > 0) {
		ymaps.ready(() => {
			const mapContainer = document.getElementById('js-map')
			const defaultCoords = [55.672925, 37.625181]
			const startCoords = mapContainer.dataset.coords ? mapContainer.dataset.coords.split(",") : defaultCoords

			const map = new ymaps.Map(mapContainer, {
				center: startCoords,
				zoom:13,
				controls: []
			});
			myPlacemark2 = new ymaps.Placemark(startCoords,{},{
					iconLayout: 'default#image',
					iconImageHref: window.imageFolderPath+'img/svg/predstvo_act.svg',
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
					var a = coor;
					var xy = a.split(',');
					var x = parseFloat(xy[0]);
					var y = parseFloat(xy[1]);



					myPlacemark2 = new ymaps.Placemark([x, y],{},{
							iconLayout: 'default#image',
							iconImageHref: window.imageFolderPath+'img/svg/predstvo_act.svg',
							iconImageSize: [26, 26],
							iconImageOffset: [-13, -13]
					});

					// Добавляем метку на карту.
					map.geoObjects.add(myPlacemark2);
					map.setCenter([x, y]);

			})
		})

	}
}
	MapInit()

//map


function initPhoneMasks(){
	$('.js-mask-phone:not(.js-mask-phone--init)').addClass('js-mask-phone--init').mask('+7(000)000-00-00');
}


document.addEventListener("DOMContentLoaded", () => {

	$('.js-start__slider').each(function(){
		let slider=$(this)
		var serviceSlider = new Swiper(slider[0], {
			spaceBetween: 10,
			loop: true,
			slidesPerView: 1,
			speed: 600,
			navigation: {
				nextEl: slider.find('.swiper-button-next')[0],
				prevEl: slider.find('.swiper-button-prev')[0]
			},
			pagination: {
				el: slider.find('.swiper-pagination')[0],
				type: 'bullets',
				clickable: true
			},
			breakpoints: {
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
	$(".js-mob-menu__stock__select").select2({
		placeholder: "Выбрать склад",
		allowClear: true
	});

	$(document).on('input', '.contacts__form__input', function (e) {
		let state = e.target.value;
		if (state.length > 0) {
			$(this).addClass( "value" );
		} else {
			$(this).removeClass( "value" );
		}
	});

	initPhoneMasks();
	/*$('.js-mask-name').mask("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", {'translation': {
			A: {pattern: /[а-яА-ЯёЁa-zA-Z\s]/, },
		}
	});*/


	const accordions = document.querySelectorAll(".accordion");
	const openAccordion = (accordion) => {
		let headerHeight = 0;
		if (window.innerWidth > 1100){
			headerHeight = 100;
		}
		const content = accordion.querySelector(".accordion__content");
		accordion.classList.add("accordion__active");
		let accordionActiveHeaight = $(".accordion__active .accordion__content").height();
		if(typeof(accordionActiveHeaight) === "undefined") {
			accordionActiveHeaight = 0;
		}
		content.style.maxHeight = content.scrollHeight + "px";
		ScrollTrigger.refresh();
	};
	const closeAccordion = (accordion) => {
		const content = accordion.querySelector(".accordion__content");
		accordion.classList.remove("accordion__active");

		content.style.maxHeight = null;
	};
	const transitionEndHandler = function(event) {
		if (event.propertyName === "max-height") {
			ScrollTrigger.refresh();
		}
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

		content.addEventListener("transitionend", transitionEndHandler);
	});


	//появлениe выбора города
	let mobMenuCityButtonText = document.querySelector(".js-header__other__item--place [data-js='cityTextValue']");
	setTimeout(function (){
		let userCity = getUserCityCookie();
		if(userCity.length > 0) {
			mobMenuCityButtonText.innerHTML = userCity;
		} else {
			$('.js-mob-menu__city__section').addClass('active');
		}
	}, 3300);

	// Автовоспроизведение видео на мобильном
	var videos = document.querySelectorAll('[data-js="autoplayVideo"]');

	if(videos.length) {
		window.addEventListener('touchstart', function videoStart() {
			videos.forEach(video => {
				video.play();
				console.log('first touch');
			})
			this.removeEventListener('touchstart', videoStart);
		});
	}

	//Вкладки-радиокнопки в формах

	const radioTabsGroups = document.querySelectorAll("[data-js=formRadioTabs]");

	if(radioTabsGroups.length > 0) {
		radioTabsGroups.forEach(radioTabsGroup => {

			let radioTabs = radioTabsGroup.querySelectorAll('input[data-group-item]');
			let activeRadioGroupItem = radioTabsGroup.querySelector('input:checked');

			radioTabs.forEach(radioTab => {

				radioTab.addEventListener('change', function(e) {

					if(e.target !== activeRadioGroupItem) {

						let activeRadioGroupName = e.target.getAttribute('data-group-item');
						let radioGroupBlocks = radioTabsGroup.querySelectorAll('[data-group-block]');

						radioGroupBlocks.forEach(radioGroupBlock => {
							radioGroupBlock.classList.remove('active');
							let radioGroupBlockFields = radioGroupBlock.querySelectorAll('.contacts__form__input-block.input');
							if(radioGroupBlockFields.length > 0) {
								radioGroupBlockFields.forEach(radioGroupBlockField => {
									radioGroupBlockField.classList.remove('error')
									radioGroupBlockField.querySelector('input') ? radioGroupBlockField.querySelector('input').removeAttribute('required') : false;
									radioGroupBlockField.querySelector('select') ? radioGroupBlockField.querySelector('select').removeAttribute('required') : false;
								})
							}
						})

						if(activeRadioGroupName) {
							let radioGroupTargetBlock = radioTabsGroup.querySelector(`[data-group-block=${activeRadioGroupName}]`)

							if(radioGroupTargetBlock) {
								radioGroupTargetBlock.classList.add('active')
								let radioGroupTargetBlockFields = radioGroupTargetBlock.querySelectorAll('.contacts__form__input-block.input');
								if(radioGroupTargetBlockFields.length > 0) {
									radioGroupTargetBlockFields.forEach(radioGroupTargetBlockField => {
										radioGroupTargetBlockField.querySelector('input') ? radioGroupTargetBlockField.querySelector('input').setAttribute('required', '') : false;
										radioGroupTargetBlockField.querySelector('select') ? radioGroupTargetBlockField.querySelector('select').setAttribute('required', '') : false;
									})
								}
							}
						}

					}
					activeRadioGroupItem = radioTabsGroup.querySelector('input:checked');
				})
			})

		})
	}
});

function bodyNoScroll() {
	let bodyBodymotionless = document.querySelector('body')
	let header = document.querySelector('.section__header')
	bodyBodymotionless.classList.add("Bodymotionless")
	bodyBodymotionless.style.paddingRight = getScrollbarWidth() + "px"
	header.style.paddingRight = getScrollbarWidth() + "px"


}
function bodyYesScroll() {
	let bodyBodymotionless = document.querySelector('body')
	let header = document.querySelector('.section__header')
	bodyBodymotionless.classList.remove("Bodymotionless")
	bodyBodymotionless.style.paddingRight = 0
	header.style.paddingRight = 0
}

function getScrollbarWidth() {
	let div = document.createElement('div');

	div.style.overflowY = 'scroll';
	div.style.width = '50px';
	div.style.height = '0';

	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;
	div.remove();

	console.log(scrollWidth)

	return scrollWidth
}

function getUserCityCookie() {
	let userCookies = [...document.cookie.split(";")];
	let userCity = '';
	userCookies.forEach(cookie => {
		cookie = cookie.trim();
		let [name, value] = cookie.split("=");
		if(name == "user_city" && value !== null && value.length > 0) {
			userCity = value;
		}
	})
	return decodeURIComponent(userCity);
}

function uniqueArray(array) {
	return array.filter(function(item, index) {
		return array.indexOf(item) === index;
	});
}


