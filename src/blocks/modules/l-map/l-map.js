function lMapInit() {
    const lMap = document.querySelector('[data-js="lMap"]')

    if(!lMap) return;

    ymaps.ready(init)

    function init() {
        //собираем адреса
        const addrressesBtnArr = document.querySelectorAll("[data-js='lMapAddress']");
        let placemarks = []

        if(addrressesBtnArr.length > 0) {
            addrressesBtnArr.forEach(item => {
                let currentId = item.dataset.id
                let currentCoords = item.dataset.coords.split(",")
                placemarks.push({
                    id: currentId,
                    coords: currentCoords
                })
            })
        } else {
            placemarks.push({
                id: "moscowOffice1",
                coords: [55.633871, 37.453720]
            })
        }

        //инициализируем карту
        const lMapEx = new ymaps.Map(lMap, {
            center: placemarks[0].coords,
            zoom:13,
            controls: []
        });

        //расставляем метки
        placemarks.forEach((placemark) => {
            let myPlacemark = new ymaps.Placemark(placemark.coords,{},{
                iconLayout: 'default#image',
                iconImageHref: '../img/svg/predstvo_act.svg',
                iconImageSize: [30, 36],
                iconImageOffset: [-15, -18]
            });
            lMapEx.geoObjects.add(myPlacemark);
        })

        if(addrressesBtnArr.length > 0) {
            //переключение городов
            const cities = document.querySelector('[data-js="cities"]');
            if(cities) {
                const cityBtnArr = cities.querySelectorAll(".l-map__city");
                const addressesBlocksArr = document.querySelectorAll('[data-js="lMapAddresses"]');
    
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
    
                    addressesBlocksArr.forEach(item => {
                        item.classList.remove("active")
                        if(item.dataset.city == targetCity) {
                            item.classList.add("active")
                        }
                    })
                })
            }

            //переключение адресов в рамках города
            addrressesBtnArr.forEach(item => {
                item.addEventListener('click', function(e) {
                    let targetId = this.dataset.id;
                    let targetAdressesBlock = this.closest("[data-js='lMapAddresses']");
                    let innerAddresses = targetAdressesBlock.querySelectorAll('[data-js="lMapAddress"]');
                    let targetAddressCoords = placemarks.find(placemark => placemark.id === targetId).coords;

                    lMapEx.setCenter(targetAddressCoords, 13, {
                        duration: 500
                    })
                    
                    innerAddresses.forEach(function(innerAddress) {
                        innerAddress.classList.remove("active");
                        if(innerAddress.dataset.id == targetId) {
                            innerAddress.classList.add("active")
                        }
                    })

                })
            })
        }
    }

}

