// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки

const myMap = (arr, callback) => {
  return callback(arr)
}

const handler1 = (arr) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i][0].toUpperCase() + arr[i].slice(1))
  }
  return res.join('')
}

const handler2 = (arr) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * 10)
  }
  return res.join(', ')
}

const handler3 = (arr) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(`${arr[i].name} is ${arr[i].age}`)
  }
  return res.join(', ')
}

const handler4 = (arr) => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].split('').reverse().join(''))
  }
  return res.join(', ')
}

console.log(myMap(['my', 'name', 'is', 'Trinity'], handler1))
console.log(myMap([10, 20, 30], handler2))
console.log(
  myMap(
    [
      { age: 45, name: 'Jhon' },
      { age: 20, name: 'Aaron' },
    ],
    handler3,
  ),
)
console.log(myMap(['abc', '123'], handler4))

// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в массиве и весь массив.

const myEvery = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) return false
  }
  return true
}

const handler5 = (elem) => elem <= 5

const myArr = [1, 2, 3, 4, 5]
const myArr2 = [1, 2, 3, 4, 5, 6]


console.log(myEvery(myArr, handler5));
console.log(myEvery(myArr2, handler5));

