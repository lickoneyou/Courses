class Test {
    set testProp(a) {
        this._testProp = a;
    }
    get testProp() {
        return this._testProp;
    }
}

let test1 = new Test()
test1.testProp = 'qwer'
console.log(test1.testProp)