function productIntroSliderInit() {

    const productIntroSlider = document.querySelector('[data-js="productIntroSlider"]')

    if(!productIntroSlider) return

    const productIntroSliderEx = new Swiper(productIntroSlider, {
        slidesPerView: 1,
		centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}