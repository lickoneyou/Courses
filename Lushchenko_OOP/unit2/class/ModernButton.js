class ModernButton extends Button {
  constructor(width, height, background, value, borderRadius = 0){
    super(width, height, background, value)
    this.borderRadius = borderRadius
  }
  render() {
 let button2 = super.render()
button2.style.borderRadius = this.borderRadius + 'px'
   return button2
  }
}

let button2 = new ModernButton(80, 30 , 'orange', 'myButton2', 20)

document.body.prepend(button2.render())