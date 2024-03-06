function lVacanciesSliderInit() {

    const lVacanciesSlider = document.querySelector('[data-js="lVacanciesSlider"]')

    if(!lVacanciesSlider) return

    const lVacanciesSliderEx = new Swiper(lVacanciesSlider, {
        slidesPerView: 1,
        spaceBetween: 26,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            993: {
                slidesPerView: 'auto'
            }
        }
    });
}