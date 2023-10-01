const clockContainer = document.querySelector('.js-clock')
const clockTitle = clockContainer.querySelector('h1')

function getTime() {
  const date = new Date()
  const m = date.getMinutes()
  const h = date.getHours()

  clockTitle.innerHTML = `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}`
}

function init() {
  getTime()
  setInterval(getTime, 1000)
}

init()
