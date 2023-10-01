class Button {
constructor(width, height, background, value){
    this.width = width
    this.height = height
    this.background = background
    this.value = value
}

    render() {
let button = document.createElement('button')
button.style.width = this.width + 'px'
button.style.height = this.height + 'px'
button.style.backgroundColor = this.background
button.innerText = this.value
return button
    }
}

let button1 = new Button(80, 30 , 'yellow', 'myButton')

document.body.prepend(button1.render())