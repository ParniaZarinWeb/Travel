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

const p = document.querySelector('.message')
const i = document.querySelector('.dot')
const btn = document.querySelector('.btn')
const close = document.querySelector('.bi-x')
const box = document.getElementById("box")

btn.addEventListener('click', showDot)
btn.addEventListener('click', showBox)
close.addEventListener('click', hideBox)

function showDot() {
    p.style.display = 'none'
    i.style.display = 'block'

    setTimeout(() => {
        p.style.display = 'block'
        i.style.display = 'none'
    }, 900);
}

function showBox() {
    box.classList.remove("hide")

    setTimeout(() => {
        box.classList.add("show")
    }, 1000)
}

function hideBox() {
    box.classList.remove("show")
    box.classList.add("hide")
}


const btn1 = document.querySelector('.button1')
const btn2 = document.querySelector('.button2')
const btn3 = document.querySelector('.button3')
const btn4 = document.querySelector('.button4')
const btn5 = document.querySelector('.button5')
const plus1 = document.querySelector('.plus1')
const minus1 = document.querySelector('.minus1')
const plus2 = document.querySelector('.plus2')
const minus2 = document.querySelector('.minus2')
const plus3 = document.querySelector('.plus3')
const minus3 = document.querySelector('.minus3')
const plus4 = document.querySelector('.plus4')
const minus4 = document.querySelector('.minus4')
const plus5 = document.querySelector('.plus5')
const minus5 = document.querySelector('.minus5')
const content1 = document.querySelector('.none1')
const content2 = document.querySelector('.none2')
const content3 = document.querySelector('.none3')
const content4 = document.querySelector('.none4')
const content5 = document.querySelector('.none5')

btn1.addEventListener('click', showbtn1)
btn2.addEventListener('click', showbtn2)
btn3.addEventListener('click', showbtn3)
btn4.addEventListener('click', showbtn4)
btn5.addEventListener('click', showbtn5)


let flag2 = 0
function showbtn1() {
    if (flag2 == 0) {
        content1.style.display = 'block'
        plus1.style.display = 'none'
        minus1.style.display = 'block'
        flag2 = 1
    } else {
        content1.style.display = 'none'
        plus1.style.display = 'block'
        minus1.style.display = 'none'
        flag2 = 0
    }
}

let flag3 = 0
function showbtn2() {
    if (flag3 == 0) {
        content2.style.display = 'block'
        plus2.style.display = 'none'
        minus2.style.display = 'block'
        flag3 = 1
    } else {
        content2.style.display = 'none'
        plus2.style.display = 'block'
        minus2.style.display = 'none'
        flag3 = 0
    }
}

let flag4 = 0
function showbtn3() {
    if (flag4 == 0) {
        content3.style.display = 'block'
        plus3.style.display = 'none'
        minus3.style.display = 'block'
        flag4 = 1
    } else {
        content3.style.display = 'none'
        plus3.style.display = 'block'
        minus3.style.display = 'none'
        flag4 = 0
    }
}

let flag5 = 0
function showbtn4() {
    if (flag5 == 0) {
        content4.style.display = 'block'
        plus4.style.display = 'none'
        minus4.style.display = 'block'
        flag5 = 1
    } else {
        content4.style.display = 'none'
        plus4.style.display = 'block'
        minus4.style.display = 'none'
        flag5 = 0
    }
}

let flag6 = 0
function showbtn5() {
    if (flag6 == 0) {
        content5.style.display = 'block'
        plus5.style.display = 'none'
        minus5.style.display = 'block'
        flag6 = 1
    } else {
        content5.style.display = 'none'
        plus5.style.display = 'block'
        minus5.style.display = 'none'
        flag6 = 0
    }
}

const sec3 = document.querySelector('.sec3')
const accept = document.querySelector('.accept')

accept.addEventListener('click', hide)

function hide() {
    setTimeout(() => {
        sec3.remove('.sec3')
    }, 300);
}