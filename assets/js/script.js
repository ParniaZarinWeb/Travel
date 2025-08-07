const form = document.querySelector('.form')
const inpUsername = document.querySelector('.username')
const inpPassword = document.querySelector('.password')
const ok = document.querySelector('.ok')

const alertBox = document.querySelector('.alert')
const alertText = document.getElementById('alertMessage')

const eyeOpen = document.querySelector('.bi-eye-fill')
const eyeClose = document.querySelector('.bi-eye-slash')

const loginSection = document.querySelector('.login')
const mainContent = document.querySelector('.content')


window.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('isLoggedIn') === 'true') {
    loginSection.style.display = 'none'
    mainContent.style.display = 'block'
  } else {
    loginSection.style.display = 'block'
    mainContent.style.display = 'none'
  }
})


eyeOpen.addEventListener('click', function () {
  inpPassword.type = 'text'
  eyeOpen.style.display = 'none'
  eyeClose.style.display = 'inline'
})

eyeClose.addEventListener('click', function () {
  inpPassword.type = 'password'
  eyeOpen.style.display = 'inline'
  eyeClose.style.display = 'none'
})


function showAlert(message) {
  alertBox.style.display = 'flex'
  alertText.innerText = message
}

ok.addEventListener('click', closeAlert)
function closeAlert() {
  alertBox.style.display = 'none'
}


form.addEventListener('submit', function (e) {
  e.preventDefault()

  if (inpUsername.value.trim() === '' || inpPassword.value.trim() === '') {
    showAlert('Please fill out both fields.')
    return
  }


  localStorage.setItem('isLoggedIn', 'true')

  loginSection.style.display = 'none'
  mainContent.style.display = 'block'
})





const btn = document.querySelector('.eyes')
const iconEye = document.querySelector('.bi-eye-fill')
const iconEyeSlash = document.querySelector('.bi-eye-slash')
const inp = document.querySelector('.password')



iconEye.addEventListener('click', changeType)
iconEyeSlash.addEventListener('click', changeType)



let flag4 = 0

function changeType() {
  if (flag == 0) {
    iconEye.style.display = 'none'
    iconEyeSlash.style.display = 'block'
    inp.type = 'text'
    flag = 1

  } else {
    iconEye.style.display = 'block'
    iconEyeSlash.style.display = 'none'
    inp.type = 'password'
    flag = 0
  }
}






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

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}"></span>`;
      }
    }
  });
});
