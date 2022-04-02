"use strict";

$(document).ready(function(){

    // Калькулятор цены
    $('#PriceCalculator').click( () => {
        let TypeSite =  $('#TypeSite').val(),
            Design = $('#Design').val(),
            Adaptive = $('#Adaptive').val(),
            Price = 0,
            Time = 0;

            if (TypeSite == 1 || TypeSite == 2){
                Price += 500;
                Time += 2;
            } else{
                Price += 1000;
                Time += 4;
            }
            if (Design == 1 ) {
                Price += 1000;
                Time += 3;
            } else if (Design == 2 ) {
                Price += 500;
                Time += 1;
            } else {
                console.log(Design);
                Price += 3000;
                Time += 5;
            }
            if(Adaptive == 1){
                Price += 4000;
                Time += 1;
            } else {
                Price += 4000;
                Time += 2;
            }
              
        $('#Time').html(`Количество дней выполнения: ${Time} дней`);
        $('#Price').html(`Стоимость заказа состовляет: ${Price} рублей`);
    });

});