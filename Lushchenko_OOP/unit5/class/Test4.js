class Test4 extends Test2 {
set testProp(a) {
    this._testProp = a*10;
}
get testProp(){
  return this._testProp >100? this._testProp: false
}
}

let test4 = new Test4()
test4.testProp = 400
console.log(test4.testProp)