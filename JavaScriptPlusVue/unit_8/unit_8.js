// 1. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

const getArray = (num) =>
  Array(num)
    .fill(0)
    .map((el, ind) => ind + 1)

console.log(getArray(10))

// 2. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.
//doubleArray([1,2,3]) // [1,2,3,1,2,3]

const doubleArray = (arr) => arr.concat(arr)

console.log(doubleArray([1, 2, 3]))

// 3. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

const changeCollection = (...arg) => {
  return arg.map((el) => el.splice(1))
}

console.log(changeCollection([1, 2, 3], ['a', 'b', 'c']))
console.log(changeCollection([1, 2, 3]))

// 4. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

const users = [
  { name: 'Kiryl', age: 27, gender: 'male' },
  { name: 'Nadya', age: 10, gender: 'female' },
  { name: 'Vasya', age: 17, gender: 'male' },
  { name: 'Katya', age: 37, gender: 'female' },
]

const funcGetUsers = (arr, key, value) => arr.filter((el) => el[key] == value)

console.log(funcGetUsers(users, 'gender', 'male'))
