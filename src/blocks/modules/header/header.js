
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
let mobMenuCityOk = document.querySelector(".js-mob-menu__city__ok");
let mobMenuCitySelect = document.querySelector(".js-mob-menu__city__select");
let mobMenuQuestion = document.querySelector(".js-mob-menu__section__question");
let mobMenuQuestionClose = document.querySelector(".mob-menu__question__top__close");
let mobMenuQuestionOverlay = document.querySelector(".js-mob-menu__question--overlay");
let buttonQuestions = document.querySelectorAll(".js-button__question");
let humb = document.querySelector(".js-hamburger");
let searchBtn = document.querySelector(".js-search__btn");
let search = document.querySelector(".search");
let searchOverlay = document.querySelector(".search--overlay");
let searchClears = document.querySelectorAll("[data-js='searchClear']");

	///tabs
  function tabAllClick(navs, panes) {
    var tabNavs = navs;
    var tabPanes = panes;
    if(tabNavs !==null & tabPanes !==null) {
      tabClick() 
    }
    function tabClick() {
      for (var i = 0; i < tabNavs.length; i++) {
  
        tabNavs[i].addEventListener("click", function(e){
          e.preventDefault();
          var activeTabAttr = e.target.getAttribute("data-tab");
    
          for (var j = 0; j < tabNavs.length; j++) {
            var contentAttr = tabPanes[j].getAttribute("data-tab-content");
    
            if (activeTabAttr === contentAttr) {
              tabNavs[j].classList.add("active");
              tabPanes[j].classList.add("active"); 
            } else {
              tabNavs[j].classList.remove("active");
              tabPanes[j].classList.remove("active");
            }
          };
        });
      }
    }
  }

	///tabs
//Pop-up login-register
let loginRegister = document.querySelector(".js-pop-up__login-register");
let loginRegisterSlider = document.querySelector("[data-js='loginAreaSlider']");
let loginRegisterOverlay = document.querySelector(".js-pop-up__login-register--overlay");
let loginRegisterClose = document.querySelector(".js-pop-up__login-register--close");
let loginButtons = document.querySelectorAll("[data-js='popUpBtnLogin']");
let registerButton = document.querySelector("[data-js='popUpBtnRegistration']");
let loginAreaSlider = document.querySelector("[data-js='loginAreaSlider']");
let registrationAreaSlider = document.querySelector("[data-js='registrationAreaSlider']");

if(loginAreaSlider) {
  let loginAreaSliderEx = new Swiper(loginAreaSlider, {
    allowTouchMove: false,
    effect: 'fade',
    navigation: {
      nextEl: '.login-area__control--next',
      prevEl: '.login-area__control--prev',
    },
  })
}

if(registrationAreaSlider) {
  const toSlide1 = registrationAreaSlider.querySelector('[data-js="registrationAreaTo1"]');
  const toSlide2 = registrationAreaSlider.querySelector('[data-js="registrationAreaTo2"]');

  let registrationAreaSliderEx = new Swiper(registrationAreaSlider, {
    allowTouchMove: false,
    effect: 'fade',
  })

  registrationAreaSlider.addEventListener('click', event => {
      if(event.target.closest('[data-js="registrationAreaTo1"]')) {
        event.preventDefault();
        event.stopPropagation();
        toSlide1.classList.add('active');
        toSlide2.classList.remove('active');
        event.currentTarget.swiper.slideTo(0);
      } else if(event.target.closest('[data-js="registrationAreaTo2"]')) {
        event.preventDefault();
        event.stopPropagation();
        toSlide2.classList.add('active');
        toSlide1.classList.remove('active');
        event.currentTarget.swiper.slideTo(1);
      }
  })
}

if( loginButtons.length > 0 && registerButton !== null) {

  
  loginButtons.forEach(loginButton =>  {
    loginButton.addEventListener("click", function () {
      loginRegisterSlider.swiper.slideTo(0);
      loginRegister.classList.add("active");
      bodyNoScroll()
    });
  })

  registerButton.addEventListener("click", function () {
    loginRegisterSlider.swiper.slideTo(1);
    loginRegister.classList.add("active");
    bodyNoScroll()
  });

  loginRegisterClose.addEventListener("click", function () {
    loginRegister.classList.remove("active");
    bodyYesScroll()
  });

  loginRegisterOverlay.addEventListener("click", function () {
    loginRegister.classList.remove("active");
    bodyYesScroll()
  });
}


//Pop-up login-register
//Pop-up Command
let sectionCommand = document.querySelector(".js-pop-up__command");
let sectionCommandOverlay = document.querySelector(".js-pop-up__command--overlay");
let sectionCommandClose = document.querySelector(".js-pop-up__command--close");
let sectionCommandButton = document.querySelector(".js-pop-up__button--command");
if( sectionCommandButton !== null) {
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

if(sectionThanksButton !== null) {
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
  search.classList.remove("active");
  bodyYesScroll()
});
searchClears.forEach(searchClear => {
  searchClear.addEventListener("click", function () {
    searchClear.closest('[data-js="search"]')
      .querySelector('input')
      .value = '';
  });
})
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
mobMenuCityOk.addEventListener("click", function () {
  let currentCity = mobMenuCitySelect.value
  if(currentCity.length > 0) {
    document.cookie= encodeURIComponent("user_city") + '=' + encodeURIComponent(currentCity);
    mobMenuCityButton.querySelector("[data-js='cityTextValue']").innerHTML = currentCity;
    mobMenuCity.classList.remove("active");
    bodyYesScroll()
  }
});
buttonQuestions.forEach(buttonQuestion => {
  buttonQuestion.addEventListener("click", function () {
    mobMenuQuestion.classList.add("active");
    bodyNoScroll()
  });
})
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


$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 107 ) {
        $('body').addClass('header--small');
    }
    if( scrolled <= 107 ) {
        $('body').removeClass('header--small');
    }
});