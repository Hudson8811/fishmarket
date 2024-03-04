function vacancySearchInit() {
    const vacancySearch = document.querySelector("[data-js='vacancySearch']");

    if(!vacancySearch) return

    // открытие и применение фильтров
    const searchFilter = vacancySearch.querySelector("[data-js='searchFilter']")
    const searchFilterOpen = searchFilter.querySelector("[data-js='searchFilterOpen']");
    const searchFilterApply = searchFilter.querySelector("[data-js='searchFilterApply']");

    searchFilterOpen.addEventListener('click', e => {
        searchFilter.classList.toggle('is-open');
    })

    searchFilterApply.addEventListener('click', e => {
        let cityInputs = searchFilter.querySelectorAll(".search-filter__param--city .input-radio__input");
        let city = "";
        let salaryField = searchFilter.querySelector(".search-filter__param--salary [data-js='input-range']");
        let minSalary = salaryField.querySelector(".js-handle__min");
        let maxSalary = salaryField.querySelector(".js-handle__max");
        let minSalaryStart = salaryField.dataset.min;
        let maxSalaryStart = salaryField.dataset.max;
        let tagsList = [];

        cityInputs.forEach(item => {
            if(item.checked) {
                city = item.value;
            }
        });

        if(city.length > 0) {
            tagsList.push(city) 
        }

        if(minSalary.value != minSalaryStart) {
            tagsList.push("от " + minSalary.value) 
        }

        if(maxSalary.value != maxSalaryStart) {
            tagsList.push("до " + maxSalary.value) 
        }

        setFilterTags(tagsList)

        searchFilter.classList.remove('is-open');

    })

    //добавление тегов
    function setFilterTags(tagsList) {
        const tagsBlock = vacancySearch.querySelector("[data-js='vacancySearchTags']");
        
        if(!tagsBlock) return 

        tagsBlock.innerHTML = "";
        
        tagsList.forEach(tag => {
            let tagEl = document.createElement('div')
            tagEl.classList.add('vacancy-search__tag', 'filter-tag')
            
            tagEl.innerHTML = `
                <div class='filter-tag__text'>${tag}</div>
                <div class='filter-tag__delete'>                    
                    <svg>
                        <use xlink:href='img/sprites/sprite.svg#city__top__close'></use>
                    </svg>     
                </div>
            `
            tagsBlock.appendChild(tagEl)

            tagEl.addEventListener('click', function(e) {
                if(e.target.closest('.filter-tag__delete')) {
                    tagEl.remove();
                }
            })
        })
    }

}