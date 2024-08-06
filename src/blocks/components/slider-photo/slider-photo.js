function sliderPhotoInit() {
    const sliderPhotoWrapper = document.querySelector('[data-js="sliderPhotoWrapper"]');

    if (!sliderPhotoWrapper) return

    let sliderPhotoSlider = sliderPhotoWrapper.querySelector('[data-js="sliderPhotoSlider"]')
    let sliderPhotoThumbs = sliderPhotoWrapper.querySelector('[data-js="sliderPhotoThumbs"]')

    let sliderPhotoThumbsEx = new Swiper(sliderPhotoThumbs, {
        spaceBetween: 11,
        slidesPerView: 7,
        breakpoints: {
            993: {
                spaceBetween: 18,
                slidesPerView: 7,
            }
        }
    });

    let sliderPhotoSliderEx = new Swiper(sliderPhotoSlider, {
        slidesPerView: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: sliderPhotoThumbsEx,
        },
    });

}
