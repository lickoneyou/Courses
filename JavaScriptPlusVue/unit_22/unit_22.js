// 1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):

function Component(tagName) {
  this.tagName = tagName || "div";
  this.node = document.createElement(tagName);
}

// Пример вызова:

const comp = new Component("span");
// console.log(comp);

class Component2 {
  constructor(tagName) {
    this.tagName = tagName || "div";
    this.node = document.createElement(tagName);
  }
}

const comp2 = new Component2("span");
// console.log(comp2);

// 2. Реализовать конструктор и методы в ES6 синтаксисе:

function Component3(tagName) {
  this.tagName = tagName || "div";
  this.node = document.createElement(tagName);
}

Component3.prototype.setText = function (text) {
  this.node.textContent = text;
};

class Component4 {
  constructor(tagName) {
    this.tagName = tagName || "div";
    this.node = document.createElement(tagName);
  }
  setText(text) {
    this.node.textContent = text;
  }
}

const comp4 = new Component4("span");
comp4.setText(123);
// console.log(comp4);

// 3. Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.

class Calculator {
  constructor(res) {
    this.res = res;
  }
  minus(num) {
    this.res -= num;
  }
  plus(num) {
    this.res += num;
  }
  mult(num) {
    this.res *= num;
  }
  divide(num) {
    this.res /= num;
  }
  set result(value) {
    this.res = value;
  }

  get result() {
    return this.res;
  }
}

const myCalc = new Calculator(10);
myCalc.minus(3); 
myCalc.plus(7);
myCalc.result = 30;
myCalc.divide(2);
myCalc.mult(4);
console.log(myCalc.result);


//