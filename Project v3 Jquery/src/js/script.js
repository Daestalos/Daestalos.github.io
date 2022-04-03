"use strict";

$(document).ready(function(){





    // отложенная анимация
    let options = {threshold: [0.5]};
    // создаем observer
    let observer = new IntersectionObserver(onEnrtry, options);
    // создадим еще одну переменную
    // к примеру, возьмем, что для всех наших анимаций, для всех элементов, которые мы анимируем зададим класс  .element-animation, соответственно для всех элементов с классом .element-animation у нас будет срабатывать данный скрипт
    let elements = $('.element-animation');
    elements.each((i, el) => {
        observer.observe(el);
    });







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

function onEnrtry (entry){
    //
    entry.forEach(change => {
        // если change (наш элемент) попал в наблюдатель, т.е. сработал threshold
        if (change.isIntersecting){}
        // то для нашего change, т.е. для нашего элемента добавляем класс show-animation
        change.target.classList.add('.show-animation');
    });
}