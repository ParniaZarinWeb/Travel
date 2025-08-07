const iconList = document.querySelector('.bi-list')
const iconX = document.querySelector('.bi-x-lg')
const submenu = document.querySelector('.submenu')


iconList.addEventListener('click', showSubmenu)
iconX.addEventListener('click', showSubmenu)


let flag = 0
function showSubmenu() {
    if (flag == 0) {
        iconList.style.display = 'none'
        iconX.style.display = 'block'
        submenu.style.display = 'block'
        flag = 1
    } else {
        iconList.style.display = 'block'
        iconX.style.display = 'none'
        submenu.style.display = 'none'
        flag = 0
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

})

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disabelOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})
