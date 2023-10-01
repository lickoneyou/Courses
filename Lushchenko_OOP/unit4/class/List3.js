class List3 extends List {
  constructor(item, cssClass) {
    super(item)
    this.cssClass = cssClass
  }

  render() {
    let ul = super.render()
    this.cssClass.forEach((el) => ul.classList.add(el))
    return ul
  }
}

let list03 = new List3(
  ['one', 'two', 'three', 'four'],
  ['text-center', 'bold', 'text-red'],
)
document.body.appendChild(list03.render())
