/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array{
    sum(){
      return this.reduce((acc,el) => acc+el,0)
    }
    onlyNumbers() {
        return this.filter(el => typeof el == 'number')
    }
}

let a = new ExtendedArray(1,2,3,4,5)

console.log(a.sum())

let b = new ExtendedArray(1,2,'a',3,6,'b')

console.log(b.onlyNumbers())
console.log(a.map(el => el*2))
b.forEach(el => console.log(el))

