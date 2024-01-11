// 1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};

const rectangle = {
  width: 10,
  height: 20,
  getSquare() {
    return this.height * this.width
  },
}

console.log(rectangle.getSquare())

// 2. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
  price: 10,
  discount: '15%',
  getPrice() {
    return this.price
  },
  getPriceWithDiscount() {
    return this.price - (this.price * parseInt(this.discount)) / 100
  },
}
console.log(price.getPrice())
console.log(price.getPriceWithDiscount())

// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:

const object = {
  inc() {
    this.height++
    return this.height
  },
}

object.height = 10
object.inc()
console.log(object.height) // 11;

// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:

const numerator = {
  value: 1,
  double: function () {
    this.value *= 2
    return this
  },
  plusOne: function () {
    this.value++
    return this
  },
  minusOne: function () {
    this.value--
    return this
  },
}
numerator.double().plusOne().plusOne().minusOne()
console.log(numerator.value) // 3

// 5. Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)

const products = {
  car: 100,
  plane: 200,
  ship: 150,
  allPrice() {
    let res = { allPrice: 0, allGoods: 0 }
    for (const key in this) {
      if (typeof this[key] === 'number') {
        res.allPrice += this[key]
        res.allGoods++
      }
    }
    return res
  },
}

console.log(products.allPrice())

// 6. Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.

const products2 = {
  pc: 500,
  xBox: 300,
  PS: 200,
  switch: 100,
  allPrice: products.allPrice,
}

console.log(products2.allPrice())

// 7. Даны объект и функция:
let sizes = { width: 5, height: 10 }

const getSquare = function () {
  return this.width * this.height
}
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes

console.log(getSquare.call(sizes))

// 4.  
let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);
console.log(getElementHeight()); // undefined

// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.
