/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
    {carBrand:'lex', price:10, isAvailableForSale:true},
    {carBrand:'bmw', price:30, isAvailableForSale:true},
    {carBrand:'poche', price:20, isAvailableForSale:true},
]

cars.push({carBrand:'zil', price:20, isAvailableForSale:true})
console.log(cars)