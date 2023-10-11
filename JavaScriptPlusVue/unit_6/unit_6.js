// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.
const str = 'i am in the easycode'
let res = ''
for (let i = 0; i < str.length; i++) {
  if (i === 0) {
    res += str[i].toUpperCase()
    continue
  }
  if (str[i - 1] === ' ') {
    res += str[i].toUpperCase()
  } else res += str[i]
}

console.log(res)

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

const str2 = 'tseb eht ma i'
let res2 = ''
for (let i = str2.length - 1; i >= 0; i--) {
  res2 += str2[i]
}

console.log(res2)

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.

let res3 = 0

for (let i = 10; i > 0; i--) {
  if (res3 === 0) {
    res3 = i
    continue
  }
  res3 *= i
}

console.log(res3)

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
const str4 = 'JavaScript is a pretty good language'
let res4 = ''
for (let i = 0; i < str4.length; i++) {
  if (str4[i] === ' ') {
    res4 += str4[i + 1].toUpperCase()
    i++
  } else {
    res4 += str4[i]
  }
}

console.log(res4)

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for (const i of arr) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}

// 6. Дан объект:

let list = {
  name: 'denis',
  work: 'easycode',
  age: 29,
}

// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

for (const key in list) {
  if (typeof list[key] === 'string') {
    list[key] = list[key].toUpperCase()
  }
}

console.log(list);
