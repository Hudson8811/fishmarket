function lWalkInit() {
    lWalkSliderInit()
    lWalkOpenInit() 
}

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

function lWalkOpenInit() {
    const lWalks = document.querySelectorAll('[data-js="lWalk"]')

    if(lWalks.length < 1) return

    lWalks.forEach(item => {
        const openlWalkGallerys = item.querySelectorAll('[data-js="openlWalkGallery"]')
        const firstGalleryItem = item.querySelector('[data-fancybox]')

        openlWalkGallerys.forEach(btn => {
            btn.addEventListener('click', function() {
                firstGalleryItem.click()
            })
        })
    })
}