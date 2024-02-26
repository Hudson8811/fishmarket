function lWalkSliderInit() {

    const lWalkSlider = document.querySelector('[data-js="lWalkSlider"]')

    if(!lWalkSlider) return

    const lWalkSliderEx = new Swiper(lWalkSlider, {
        slidesPerView: 'auto',
        spaceBetween: 35,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}