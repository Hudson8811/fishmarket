@@include("../../blocks/components/amount-input/amount-input.js")
@@include("../../blocks/components/slider-photo/slider-photo.js")
@@include("../../blocks/components/vacancy-search/vacancy-search.js")
@@include("../../blocks/components/input-range/input-range.js")
@@include("../../blocks/components/l-modal/l-modal.js")

document.addEventListener("DOMContentLoaded", () => {
    amountInput();
    sliderPhotoInit();
    vacancySearchInit();
    inputRangeInit();

    //modals
    lModal("cartOffer")
})