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
if(scrollbtn) scrollbtn.onclick = function () {
    const h = window.innerHeight;
    window.scrollTo(0, h)
};

let mdbinputs = document.querySelectorAll('.mdb-input');
if (mdbinputs) {
    for (let i = 0; i < mdbinputs.length; i++) {
        mdbinputs[i].addEventListener('focusout', function () {
            if (this.value.trim()) {
                this.parentElement.querySelector('.label').classList.add('top-standing')
            } else {
                this.parentElement.querySelector('.label').classList.remove('top-standing')
            }
        })
    }

}