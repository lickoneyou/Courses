const form = document.querySelector('.js-form')
const input = form.querySelector('input')
const greetings = document.querySelector('.js-greetings')

const SHOWING_CN = 'showing'
const USER_LS = 'currentUsername'

function saveUsername(text) {
  localStorage.setItem(USER_LS, text)
}

function showGreeting(text) {
  greetings.innerText = `Привет, ${text}`
  greetings.classList.add(SHOWING_CN)
  form.classList.remove(SHOWING_CN)
}

function submitHandler(event) {
  event.preventDefault()
  const inputValue = input.value
  showGreeting(inputValue)
  saveUsername(inputValue)
}

function askForUsername() {
  form.classList.add(SHOWING_CN)
  form.addEventListener('submit', submitHandler)
}

askForUsername()

function loadUsername() {
  const currentUsername = localStorage.getItem(USER_LS)

  if (currentUsername) {
    showGreeting(currentUsername)
  }
}

function init() {
  loadUsername()
}

init()
