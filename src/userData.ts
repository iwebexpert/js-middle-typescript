import axios from 'axios'
import { getRandomInt } from './random'

interface IView {
  name: string
  amount: number
  email: string
}

function updateView(data: IView): void {
  const elementName = document.querySelector('.user-name')
  if (elementName) {
    elementName.textContent = data.name
  }

  const elementAmount = document.querySelector('.user-amount')
  if (elementAmount) {
    elementAmount.innerHTML = data.amount + ' &#8381;'
  }

  const elementEmail = document.querySelector('.user-email')
  if (elementEmail) {
    elementEmail.textContent = data.email
  }
}

function updateUser() {
  // fetch(`https://jsonplaceholder.typicode.com/users/${getRandomInt(1, 10)}`)
  //   .then((result) => result.json())
  //   .then((result) => {
  //     updateView({
  //       name: result.name,
  //       amount: getRandomInt(1000, 10_000),
  //       email: result.email,
  //     })
  //   })

  axios
    .get(`https://jsonplaceholder.typicode.com/users/${getRandomInt(1, 10)}`)
    .then((result) => {
      updateView({
        name: result.data.name,
        amount: getRandomInt(1000, 10_000),
        email: result.data.email,
      })
    })
}

export default updateUser
