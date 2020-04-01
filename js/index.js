$(document).ready(function () {
    $(".section-slider").owlCarousel({
        items: 1,
        margin: 30,
        nav: false,
        dots: true,
        dotsData: true,
    });
});

const scrollbtn = document.querySelector('.scroll-btn');
scrollbtn.onclick = function () {
    const h = window.innerHeight;
    window.scrollTo(0, h)
};