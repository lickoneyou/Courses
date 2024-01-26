// 1. Найти параграф и получить его текстовое содержимое (только текст!)

console.log(document.querySelector('p').textContent)

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).

const nodeInfo = (domElem) => ({
  type: domElem.localName,
  child: domElem.childNodes.length,
})

console.log(nodeInfo(document.querySelector('p')))

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]

console.log(
  [...document.querySelectorAll('ul > li')].map((el) => el.textContent),
)

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

document.querySelector('p').childNodes.forEach(el => el.nodeName === '#text' ? el.data = '-text-' : false)

