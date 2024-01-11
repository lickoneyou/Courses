// 1. Создать объект с полем product, равным ‘iphone’
const obj = {
  product: 'iphone',
}
// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
obj.price = 1000
obj.currency = 'dollar'
// 3. Добавить поле details, которое будет содержать объект с полями model и color
obj.details = { model: 'X', color: 'white' }

console.log(obj)
