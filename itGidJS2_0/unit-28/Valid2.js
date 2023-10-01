class Valid2 extends Valid {
  constructor(email, password) {
    super(email, password)
    this.isValid = false
    this.emaiError = ''
    this.passwordError = ''
  }
  validate() {
    if (this.password.length > 6) this.isValid = true
    if (this.password.length < 6) {
      this.passwordError = 'min length 6'
      this.isValid = false
    }
    if (this.email.length <= 0) {
      this.emaiError = 'email empty'
      this.isValid = false
    }
  }
}
