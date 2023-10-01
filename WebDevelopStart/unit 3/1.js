let staff = {
  cash: 0,
  set payroll(value) {
    this.cash = value > 0 ? value : 0
  },
  get payroll() {
    return this.cash
  },
  get advance() {
    return (this.payroll * 30) / 100 || 0
  },
  get salary() {
    return (this.payroll * 70) / 100 || 0
  },
}
staff.payroll = 100
console.log(staff.payroll)
console.log(staff.advance)
console.log(staff.salary)