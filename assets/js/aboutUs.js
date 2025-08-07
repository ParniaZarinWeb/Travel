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


const btn1 = document.querySelector('.button1')
const btn2 = document.querySelector('.button2')
const btn3 = document.querySelector('.button3')
const color1 = document.querySelector('.button1 >button')
const color2 = document.querySelector('.button2 >button')
const color3 = document.querySelector('.button3 >button')
const content1 = document.querySelector('.none1')
const content2 = document.querySelector('.none2')
const content3 = document.querySelector('.none3')


btn1.addEventListener('click', showbtn1)
btn2.addEventListener('click', showbtn2)
btn3.addEventListener('click', showbtn3)

function showbtn1() {
    content1.style.display = 'block'
    content2.style.display = 'none'
    content3.style.display = 'none'
    color1.style.backgroundColor = '#f6f6f4'
    color2.style.backgroundColor = 'inherit'
    color3.style.backgroundColor = 'inherit'
}

function showbtn2() {
    content2.style.display = 'block'
    content1.style.display = 'none'
    content3.style.display = 'none'
    color2.style.backgroundColor = '#f6f6f4'
    color1.style.backgroundColor = 'inherit'
    color3.style.backgroundColor = 'inherit'
}

function showbtn3() {
    content3.style.display = 'block'
    content1.style.display = 'none'
    content2.style.display = 'none'
    color3.style.backgroundColor = '#f6f6f4'
    color2.style.backgroundColor = 'inherit'
    color1.style.backgroundColor = 'inherit'
}

