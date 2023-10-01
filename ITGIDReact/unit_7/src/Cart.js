import React from 'react'

class Cart extends React.Component {
  constructor(props) {
    super()
    this.props = props
  }

  getGoodsFromArr = (art) => {
    for (let i = 0; i < this.props.goods.length; i++) {
      if (art == this.props.goods[i]['id']) {
        return this.props.goods[i]
      }
    }
  }

  renderObj = () => {
    let out = []
    for (let key in this.props.cart) {
      let goods = this.getGoodsFromArr(key)
      out.push(
        <tr key={key}>
          <td>{goods['title']}</td>
          <td>{this.props.cart[key]}</td>
          <td>{this.props.cart[key] * goods['price']}</td>
        </tr>,
      )
    }
    return out
  }

  render() {
    return (
      <div className="cart-field">
        <h1>Корзина</h1>
        <table>
          <tbody>
            <tr>
              <th>Art</th>
              <th>Count</th>
              <th>Cost</th>
            </tr>
            {this.renderObj()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Cart
