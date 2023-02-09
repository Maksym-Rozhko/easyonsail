import Swiper, { Navigation, Scrollbar, Mousewheel } from 'swiper';
Swiper.use([Navigation, Scrollbar, Mousewheel]);

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

new Swiper('.swiper.categories__slider', {
    slidesPerView: 4,
    spaceBetween: 5,
    speed: 1000,

    navigation: {
        nextEl: '.categories__btns.swiper-button-next',
        prevEl: '.categories__btns.swiper-button-prev',
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
    },
});

new Swiper('.swiper.blogs__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    speed: 1000,

    navigation: {
        nextEl: '.blogs__btns.swiper-button-next',
        prevEl: '.blogs__btns.swiper-button-prev',
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});

new Swiper('.swiper.reviews__slider', {
    slidesPerView: 2.1,
    spaceBetween: 90,
    initialSlide: 1,
    centeredSlides: true,
    speed: 1000,
    mousewheel: true,
    loop: true,

    breakpoints: {
        320: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        1024: {
            slidesPerView: 1.6,
            spaceBetween: 45,
        },
        1280: {
            slidesPerView: 2.1,
            spaceBetween: 90,
        },
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});
