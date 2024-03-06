function teamPhotosSliderInit() {

    const teamPhotosSlider = document.querySelector('[data-js="teamPhotosSlider"]')

    if(!teamPhotosSlider) return

    const teamPhotosSliderEx = new Swiper(teamPhotosSlider, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}