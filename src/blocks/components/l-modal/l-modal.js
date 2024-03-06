function lModal(modalId) {

    let modal  = document.querySelector(`[data-id="${modalId}"]`);
    let btnOpen = document.querySelector(`[data-modal="${modalId}"]`);

    if(!modal || !btnOpen) return

    console.log("нашли модальное окно " + modalId)

    let modalClose = modal.querySelector("[data-js='lModalClose']");
    let modalOverlay = modal.querySelector("[data-js='lModalOverlay']");
    
    btnOpen.addEventListener("click", function () {
        modal.classList.add("active");
        bodyNoScroll()
    });
    modalClose.addEventListener("click", function () {
        modal.classList.remove("active");
        bodyYesScroll()
    });
    modalOverlay.addEventListener("click", function () {
        modal.classList.remove("active");
        bodyYesScroll()
    });
}
