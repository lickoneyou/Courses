class Goods2 extends Goods {
  constructor(name, amount, image, count, sale) {
    super(name, amount, image, count)
    this.sale = sale
  }
  draw() {
    document.querySelector('.out-6').innerHTML = `
    <div>
    <p>${this.name} ${
      this.sale ? '<span class="red">Paccпродажа</span>' : ''
    }</p>
    <p>Amount: ${this.amount}</p>
    <img src='${this.image}'></img>
    <p>Count: ${this.count}</p>
    </div>`
  }
}
