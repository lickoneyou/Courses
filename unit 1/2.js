const numbers = [
  -91,
  18,
  11,
  -23,
  -98,
  28,
  -81,
  -100,
  -7,
  -45,
  52,
  41,
  75,
  -98,
  27,
  41,
  25,
  2,
  39,
  -18,
]
let pozitiveCount = 0
let negativeCount = 0
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    pozitiveCount++
  } else {
    negativeCount++
  }
}

console.log(numbers.length)
console.log(pozitiveCount)
console.log(negativeCount)
