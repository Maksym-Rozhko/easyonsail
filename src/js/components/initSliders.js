import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

new Swiper('.swiper.ragions__slider', {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 1000,
    // loop: true,

    navigation: {
        nextEl: '.regions__btns.swiper-button-next',
        prevEl: '.regions__btns.swiper-button-prev',
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
    },
});
