// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
new WOW().init();

const service = new Swiper('.service-swiper', {
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    grabCursor: false,
    pagination: {
        el: '.service-pagination',
        clickable: true,
    },
});

const testimonial = new Swiper('.testimonial-swiper', {
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    grabCursor: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
});

//ontop
function scrollnow(direct) {
    document.getElementsByClassName(direct)[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
    dropbox.style.display = "none";
}