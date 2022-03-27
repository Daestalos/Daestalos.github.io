"use strict";

/* Задание:
1) вопросы на промпт
2) тип сайта (Сайт-визитка, корпоративный сайт, интернет-магазин)
3) дизайн (уникальный дизайн, шаблонный дизайн, wow-дизайн)
4) верстка (Адаптивная / Фиксированная)
5) цена для вариантов
6) Объект калькулятор, внутри метод для рассчета цены
7) алертом выводится стоимость и сроки
*/

let typeOfSite,
    typeOfDesign,
    typeOfLayout;

function rememberTypeOfSite() {
    typeOfSite = +prompt('Укажите тип сайта (1 - Сайт-визитка, 2 - корпоративный сайт, 3 - интернет-мазагин', 'Например: 1');
    while (typeOfSite == '' || typeOfSite == null || isNaN(typeOfSite) || typeOfSite > 3) {
        typeOfSite = +prompt('Укажите тип сайта (1 - Сайт-визитка, 2 - корпоративный сайт, 3 - интернет-мазагин', 'Например: 1');
    }
};

function rememberTypeOfDesign() {
    typeOfDesign = +prompt('Выберите дизайн (1 - уникальный дизайн, 2 - шаблонный дизайн, 3 - wow-дизайн', 'Например: 1');
    while (typeOfDesign == '' || typeOfDesign == null || isNaN(typeOfDesign) || typeOfDesign > 3) {
        typeOfDesign = +prompt('Выберите дизайн (1 - уникальный дизайн, 2 - шаблонный дизайн, 3 - wow-дизайн', 'Например: 1');
    }
};

function rememberTypeOfLayout() {
    typeOfLayout = +prompt('Выберите верстку (1 - Адаптивная, 2 - Фиксированная)', 'Например: 1');
    while (typeOfLayout == '' || typeOfLayout == null || isNaN(typeOfLayout) || typeOfLayout > 2) {
        typeOfLayout = +prompt('Выберите верстку (1 - Адаптивная, 2 - Фиксированная'), 'Например: 1');
    }
};


rememberTypeOfSite();
rememberTypeOfDesign();
rememberTypeOfLayout();


const calculator = {
    site: typeOfSite,
    design: typeOfDesign,
    layout: typeOfLayout,
    calculatePrise(){
        let Price = 0,
            Time = 0;

        // site
        if (this.site === 1 || this.site === 2){
            Price += 500;
            Time += 2;
        }
        else{
            Price += 1000;
            Time += 4;
        }

        // design

        if (this.design === 1 ) {
            Price += 1000;
            Time += 3;
        }else if (this.design === 2 ) {
            Price += 500;
            Time += 1;
        }else {
            Price += 3000;
            Time += 5;
        }

        // layout

        if(this.layout === 1){
            Price += 4000;
            Time += 1;
        } else {
            Price += 4000;
            Time += 2;
        }

        alert(`Стоимость заказа состовляет: ${Price} рублей, Количество дней выполнения: ${Time}`);
    }
};


calculator.calculatePrise();

