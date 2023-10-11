// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let a = 'hidden'

a === 'hidden' ? (a = 'visible') : (a = 'hidden')
console.log(a)

// 2. Используя if, записать условие:
// a) если переменная равна нулю, присвоить ей 1;
// b) если меньше нуля - строку “less then zero”;
// c) если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).

let b = -1

if (b == 0) b = 1
else if (b < 0) b = 'less then zero'
else b *= 10

console.log(b)

// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }

if (car.age > 5) {
  console.log('Need Repair')
  car.needRepair = true
} else {
  car.needRepair = false
}

console.log(car)

// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
let item = { name: 'Intel core i7', price: '100$', discount: '15%' }

if (item.discount && item.price) {
  item.priceWithDiscount = `${
    parseInt(item.price) -
    (parseInt(item.price) * parseInt(item.discount)) / 100
  }$`
  console.log(item.priceWithDiscount)
} else {
  console.log(item.price)
}
console.log(item)

// 5. Дан следующий код:

let product = {
  name: 'Яблоко',
  price: '10$',
}

let min = 10 // минимальная цена
let max = 20 // максимальная цена

// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
  console.log(product.name)
} else console.log('товаров не найдено')
