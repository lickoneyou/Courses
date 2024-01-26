// 1. Получить число pi из Math и округлить его до 2-х знаков после точки

console.log(+Math.PI.toFixed(2))

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
const arr = [15, 11, 16, 12, 51, 12, 13, 51]

console.log(Math.max(...arr), Math.min(...arr))

// 3. Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой

console.log(+Math.random().toFixed(2))
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.

function randomInt(x) {
  return Math.floor(Math.random() * x)
}

console.log(randomInt(5))

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

const res = 0.6 + 0.7

console.log(+res.toFixed(1))

// 5. Получить число из строки ‘100$’
console.log(parseInt('100$'));