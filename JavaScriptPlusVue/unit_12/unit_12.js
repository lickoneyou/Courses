// 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

const arr1 = [1, 2, 3, 5, 8, 9, 10]
const res1 = arr1.map((el) => ({ digit: el, odd: el % 2 !== 0 }))
console.log(res1)

// 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.

const arr2 = [12, 4, 50, 1, 0, 18, 40]

console.log(arr2.some((el) => el == 0))

// 3. Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true

const arr3 = ['yes', 'hello', 'no', 'easycode', 'what']

console.log(arr3.every((el) => el.length > 3))

// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

const arr4 = [
  { char: 'a', index: 12 },
  { char: 'w', index: 8 },
  { char: 'Y', index: 10 },
  { char: 'p', index: 3 },
  { char: 'p', index: 2 },
  { char: 'N', index: 6 },
  { char: ' ', index: 5 },
  { char: 'y', index: 4 },
  { char: 'r', index: 13 },
  { char: 'H', index: 0 },
  { char: 'e', index: 11 },
  { char: 'a', index: 1 },
  { char: ' ', index: 9 },
  { char: '!', index: 14 },
  { char: 'e', index: 7 },
]

// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:

const arr5 = [
  { char: 'H', index: 0 },
  { char: 'i', index: 1 },
  { char: '!', index: 2 },
] //→ “Hi!”

function sort(arr) {
  arr.sort((a, b) => a.index - b.index)
  return arr.reduce((acc,el) => acc + el.char, '')
}


console.log(sort(arr4));
console.log(sort(arr5));