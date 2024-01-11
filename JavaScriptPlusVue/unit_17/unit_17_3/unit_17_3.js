// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.

const ul = document.querySelector('ul')

for (let i = 0; i < 3; i++) {
  const li = ul.querySelectorAll('li')
  let myLi = document.createElement('li')
  myLi.textContent = `item ${li.length + 1}`
  ul.appendChild(myLi)
}

// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong).

document.querySelectorAll('li > a').forEach((el) => {
  let strong = document.createElement('strong')
  strong.textContent = ' strong'
  el.appendChild(strong)
})

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

const img = document.createElement('img')
img.src =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImjxQ2Hw_dr6WU0_mBQWIhSWhxRFzbKCL3Q&usqp=CAU'
img.alt = 'picture'

document.body.prepend(img)

// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

const mark = document.querySelector('mark')
mark.textContent += 'green'
mark.classList.add('green')

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

let arr = [...document.querySelectorAll('li')].sort(
  (a, b) =>
    +b.textContent.replace(/\D/gi, '') - +a.textContent.replace(/\D/gi, ''),
)

ul.innerHTML = ''

arr.forEach((el) => ul.append(el))
