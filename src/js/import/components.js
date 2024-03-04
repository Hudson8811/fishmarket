@@include("../../blocks/components/amount-input/amount-input.js")
@@include("../../blocks/components/slider-photo/slider-photo.js")
@@include("../../blocks/components/vacancy-search/vacancy-search.js")
@@include("../../blocks/components/input-range/input-range.js")

document.addEventListener("DOMContentLoaded", () => {
    amountInput();
    sliderPhotoInit();
    vacancySearchInit();
    inputRangeInit();
})