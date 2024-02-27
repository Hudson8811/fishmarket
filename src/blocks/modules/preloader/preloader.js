let preloaderSection = document.querySelector(".preloader__section")
if(preloaderSection !== null ) {
	setTimeout(() => {
		preloaderSection.classList.add("no-active")
	}, 3100)
	setTimeout(() => {
		preloaderSection.style.display = "none"
	}, 4500)
}