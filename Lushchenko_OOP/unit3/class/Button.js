class Button {
constructor(width, height, background, value){
    this.width = width
    this.height = height
    this.background = background
    this.value = value
}

    render() {
        let btm = document.createElement('button')
        btm.style.width = this.width
        btm.style.height = this.height
        btm.style.background = this.background
        btm.innerHTML = this.value

return btm
    }
}

let btm = new Button('50px', '50px', 'green', 'btm1')

document.body.appendChild(btm.render())