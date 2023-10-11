let string = 'some test string'

// 1. Получить первую и последнюю буквы строки
console.log('first:', string[0], 'last', string[string.length - 1])
// 2. Сделать первую и последнюю буквы в верхнем регистреs
console.log(
  `${string[0].toUpperCase()}${string.slice(1, string.length - 1)}${string[
    string.length - 1
  ].toUpperCase()}`,
)
// 3. Найти положение слова ‘string’ в строке
console.log(string.indexOf('string'))
// 4. Найти положение второго пробела (“вручную” ничего не считать)
console.log(string.lastIndexOf(' '))
// 5. Получить строку с 5-го символа длиной 4 буквы
console.log(string.slice(5, 10))
// 6. Получить строку с 5-го по 9-й символы
console.log(string.slice(5, 10))
// 7. Получить новую строку из исходной путем удаления последних 6-и символов
// (то есть исходная строка без последних 6и символов)
console.log(string.slice(0, -6))
// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
// содержаться текст “2016”
const a = 20
const b = 16
console.log(`${a}${b}`)
