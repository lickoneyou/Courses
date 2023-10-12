// Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head
// 2. body
// 3. все дочерние элементы body и вывести их в
// консоль.
// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы

console.log(document.head)
console.log(document.body)
console.log(document.querySelectorAll('body > *'))
console.log(document.querySelector('div'))
console.log(document.querySelectorAll('div > *'))
document
  .querySelectorAll('div > *')
  .forEach((el, ind, arr) =>
    ind != 0 && ind != arr.length - 1 ? console.log(el) : false,
  )
