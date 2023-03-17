import updateUser from './userData'
import './style/main.scss'

import noteImg from './img/note.svg'

// const mainImg = <HTMLImageElement | null>document.querySelector('.main-img')
const mainImg = document.querySelector('.main-img') as HTMLImageElement | null
if (mainImg) {
  mainImg.src = noteImg
}

const mainButton = document.querySelector('.main-btn')
if (mainButton) {
  mainButton.addEventListener('click', updateUser)
}

updateUser()
