function lMapInit() {
    const lMap = document.querySelector('[data-js="lMap"]')

    if(!lMap) return;

    ymaps.ready(init)

    function init() {
        //инициализируем карты, расставляем метки
        const placemarks = [
            {   
                coords: [55.633871, 37.453720],
                id: 'moscowOffice1'
            },
            {   
                coords: [55.891693, 37.542141],
                id: 'moscowStock1'
            },
            {   
                coords: [55.672935, 37.725873],
                id: 'moscowStock2'
            },
            {   
                coords: [54.668160, 20.427968],
                id: 'kaliningradOffice1'
            },
            {   
                coords: [54.732777, 20.595486],
                id: 'kaliningradStock1'
            },
        ]

        const lMapEx = new ymaps.Map(lMap, {
            center: placemarks.find(placemark => placemark.id === 'moscowOffice1').coords,
            zoom:13,
            controls: []
        });

        placemarks.forEach((placemark, index) => {
            let myPlacemark = new ymaps.Placemark(placemark.coords,{},{
                iconLayout: 'default#image',
                iconImageHref: '/img/svg/predstvo_act.svg',
                iconImageSize: [30, 36],
                iconImageOffset: [-15, -18]
            });
            lMapEx.geoObjects.add(myPlacemark);
        })


        //переключение городов
        const cities = document.querySelector('[data-js="cities"]');
        const cityBtnArr = cities.querySelectorAll(".l-map__city");
        const adressesBlocksArr = document.querySelectorAll('[data-js="lMapAddresses"]');

        cities.addEventListener('click', (e)=> {
            let targetBtn = e.target.closest('.l-map__city');
            let targetCity = targetBtn.dataset.city;
            let targetCityCoords = placemarks.find(placemark => placemark.id === targetCity + 'Office1').coords;
            
            cityBtnArr.forEach(item => {
                item.classList.remove("active")
            })

            targetBtn.classList.add("active");
            lMapEx.setCenter(targetCityCoords, 13, {
                duration: 1000
            })

            adressesBlocksArr.forEach(item => {
                item.classList.remove("active")
                if(item.dataset.city == targetCity) {
                    item.classList.add("active")
                }
            })
        })

        //переключение адресов в рамках города

    }

}

