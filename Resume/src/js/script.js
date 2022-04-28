"use strict";

const header = document.querySelector(".Header");

function stickyHeader(){
 header.classList.toggle("Header_Scrolled", window.pageYOffset > 0);    
}
window.addEventListener("scroll", stickyHeader);

var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();

$(document).ready(function(){
    

    /* magnificPopup */

    $(document).ready(function() {
        $('.image-link').magnificPopup({type:'image'});
      });

    /* Модальное окно */

    let modalInterval = setInterval(function () {
        $("#myModal").modal('show');
        clearInterval(modalInterval);
    }, 30000);
    
    $('#ModalNotReady').click(function(){
        $("#myModal").modal('hide');
        
    });
    $('#ModalReady').click(function(){
        $("#myModal").modal('hide');
        $('html, body').animate({scrollTop: $('#Price').offset().top - 70 + "px"});
    });

    /* Якорь */

    $('a[href^="#').click(function(){
        let valHref = $(this).attr("href");
        $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
    });

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        $(".section").each((i, el) => {
            if($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
                // пробегаемся по всем меню a
                $("nav a").each((e, el) => {
                    // убираем у всех активный класс
                    if ($(el).hasClass("active")){
                        $(el).removeClass("active");
                    }
                });
                // внутри меню находим элементы li, затем тег a и добавляем ему Active
                $('nav li:eq('+ i +')').find('a').addClass('active');
    
    
            }
        });
    });
    

    /* Анимация */
    let options = {threshold: [0.2]};
    let observer = new IntersectionObserver(onEntry, options);

    // About text animation
    let AboutTextAnimation = $('.About__Text-animanion');
    AboutTextAnimation.each((i, el) => {
        observer.observe(el);
    });

    // About img animation
    let AboutImgAnimation = $('.About__Img-Animation');
    AboutImgAnimation.each((i, el) => {
        observer.observe(el);
    });

    // Skills animation
    let SkillsAnimation = $('.Skills__List');
    SkillsAnimation.each((i, el) => {
        observer.observe(el);
    });


    // Statistics animation
    let StatisticsAnimation = $('.Statistics__List'),
        Statisticsobserver = new IntersectionObserver(onEntryStatistic, {threshold: [0.5]});
    StatisticsAnimation.each((i, el) => {
        Statisticsobserver.observe(el);
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
              
        $('#TimeValue').html(`Количество дней выполнения: ${Time} дней`);
        $('#PriceValue').html(`Стоимость заказа состовляет: ${Price} рублей`);
    });

});

function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){ 
        change.target.classList.add('show-animation');
    }
    });
}

function onEntryStatistic (entry){
    entry.forEach(change => {
        if (change.isIntersecting){ 
        change.target.classList.add('show-animation');
        StatisticsCounter();
    }
    });
}

function StatisticsCounter(){
    $('.Statistics__List__Subtitle').each(function(){
        let Statistics = $(this),
            countEnd = Statistics.attr('data-count');
        
        $({ countStart: Statistics.text()}).animate( { countStart: countEnd }, {
        duration: 3500,
        easing:'linear',
        step: function() {
            Statistics.text(Math.floor(this.countStart));
        },
        complete: function() {
            Statistics.text(this.countStart);
        }
        });    
    });
}