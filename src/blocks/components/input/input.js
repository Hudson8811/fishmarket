

validation();
showPassInit();

function validation() {

    const forms = document.querySelectorAll('[data-validate]')

    if (!forms.length) return

    forms.forEach(form => {

        inputMasksInit(form);

        form.addEventListener('submit', event => {
            event.preventDefault()

            const inputFields = form.querySelectorAll('.input');

            const dataReqexp = {
                email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                personName: /^[а-яёА-ЯЁ]+$/u,
            }

            function error(el) {
                return {
                    set: () => {
                        el.classList.add("error")
                    },
                    remove: () => {
                        el.classList.remove("error")
                    },
                }
            }

            function validateInput(input) {
                const field = input.querySelector('input') ? input.querySelector('input') : input.querySelector('select');
                const name = field.getAttribute('data-v-name');
                const valueField = field.value;
                const passField = form.querySelector("[data-v-name='pass']");

                if (field.hasAttribute('required') && !field.hasAttribute('disabled')) {
                    if (valueField !== '') {
                        switch (name) {
                            case 'name':
                                if (
                                    valueField.length >= 2 &&
                                    valueField.match(dataReqexp.personName)
                                ) {
                                    error(input).remove()
                                } else {
                                    error(input).set()
                                }
                                break
                            case 'email':
                                if (valueField.match(dataReqexp.email)) {
                                    error(input).remove()
                                } else {
                                    error(input).set()
                                }
                                break
                            case 'phone':
                                if (valueField.length === 18) {
                                    error(input).remove()
                                } else {
                                    error(input).set()
                                }
                                break
                            case 'kpp':
                                if (valueField.length === 9) {
                                    error(input).remove()
                                } else {
                                    error(input).set()
                                }
                                break
                            case 'inn':
                                if (valueField.length === 12 || valueField.length === 10) {
                                    error(input).remove()
                                } else {
                                    error(input).set()
                                }
                                break
                            case 'pass':
                                if (valueField.length >= 6) {
                                    error(input).remove()
                                } else {
                                    error(input).set()
                                }
                                break
                            case 'pass-repeat':
                                if (valueField === passField.value) {
                                    error(input).remove()
                                } else {
                                    error(input).set()
                                }
                                break
                            case 'checkbox':
                                if (field.checked) {
                                    error(input).remove()
                                } else {
                                    error(input).set()
                                }
                                break
                            case 'select':
                                if (valueField.length > 0) {
                                    console.log('селект не пустой')
                                    console.log(valueField)
                                    error(input).remove()
                                } else {
                                    console.log('селект пустой')
                                    console.log(valueField)
                                    error(input).set()
                                }
                                break
                            default:
                                if (valueField.length !== 0) {
                                    error(input).remove()
                                } else {
                                    error(input).set()
                                }
                        }
                    } else {
                        error(input).set()
                    }
                }
            }

            function checkFields() {
                inputFields.forEach(input => {
                    validateInput(input)
                })
            }

            function lifeValidate() {
                inputFields.forEach(input => {
                    input.addEventListener('click', () => {
                        if (form.getAttribute('data-validate')) {
                            const field = input.querySelector('input')

                            field.addEventListener('input', () =>
                                validateInput(input),
                            )
                            checkFields()
                        }
                    })
                })
            }

            function validate() {
                let errors = 0

                inputFields.forEach(input => {
                    if (input.classList.contains('error')) {
                        errors += 1
                    }
                })

                if (errors === 0) {
                    const formData = new FormData(form)
                    console.log(formData)
                    formReset(form)

                    if(form.hasAttribute('data-registration-form')) {
                        let slider = form.closest("[data-js='registrationAreaSlider']");
                        let sliderTop = slider.querySelector("[data-js='registrationAreaTop']");
                        let userEmail = form.querySelector("[data-v-name='email']").value;
                        let userEmailText = slider.querySelector("[data-js='confirmUserEmail']");

                        userEmailText.innerHTML = userEmail;
                        slider.swiper.slideTo(2);
                        sliderTop.classList.remove("active");
                        
                    }

                } else {
                    console.log("Есть ошибки в форме")
                }
            }

            lifeValidate()
            checkFields()
            form.setAttribute('data-validate', 'true')

            validate()
        })
    })
}

function inputMasksInit(form) {

    const phones = form.querySelectorAll('input[data-is-tel="true"]');
    const numbers = form.querySelectorAll('input[data-is-number="true"]');
    const names = form.querySelectorAll('input[data-is-name="true"]');

    ['input', 'focus', 'blur'].forEach(eventName=>{
        if(phones.length > 0) {
            phones.forEach(phone => {
                phone.addEventListener(eventName, phoneMask);
            })
        }

        if(numbers.length > 0) {
            numbers.forEach(number => {
                number.addEventListener(eventName, numberMask);
            })
        }

        if(names.length > 0) {
            names.forEach(name => {
                name.addEventListener(eventName, nameMask);
            })
        }
    }
    )

    function phoneMask(event) {
        let matrix = "+7 (___) ___-__-__"
          , i = 0
          , def = matrix.replace(/\D/g, "")
          , val = this.value.replace(/\D/g, "");
        if (def.length >= val.length)
            val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type == "blur") {
            if (this.value.length == 2)
                this.value = ""
        }
    }

    function numberMask(event) {
        this.value = this.value.replace(/\D/g, '');
    }

    function nameMask(event) {
        this.value = this.value.replace(/[^а-яёА-ЯЁ]/g, '');
    }
}

function showPassInit() {
    const passFields = document.querySelectorAll('[data-js="passField"]')

    if (!passFields.length) return

    passFields.forEach(passField => {
        passField.addEventListener("click", event => {
            let currentShowBtn = event.target.closest('[data-js="passShowBtn"]');
            if(currentShowBtn) {
                event.preventDefault();
                event.stopPropagation();
                let currentInput = event.currentTarget.querySelector("input");
                if(currentInput.getAttribute('type') === 'password') {
                    currentInput.setAttribute('type', 'text')
                    currentShowBtn.classList.add('hide')
                } else {
                    currentInput.setAttribute('type', 'password')
                    currentShowBtn.classList.remove('hide')
                }
            }
        })
    })

}

function formReset(form) {
    form.reset();
    
    const selects = form.querySelectorAll('select');

    selects.forEach(select => {
        $(select).val('').trigger('change')
    })
}