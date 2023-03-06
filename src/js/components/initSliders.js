import Swiper, { Navigation, Scrollbar, Mousewheel, Pagination, Thumbs, FreeMode} from 'swiper';
Swiper.use([Navigation, Scrollbar, Mousewheel, Pagination, Thumbs, FreeMode]);

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

new Swiper('.blogs-home .swiper.blogs__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    speed: 1000,

    navigation: {
        nextEl: '.blogs-home .blogs__btns.swiper-button-next',
        prevEl: '.blogs-home .blogs__btns.swiper-button-prev',
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

new Swiper('.cat1 .swiper.blogs__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    speed: 1000,

    navigation: {
        nextEl: '.cat1 .blogs__btns.swiper-button-next',
        prevEl: '.cat1 .blogs__btns.swiper-button-prev',
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

new Swiper('.cat2 .swiper.blogs__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    speed: 1000,

    navigation: {
        nextEl: '.cat2 .blogs__btns.swiper-button-next',
        prevEl: '.cat2 .blogs__btns.swiper-button-prev',
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

new Swiper('.cat3 .swiper.blogs__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    speed: 1000,

    navigation: {
        nextEl: '.cat3 .blogs__btns.swiper-button-next',
        prevEl: '.cat3 .blogs__btns.swiper-button-prev',
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

new Swiper('.same-blog .swiper.blogs__slider', {
    slidesPerView: 2,
    spaceBetween: 10,
    speed: 1000,

    navigation: {
        nextEl: '.same-blog .blogs__btns.swiper-button-next',
        prevEl: '.same-blog .blogs__btns.swiper-button-prev',
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    },
});

new Swiper('.swiper.region__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1000,
    loop: true,

    navigation: {
        nextEl: '.region__btns.swiper-button-next',
        prevEl: '.region__btns.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination.region-pagin',
      },
});

new Swiper('.swiper.airports__slider', {
    slidesPerView: 4,
    spaceBetween: 5,
    speed: 1000,

    navigation: {
        nextEl: '.airports__btns.swiper-button-next',
        prevEl: '.airports__btns.swiper-button-prev',
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 5,
        }
    },
});

const personMain = new Swiper(".swiper.person-thumbs", {
    loop: true,
    spaceBetween: 10,
    initialSlide: 1,
    slidesPerView: 4,
    freeMode: true,
    direction: 'vertical',
    watchSlidesProgress: true,

    breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 10,
        }
    },
});

new Swiper(".swiper.person-main", {
    loop: true,
    speed: 1000,
    initialSlide: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".person-main .swiper-button-next",
      prevEl: ".person-main .swiper-button-prev",
    },
    thumbs: {
      swiper: personMain,
    },
});
