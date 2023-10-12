// 1. Создайте функцию которая бы умела делать:

const minus = (num1 = 0) => (num2 = 0) => num1 - num2

console.log(minus(10)(6)) // 4
console.log(minus(5)(6)) // -1
console.log(minus(10)()) // 10
console.log(minus()(6)) // -6
console.log(minus()()) // 0

console.log('--------')

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker(num1) {
  return function (num2) {
    return (num1 *= num2)
  }
}
const multiply = multiplyMaker(2)
console.log(multiply(2)) // 4 (2 * 2)
console.log(multiply(1)) // 4 (4 * 1)
console.log(multiply(3)) // 12 (4 * 3)
console.log(multiply(10)) // 120 (12 * 10)

console.log('--------')

// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

const mod = (str = '') => ({
  setStr(newStr) {
    str = newStr + ''
  },
  getStr() {
    return str
  },
  getStrLenght() {
    return str.length
  },
  getReverseStr() {
    return str.split('').reverse().join('')
  },
})

let obj = mod()

obj.setStr('abcde')

console.log(obj.getStr())
console.log(obj.getStrLenght())
console.log(obj.getReverseStr())

console.log('--------')

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calc = (value = 0) => ({
  setValue(num) {
    value = num
    return this
  },
  plus(num) {
    value += num
    return this
  },
  multiply(num) {
    value *= num
    return this
  },
  degree(num) {
    value = value ** num
    return this
  },
  getValue() {
    console.log(value)
    return value
  },
})

const myCalc = calc()

// myCalc.setValue(10)
// myCalc.plus(5)
// myCalc.multiply(2)
// console.log(myCalc.getValue())

myCalc.setValue(10).degree(2).getValue()
