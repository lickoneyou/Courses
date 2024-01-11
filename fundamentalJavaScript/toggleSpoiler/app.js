let btn = document.querySelector('.myBtn')
let div = document.querySelector('.myDiv')

btn.addEventListener('click', close)
window.addEventListener('keydown', closeEsc)

function close() {
  div.classList.toggle('active')
}

function closeEsc(event) {
  if (!div.classList.contains('active') && event.key === 'Escape') {
    div.classList.add('active')
  }
}
