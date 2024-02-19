function amountInput() {
    const amountFields = document.querySelectorAll('[data-js="amountInput"]');

    if(amountFields.length < 1) return

    amountFields.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
        })

        item.querySelector('.amount-input__change.amount-input__plus').addEventListener('click', function() {


            let targetInput = item.querySelector('input')
            let currentValue = parseInt(targetInput.value);

            currentValue++

            targetInput.value = currentValue;

            if (currentValue > 1) {
                item.querySelector('.amount-input__change.amount-input__minus').classList.remove('min');
            }
    
        });

        item.querySelector('.amount-input__change.amount-input__minus').addEventListener('click', function(e) {
            e.target.closest(".amount-input__change.amount-input__minus").classList.add('min');
            let targetInput = item.querySelector('input')
            let currentValue = parseInt(targetInput.value);

            currentValue--

            targetInput.value = currentValue;

            if (currentValue > 1) {
                e.target.closest(".amount-input__change.amount-input__minus").classList.remove('min');
            }
    
        });

        item.querySelector('input').addEventListener('blur', function(e) {
            let targetInput = e.target;
            let currentValue = targetInput.value;

            if(currentValue.length == 0) {
                targetInput.value = 1;
                return;
            }

            targetInput.value = currentValue.replace(/\D/g,'');
        })
    })
}