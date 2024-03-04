function inputRangeInit() {

    $('[data-js="input-range"]').each(function() {
        let handleMin = $(this).find('.js-handle__min');
        let handleMax = $(this).find('.js-handle__max');
        let minValue = $(this).data('min');
        let maxValue = $(this).data('max');
        let inputFake = $(this).find('.js-input-range__fake')

        handleMin.val(minValue);
        handleMax.val(maxValue);
        
        inputFake.slider({
            range: true,
            min: minValue,
            max: maxValue,
            values: [minValue, maxValue],
            slide: function(event, ui){
                handleMin.val(ui.values[0]);
                handleMax.val(ui.values[1]);
           }
        });

        handleMin.on('change', function() {
            inputFake.slider({
                values: [$(this).val(), inputFake.slider('values')[1]]
            })
        })

        handleMax.on('change', function() {
            inputFake.slider({
                values: [inputFake.slider('values')[0], $(this).val()]
            })
        })
    });
}