validation();

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
            }

            function error(el) {
                return {
                    set: () => {
                        el.classList.add("_invalid")
                    },
                    remove: () => {
                        el.classList.remove("_invalid")
                    },
                }
            }

            function validateInput(input) {
                const field = input.querySelector('input');
                const name = field.getAttribute('data-v-name');
                const valueField = field.value;

                if (field.hasAttribute('required') && !field.hasAttribute('disabled')) {
                    if (valueField !== '') {
                        switch (name) {
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
                            case 'checkbox':
                                if (field.checked) {
                                    error(input).remove()
                                } else {
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
                    if (input.querySelector("input").classList.contains('_invalid')) {
                        errors += 1
                    }
                })

                if (errors === 0) {
                    const formData = new FormData(form)
                    console.log(formData)
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

    ['input', 'focus', 'blur'].forEach(eventName=>{
        if(phones.length > 0) {
            phones.forEach(phone => {
                phone.addEventListener(eventName, phoneMask);
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
}