// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

new Swiper('.testimonial-swiper', {
    slidesPerView: 1, // 1 slide mỗi lần
    spaceBetween: 16,
    loop: true, // Vòng lặp vô tận
    grabCursor: true, // Hiển thị con trỏ kéo chuột
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});