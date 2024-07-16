@@include("../../blocks/components/amount-input/amount-input.js")
@@include("../../blocks/components/slider-photo/slider-photo.js")
@@include("../../blocks/components/vacancy-search/vacancy-search.js")
@@include("../../blocks/components/input-range/input-range.js")
@@include("../../blocks/components/l-modal/l-modal.js")
@@include("../../blocks/components/input/input.js")

document.addEventListener("DOMContentLoaded", () => {
    amountInput();
    sliderPhotoInit();
    //Переношу в бек и допиливаю там. Тут неудобно
    //vacancySearchInit();
    inputRangeInit();

    //modals
    lModal("cartOffer")
    lModal("historyModal")
    lModal("callbackModal")

    lModal("teamCardModalSolovyovVladislav")
    lModal("teamCardModalKosirevaNat")
    lModal("teamCardModalKasheczkijYurij")
    lModal("teamCardModalGrishinDmitrij")
    lModal("teamCardModalAltuxovSergey")
    lModal("teamCardModalLondarovaMarina")
    lModal("teamCardModalXoxlovDmitrij")
    lModal("teamCardModalMuravyovPavel")
    lModal("teamCardModalChugunovVladimir")
    lModal("teamCardModalBocharovaNatalya")
})