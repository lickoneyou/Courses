enum locationDelivery {
  home = 'home',
  ofice = 'ofice',
}

interface IDeliveryHome {
  location: locationDelivery.home
  data: Date
  adress: string
}

interface IDeliveryofice {
  location: locationDelivery.ofice
  data: Date
  id: number
}

interface IProduct {
  productName: string
  price: number
}

type loc = 'home' | 'ofice'

class Cart {
  products: IProduct[] = []
  delivery: IDeliveryHome | IDeliveryofice | null = null
  constructor()
  constructor(location: loc, adress: string)
  constructor(location: loc, adress: number)
  constructor(location?: loc, adress?: string | number) {
    if (location == locationDelivery.home && typeof adress === 'string') {
      this.delivery = {
        location: locationDelivery.home,
        data: new Date(),
        adress,
      }
    } else if (
      location == locationDelivery.ofice &&
      typeof adress === 'number'
    ) {
      this.delivery = {
        location: locationDelivery.ofice,
        data: new Date(),
        id: adress,
      }
    }
  }

  addProduct(productName: string, price: number): void {
    this.products.push({ productName, price })
  }

  deleteProduct(prodName: string): void {
    this.products = this.products.filter(
      (prod) => prod.productName !== prodName,
    )
  }

  costProducts(): void {
    console.log(this.products.reduce((acc, el) => acc + el.price, 0))
  }

  checkout(): void {
    if (this.delivery == null && this.products.length == 0) {
      console.log('Add products in your cart and add adress')
      return
    } else if (this.delivery == null && this.products.length > 0) {
      console.log('Add adress')
      return
    } else if (this.delivery && this.products.length == 0) {
      console.log('Add products in your cart')
      return
    } else {
      console.log('Delivery completed')
      return
    }
  }
}

const cart = new Cart('ofice', 1)
cart.addProduct('fork', 100)
cart.addProduct('book', 300)
cart.addProduct('fish', 200)
cart.deleteProduct('fork')

cart.costProducts()

cart.checkout()
console.log(cart.delivery)

console.log(cart)
