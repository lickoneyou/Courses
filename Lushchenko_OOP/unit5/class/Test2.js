class Test2 {
    set testProp(a) {
        if (a == '') {
            return false;
        }
        this._testProp = a;
        return a;
    }

    setTestProp(a) {
        if (a == '') {
            return false;
        }
        this._testProp = a;
        return a;
    }

    get testProp() {
        return this._testProp;
    }
}

let test2 = new Test2()
// test2._testProp = ''
// console.log(test2)

console.log(test2.setTestProp(''))
console.log(test2.testProp);