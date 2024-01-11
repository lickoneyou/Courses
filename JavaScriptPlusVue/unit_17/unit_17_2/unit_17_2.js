// 1. Найти в коде список ul и добавить класс “list”

document.querySelector('ul').classList.add('list')

// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

document.querySelector('ul').nextElementSibling.nextElementSibling.id = 'link'

// 3. На li через один (начиная с самого первого) установить класс “item”

document
  .querySelectorAll('ul > li')
  .forEach((el, ind) => (ind % 2 == 0 ? el.classList.add('item') : false))
// 4. На все ссылки в примере установить класс “custom-link”
;[...document.links].forEach((el) => el.classList.add('custom-link'))
