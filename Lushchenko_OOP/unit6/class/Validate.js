class Validate {
    constructor(a) {
        this.a = a;
    }
    static isNumber(p){
        return typeof p == 'number'
    }

    static isInt(p){
        return p.toFixed(0) == p
    }

    static isFloat(p){
        return p.toFixed(0) != p
    }

    static isChar(p){
        return typeof p == 'string' && p.length == 1
    }

    static isString(p){
        return typeof p == 'string'
    }

    static isBoolean(p){
        return p? true: false
    }

    static isArray(p){
        return Array.isArray(p)
    }

    static validate(p){
        return p + '.00'
    }
}