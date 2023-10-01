class List2 extends List{
constructor(item, cssClass){
    super(item)
    this.cssClass = cssClass
}

    render() {
let ul = super.render()
ul.classList.add(this.cssClass)
return ul
    }
}

let list02 = new List2(['one', 'two', 'three', 'four'], 'myUl')
document.body.appendChild(list02.render())