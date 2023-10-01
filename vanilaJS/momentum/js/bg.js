const body = document.querySelector('body')

function showImage(num) {
  const img = new Image()
  img.src = `./images/${num}.jpg`
  img.classList.add('bgImage')
  body.prepend(img)
}

function getRandom(num) {
  return Math.floor(Math.random() * num) + 1
}

function init() {
  showImage(getRandom(3))
}

init()
