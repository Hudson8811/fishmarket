function vacancySearchInit() {
    const vacancySearch = document.querySelector("[data-js='vacancySearch']");

    if(!vacancySearch) return

    // открытие и применение фильтров
    const searchFilterOpen = vacancySearch.querySelector("[data-js='searchFilterOpen']");

    searchFilterOpen.addEventListener('click', e => {

    })

    // удаление тегов
    const vacancySearchTagsArr = vacancySearch.querySelectorAll("[data-js='vacancySearchTag']");

    vacancySearchTagsArr.forEach(tag => {
        tag.addEventListener('click', function(e) {
            if(e.target.closest('.filter-tag__delete')) {
                tag.remove();
            }
        })
    })
}