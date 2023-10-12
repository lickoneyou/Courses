// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:

const isParent = (parent, child) => {
  console.dir(!!child.closest(parent.localName))
}
isParent(document.body.children[0], document.querySelector('mark'))
// true так как первый див является родительским элементом для mark

isParent(document.querySelector('ul'), document.querySelector('mark'))
// false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.

// 2. Получить список всех ссылок, которые не находятся внутри списка ul
;[...document.links].forEach((el) =>
  !el.closest('ul') ? console.log(el) : false,
)
// 3. Найти элемент, который находится перед и после списка ul

console.log(document.querySelector('ul').previousElementSibling)
console.log(document.querySelector('ul').nextElementSibling)
