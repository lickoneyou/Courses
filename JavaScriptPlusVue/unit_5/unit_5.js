// 1. Записать в виде switch case следующее условие:
// if (a === ‘block’) {
// 	console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.

const a = 'block'

switch (a) {
  case 'block':
    console.log('block')
    break
  case 'none':
    console.log('none')
    break
  case 'inline':
    console.log('inline')
    break
  default:
    console.log('other')
    break
}

//2. Из задач по условному оператору if else выполнить задачи 1 и 2 в виде тернарного оператора.

// a) Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

let b = 'hidden'

b = a === 'hidden' ? 'visible' : 'hidden'
console.log(b)

// b) Используя if, записать условие:

// a) если переменная равна нулю, присвоить ей 1;
// b) если меньше нуля - строку “less then zero”;
// c) если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let c = 1

c = c == 0 ? 1 : c < 0 ? 'less then zero' : c * 10

console.log(c);