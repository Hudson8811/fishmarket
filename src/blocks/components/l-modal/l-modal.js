function lModal(modalId) {

    let modal  = document.querySelector(`[data-id="${modalId}"]`);
    let btnsOpen = document.querySelectorAll(`[data-modal="${modalId}"]`);

    if(!modal || btnsOpen.length < 1) return

    let modalClose = modal.querySelector("[data-js='lModalClose']");
    let modalOverlay = modal.querySelector("[data-js='lModalOverlay']");

    btnsOpen.forEach(btnOpen => {
        btnOpen.addEventListener("click", function () {
            modal.classList.add("active");
            bodyNoScroll()
        });
    })

    modalClose.addEventListener("click", function () {
        modal.classList.remove("active");
        bodyYesScroll()
    });
    modalOverlay.addEventListener("click", function () {
        modal.classList.remove("active");
        bodyYesScroll()
    });
}
