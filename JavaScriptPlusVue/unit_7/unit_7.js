// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)

// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

const multiply = (...arg) => {
  let res = 0
  for (let i = 0; i < arg.length; i++) {
    if (res === 0) {
      res = arg[i]
    } else {
      res *= arg[i]
    }
  }
  return res
}

console.log(multiply())
console.log(multiply(1, 2, 3))

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

const reverseString = (str) => str.split('').reverse().join('')

console.log(reverseString('test'))

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:

// getCodeStringFromText(‘hello’) // “104 101 108 108 111”

const getCodeStringFromText = (str) =>
  str
    .split('')
    .map((el) => el.charCodeAt())
    .join(' ')

console.log(getCodeStringFromText('hello'))

// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

const guessGame = (num) => {
  const randomNum = Math.floor(Math.random() * 10 + 1)
  if (num > 10) return 'your num > 10'
  if (num <= 0) return 'your num <= 0'
  if (randomNum === num) return 'Вы выиграли'
  else return `Вы не угадали ваше число ${num} а выпало число ${randomNum}`
}

console.log(guessGame(11))
console.log(guessGame(0))

console.log(guessGame(1))
