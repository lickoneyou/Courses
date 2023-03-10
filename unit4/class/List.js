class List {
constructor(item){
    this.item = item
}

    render() {
let elem = document.createElement('ul')
this.item.forEach(el => elem.innerHTML += (`<li>${el}</li>`));
console.log(elem)
return elem
    }
}

let list01 = new List(['one', 'two', 'three', 'four'])
document.body.appendChild(list01.render())