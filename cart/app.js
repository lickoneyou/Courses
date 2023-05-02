const products = [
  { id: 1, title: 'Lenovo Yoga', price: 3000 },

  {
    id: 2,
    title: 'Acer Aspire',
    price: 1800,
  },
  {
    id: 3,
    title: 'Dell Vostro',
    price: 3400,
  },
]
let order = []

function addToBasket(productId) {
  // TODO: добавить проверку наличия товара в заказе (при наличии выдать alert, что товар уже в корзине)
  if (order.some((el) => el.id === productId)) {
    alert('Товар уже в корзине')
    return
  }
  // TODO: если товар еще не в корзине, добавить его из массива products
  else {
    order.push(products.find((el) => el.id === productId))
  }
  // Эти строчки не трогаем, они отвечают за переотрисовку страницы
  renderCart()
  rerenderTotalPrice()
}

function removeFromBasket(productId) {
  // TODO: описать логику удаления товара из корзины
  order = order.filter((el) => el.id !== productId)
  // Эти строчки не трогаем, они отвечают за переотрисовку страницы
  renderCart()
  rerenderTotalPrice()
}

function rerenderTotalPrice() {
  // TODO: опишите функционал подсчета общей стоимости заказа
  const totalPrice = order.reduce((acc, el) => acc + el.price, 0)
  // Не меняйте эту строчку
  document.getElementById('total').innerText = totalPrice
}

function renderCart() {
  const cart = document.getElementById('basket-items')
  cart.innerHTML = ''
  order.forEach((item) => {
    const el = document.createElement('li')
    el.innerText = item.title
    el.onclick = () => removeFromBasket(item.id)
    cart.appendChild(el)
  })
}
