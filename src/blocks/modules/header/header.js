
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
let mobMenuSection = document.querySelector(".js-mob-menu__section");
let mobMenu = document.querySelector(".mob-menu");
let mobMenuCity = document.querySelector(".js-mob-menu__city__section");
let mobMenuCityButton = document.querySelector(".js-header__other__item--place");
let mobMenuCityClose = document.querySelector(".mob-menu__city__top__close");
let mobMenuCityOverlay = document.querySelector(".js-mob-menu__city__top__overlay");
let mobMenuQuestion = document.querySelector(".js-mob-menu__section__question");
let mobMenuQuestionClose = document.querySelector(".mob-menu__question__top__close");
let mobMenuQuestionOverlay = document.querySelector(".js-mob-menu__question--overlay");
let buttonQuestion = document.querySelector(".js-button__question");
let humb = document.querySelector(".js-hamburger");
let searchBtn = document.querySelector(".js-search__btn");
let search = document.querySelector(".search");
let searchOverlay = document.querySelector(".search--overlay");


//Pop-up Command
let sectionCommand = document.querySelector(".js-pop-up__command");
let sectionCommandOverlay = document.querySelector(".js-pop-up__command--overlay");
let sectionCommandClose = document.querySelector(".js-pop-up__command--close");
let sectionCommandButton = document.querySelector(".js-pop-up__button--command");
if(sectionCommand.length > 0 && sectionCommandButton.length > 0) {
  sectionCommandButton.addEventListener("click", function () {
    sectionCommand.classList.add("active");
    bodyNoScroll()
  });
  sectionCommandClose.addEventListener("click", function () {
    sectionCommand.classList.remove("active");
    bodyYesScroll()
  });
  sectionCommandOverlay.addEventListener("click", function () {
    sectionCommand.classList.remove("active");
    bodyYesScroll()
  });
}

//Pop-up Command
//Pop-up thanks
let sectionThanks = document.querySelector(".js-pop-up__thanks");
let sectionThanksOverlay = document.querySelector(".js-pop-up__thanks--overlay");
let sectionThanksClose = document.querySelector(".js-pop-up__thanks--close");
let sectionThanksButton = document.querySelector(".js-pop-up__button--thanks");

if(sectionThanks.length > 0 && sectionThanksButton.length > 0) {
  sectionThanksButton.addEventListener("click", function () {
    sectionThanks.classList.add("active");
    bodyNoScroll()
  });
  sectionThanksClose.addEventListener("click", function () {
    sectionThanks.classList.remove("active");
    bodyYesScroll()
  });
  sectionThanksOverlay.addEventListener("click", function () {
    sectionThanks.classList.remove("active");
    bodyYesScroll()
  });
}

//Pop-up thanks



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
  mobMenuSection.classList.remove("active");
  humb.classList.remove("is-active");
  bodyYesScroll()
});
mobMenuCityButton.addEventListener("click", function () {
  mobMenuCity.classList.add("active");
  bodyNoScroll()
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
humb.addEventListener("mousemove", function () {
  mobMenuSection.classList.add("active");
  bodyNoScroll()
});
humb.addEventListener("mousemove", function () {
  mobMenuSection.classList.add("active");
  bodyNoScroll()
});
overlayBg.addEventListener("mousemove", function () {
  mobMenuSection.classList.remove("active");
  bodyYesScroll()
});
// humb.addEventListener("click", function () {
//   let kye = mobMenuSection.classList.contains("active");
//   if (kye == false) {
//     mobMenuSection.classList.add("active");
//     bodyNoScroll()
//   }else {
//     mobMenuSection.classList.remove("active");
//     bodyYesScroll()
//   }
// });

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

//input file
var dt = new DataTransfer();
 
$('.input-file input[type=file]').on('change', function(){
	let $files_list = $(this).closest('.input-file').next();
	$files_list.empty();
 
	for(var i = 0; i < this.files.length; i++){
		let new_file_input = '<div class="input-file-list-item">' +
			'<span class="input-file-list-name">' + this.files.item(i).name + '</span>' +
			'<a href="#" onclick="removeFilesItem(this); return false;" class="input-file-list-remove">x</a>' +
			'</div>';
		$files_list.append(new_file_input);
		dt.items.add(this.files.item(i));
	};
	this.files = dt.files;
});
 
function removeFilesItem(target){
	let name = $(target).prev().text();
	let input = $(target).closest('.input-file-row').find('input[type=file]');	
	$(target).closest('.input-file-list-item').remove();	
	for(let i = 0; i < dt.items.length; i++){
		if(name === dt.items[i].getAsFile().name){
			dt.items.remove(i);
		}
	}
	input[0].files = dt.files;  
}

//input file