/** ЗАДАЧА 69 - Деструктуризация объектов
 *
 * Создайте функцию "mult", в которой будут умножаться
 * значения свойств x, y, z переданного объекта
 *
 * Результат умножения верните из функции
 */

function mult(params) {
  return Object.values(params).reduce((acc, el) => acc*el,1)
}

const objectWithNumbers = {
  x: 5,
  y: 20,
  z: 3,
}

// Создайте функцию здесь

const result = mult(objectWithNumbers)
console.log(result)
// 300
