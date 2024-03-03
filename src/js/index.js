
const openBurgerBtn = document.querySelector('#mBurger');
const closeBurgerBtn = document.querySelector('#mClose'); 
const headerMenu = document.querySelector('.header-menu');
const subMenuSVG = [...document.querySelectorAll('#subMenuSVG')];
const sliderNext = document.querySelector('.slider__next');
const sliderPrev = document.querySelector('.slider__prev');

openBurgerBtn.addEventListener('click', () => {
    headerMenu.classList.remove('hideMenu');
    headerMenu.classList.add('showMenu');
    headerMenu.style.display = 'flex';
})

closeBurgerBtn.addEventListener('click', () => {
    headerMenu.classList.remove('showMenu');
    headerMenu.classList.add('hideMenu');
});

subMenuSVG.map(item => {
    item.addEventListener('click', (e)=>{
        e.preventDefault();
        item.classList.toggle('active');
        item.closest('a').nextElementSibling.classList.toggle('shown');
    })
})


const renderNews = () => {
    const hotNews = document.querySelector('.hot-news');
    const pinNews = document.querySelector('.pin-news');

    const response = fetch('News_data.json')
    .then(data => data.json())
    .then(data => {
        data.hot.map(item => {
            hotNews.insertAdjacentHTML('beforeend', `
                <div class="hot-news__img" style="background-image: url(${item.image})"></div>
                <div class="hot-news__content">
                    <div class="hot-news__title">
                        <h2>${item.title}</h2>
                    </div>
                    <div class="hot-news__text">
                        ${item.text}
                    </div>
                    <div class="hot-news__row">
                        <div class="hot-news__container">
                            <a>${item.data}</a>
                            <a><img src="./src/assets/icons/eye.svg">${item.views}</a>
                            <a><img src="./src/assets/icons/comment.svg">${item.comments}</a>
                        </div>
                        
                        <img src="./src/assets/icons/hot.svg">
                    </div>
                </div>
            `);
        });
            
        data.pin.map((item, i) =>{
            pinNews.insertAdjacentHTML('afterbegin', `
                <div class="pin-news__content" onclick="location.href='${item.link}';" data-id="${i}">
                <div class="pin-news__img" style="background-image: url(${item.image})"></div>
                    <div class="pin-news__row">
                        <div class="pin-news__title">
                            <h2>${item.title}</h2>
                        </div>
                        <div class="pin-news__col">
                            <div class="pin-news__container">
                                <a>${item.data}</a>
                                <a><img src="./src/assets/icons/eye.svg">${item.views}</a>
                                <a><img src="./src/assets/icons/comment.svg">${item.comments}</a>
                            </div>
                            
                            <img src="./src/assets/icons/pin.svg">
                        </div>
                    </div>
                </div>
            `);

            renderDots(i)
        })

    })
} 

const renderDots = (i) => {
    const sliderDots = document.querySelector('.slider__dots');

    if (document.querySelector('.slider__active')){
        sliderDots.insertAdjacentHTML('beforeend', `<span class="slider__dot" data-move="${i}"></span>`) 
    } 
    else {
        sliderDots.insertAdjacentHTML('beforeend', `<span class="slider__dot slider__active" data-move="${i}"></span>`)
        document.querySelector(`[data-id="${i}"]`).style.display = 'block';
    }
}

const changeSlide = (i) => {
    const sliders = document.querySelectorAll('.pin-news__content');
    const currentDot = document.querySelector('.slider__active');
    const currentSlide = document.querySelector(`[data-id="${currentDot.dataset.move}"]`);

    let index = i;

    if(index > sliders.length - 1) {
        index = 0;
    } else if (index < 0) {
        index = sliders.length - 1;
    }

    currentDot.classList.remove('slider__active');
    currentSlide.style.display = 'none';
    const nextSlide = document.querySelector(`[data-id="${index}"]`);
    const nextDot = document.querySelector(`[data-move="${index}"]`);

    nextSlide.style.display = 'block';
    nextDot.classList.add('slider__active');
}


sliderNext.addEventListener('click', () => {
    const currentDot = document.querySelector('.slider__active');
    changeSlide(+currentDot.dataset.move + 1);
})

sliderPrev.addEventListener('click', () => {
    const currentDot = document.querySelector('.slider__active');
    changeSlide(+currentDot.dataset.move - 1);
})


renderNews()