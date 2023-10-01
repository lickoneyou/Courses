class Goods {
  constructor(name, amount, image, count) {
    this.name = name
    this.amount = amount
    this.image = image
    this.count = count
  }
  draw() {
    document.querySelector('.out-4').innerHTML = `
    <div>
    <p>${this.name}</p>
    <p>Amount: ${this.amount}</p>
    <img src='${this.image}'></img>
    <p>Count: ${this.count}</p>
    </div>`
  }
}
