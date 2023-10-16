// 1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.

const btn = document.querySelector('#btn-msg')

btn.addEventListener('click', function () {
  alert(this.dataset.text)
})

// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

btn.addEventListener('mouseover', function () {
  this.style.backgroundColor = 'red'
})

btn.addEventListener('mouseout', function () {
  this.style.backgroundColor = ''
})

// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

const tag = document.querySelector('#tag')

document.body.addEventListener('click', function (e) {
  tag.textContent = `Tag: ${e.target.nodeName}`
})

// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д

const ul = document.querySelector('ul')

const generate = document.querySelector('#btn-generate')

generate.addEventListener('click', () => {
  let length = document.querySelectorAll('li').length
  const li = document.createElement('li')
  li.textContent = `Item  ${length + 1}`
  ul.append(li)
})
