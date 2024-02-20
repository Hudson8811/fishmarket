function societyAwardsSliderInit() {

    const societyAwardsSlider = document.querySelector('[data-js="societyAwardsSlider"]')

    if(!societyAwardsSlider) return

    const societyAwardsSliderEx = new Swiper(societyAwardsSlider, {
        slidesPerView: 'auto',
        spaceBetween: 35,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}