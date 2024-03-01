function careerPhotosSliderInit() {

    const careerPhotosSlider = document.querySelector('[data-js="careerPhotosSlider"]')

    if(!careerPhotosSlider) return

    const careerPhotosSliderEx = new Swiper(careerPhotosSlider, {
        slidesPerView: 'auto',
        spaceBetween: 25,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}