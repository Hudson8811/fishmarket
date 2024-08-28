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

			var cntRatio = getCntRatio(item.closest('.js-product-card'));
			if(currentValue+cntRatio<1000){
				currentValue+=cntRatio;
				targetInput.value = currentValue;
				$(targetInput).trigger('prodCntValChanged');
			}

			if (currentValue > cntRatio) {
				item.querySelector('.amount-input__change.amount-input__minus').classList.remove('min');
			}

		});

		item.querySelector('.amount-input__change.amount-input__minus').addEventListener('click', function(e) {
			e.target.closest(".amount-input__change.amount-input__minus").classList.add('min');
			let targetInput = item.querySelector('input')
			let currentValue = parseInt(targetInput.value);

			var cntRatio = getCntRatio(item.closest('.js-product-card'));
			currentValue-=cntRatio;

			targetInput.value = currentValue;
			$(targetInput).trigger('prodCntValChanged');

			if (currentValue > cntRatio) {
				e.target.closest(".amount-input__change.amount-input__minus").classList.remove('min');
			}

		});

		'blur keyup change input'.split(' ').forEach(function(evt){
			item.querySelector('input').addEventListener(evt, function(e) {
				let targetInput = e.target;
				let currentValue = targetInput.value;

				targetInput.value = currentValue.replace(/\D/g,'');

				if(currentValue.length == 0) {
					targetInput.value = 1;
				}
				var cntRatio = getCntRatio(item.closest('.js-product-card'));
				var val = parseInt(targetInput.value);

				var maxVal=Math.floor(1.0 * 999 / cntRatio) * cntRatio;

				targetInput.value = Math.min(Math.ceil(1.0 * val / cntRatio) * cntRatio, maxVal);
				$(targetInput).trigger('prodCntValChanged');
			});
			item.querySelector('input').dispatchEvent(new Event('change'));
		});
	});
}

function getCntRatio(el_with_cnt_ratio){
	var cnt_ratio=1;
	var item=$(el_with_cnt_ratio);
	if(item.length>0){
		var cnt_temp_from_attr=item.attr('data-cnt-ratio');
		if(typeof(cnt_temp_from_attr)!=='undefined'){
			cnt_temp_from_attr=cnt_temp_from_attr.replace(/\D/g,'');
			if(cnt_temp_from_attr.length>0){
				cnt_ratio=parseInt(cnt_temp_from_attr);
			}
		}
	}
	return cnt_ratio;
}