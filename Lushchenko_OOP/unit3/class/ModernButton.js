class ModernButton extends Button{
  constructor(width, height, background, value, borderRadius){
super(width, height, background, value)
this.borderRadius = borderRadius
  }
  render() {
   let btn = super.render()
   btn.style.borderRadius = '20px'
      return btn
     
    }
}

let modertBtn = new ModernButton('100px', '100px', 'red', 'btn2', '20px')
document.body.appendChild(modertBtn.render())