function teamEmployeesSliderInit() {

    const teamEmployeesSlider = document.querySelector('[data-js="teamEmployeesSlider"]')

    if(!teamEmployeesSlider || window.innerWidth > 992) return

    const teamEmployeesSliderEx = new Swiper(teamEmployeesSlider, {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}