const userImg = document.getElementById('user')
const accountPopUp = document.querySelector('.account')

const burgerMenuIcon = document.querySelector('.burger-menu')
const closeIcon = document.querySelector('.close')
const lateralMenu = document.querySelector('.lateral-menu')

userImg.addEventListener('click', toggleUserPopUp)

burgerMenuIcon.addEventListener('click', openLateralMenu)
closeIcon.addEventListener('click', closeLateralMenu)

function toggleUserPopUp() {
  accountPopUp.classList.toggle('hidden')
}

function openLateralMenu() {
  lateralMenu.classList.add('activated')
}

function closeLateralMenu() {
  lateralMenu.classList.remove('activated')
}
