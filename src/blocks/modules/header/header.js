
$( ".header__other__item" ).mouseenter(function () {
  let headerMenuItem = $(this);
  let headerMenuList = headerMenuItem.children( '.header__menu__list' )
  headerMenuList.addClass('active')
});
$( ".header__other__item" ).mouseleave(function () {
  let headerMenuItem = $(this);
  let headerMenuList = headerMenuItem.children( '.header__menu__list' )
  headerMenuList.removeClass('active')
});


let overlayBg = document.querySelector(".mob-menu--overlay");
let mobMenu = document.querySelector(".js-mob-menu__section");
let mobMenuCity = document.querySelector(".js-mob-menu__section-city");
let mobMenuCityClose = document.querySelector(".mob-menu__city__top__close");
let mobMenuCityOverlay = document.querySelector(".js-mob-menu__city__top__overlay");
let mobMenuQuestion = document.querySelector(".js-mob-menu__section-question");
let mobMenuQuestionClose = document.querySelector(".mob-menu__question__top__close");
let mobMenuQuestionOverlay = document.querySelector(".js-mob-menu__question--overlay");
let buttonQuestion = document.querySelector(".js-button__question");
let humb = document.querySelector(".hamburger");
let searchBtn = document.querySelector(".js-search__btn");
let search = document.querySelector(".search");
let searchOverlay = document.querySelector(".search--overlay");

var hamburger = $(".hamburger");
hamburger.on("click", function(e) {
  hamburger.toggleClass("is-active");
});

$(document).mouseup(function (e){ 
  var search = $(".header__other__search");
  if (!search.is(e.target) 
      && search.has(e.target).length === 0) { 
        search.children(".header__other__search__input").removeClass("active"); 
  }
});
searchBtn.addEventListener("click", function () {
  search.classList.add("active");
  bodyNoScroll()
});
searchOverlay.addEventListener("click", function () {
  console.log(search)
  search.classList.remove("active");
  bodyYesScroll()
});
overlayBg.addEventListener("click", function () {
  mobMenu.classList.remove("active");
  humb.classList.remove("is-active");
  bodyYesScroll()
});
mobMenuCityClose.addEventListener("click", function () {
  mobMenuCity.classList.remove("active");
  bodyYesScroll()
});
mobMenuCityOverlay.addEventListener("click", function () {
  mobMenuCity.classList.remove("active");
  bodyYesScroll()
});
buttonQuestion.addEventListener("click", function () {
  mobMenuQuestion.classList.add("active");
  bodyNoScroll()
});
mobMenuQuestionClose.addEventListener("click", function () {
  mobMenuQuestion.classList.remove("active");
  bodyYesScroll()
});
mobMenuQuestionOverlay.addEventListener("click", function () {
  mobMenuQuestion.classList.remove("active");
  bodyYesScroll()
});
humb.addEventListener("click", function () {
  let kye = mobMenu.classList.contains("active");
  if (kye == false) {
    mobMenu.classList.add("active");
    bodyNoScroll()
  }else {
    mobMenu.classList.remove("active");
    bodyYesScroll()
  }
});

// $(window).scroll(function() {
// 	var height = $(window).scrollTop();
// 	 /*Если сделали скролл на 100px задаём новый класс для header*/
// 	if(height > 10){
// 		$('.section__header').addClass('bg__white');
// 	} else{
// 	/*Если меньше 100px удаляем класс для header*/
// 		$('.section__header').removeClass('bg__white');
// 	}
// });
