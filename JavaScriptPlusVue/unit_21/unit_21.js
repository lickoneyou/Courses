// 1. Есть класс Planet
function PlanetWithSatellite(name, satelliteName) {
  this.name = name;
  this.satelliteName = satelliteName;
  this.getName = function () {
    return (
      "Planet name is " + this.name + ". The satellite is " + this.satelliteName
    );
  };
}
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
var earth = new PlanetWithSatellite("earth", "moon");
// console.log(earth.getName());
earth.getName(); // 'Planet name is earth. The satellite is moon’

// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”.

// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

class Build {
  constructor(name, numberOfFloors) {
    this.name = name;
    this.numberOfFloors = numberOfFloors;
  }
  getNumberOfFloors() {
    return this.numberOfFloors;
  }
  setNumberOfFloors(floors) {
    this.numberOfFloors = floors;
  }
}

class House extends Build {
  constructor(name, numberOfFloors, numberOfApartments) {
    super(name, numberOfFloors);
    this.numberOfApartments = numberOfApartments;
  }
  getNumberOfApartments() {
    return {
      floors: this.numberOfFloors,
      apartments: this.numberOfFloors * this.numberOfApartments,
    };
  }
}

class Supermarket extends Build {
  constructor(name, numberOfFloors, numberOfMarket) {
    super(name, numberOfFloors);
    this.numberOfMarket = numberOfMarket;
  }
  getNumberOfApartments() {
    return {
      floors: this.numberOfFloors,
      markets: this.numberOfFloors * this.numberOfMarket,
    };
  }
}

// const house = new House("Myhouse", 5, 10);
// console.log(house);
// console.log(house.getNumberOfFloors());
// house.setNumberOfFloors(10);
// console.log(house.getNumberOfFloors());
// console.log(house.getNumberOfApartments());

// const market = new Supermarket('MyMarket', 1, 12)
// console.log(market);
// console.log(market.getNumberOfFloors());
// market.setNumberOfFloors(2);
// console.log(market.getNumberOfFloors());
// console.log(market.getNumberOfApartments());

// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену).
// Создайте наследника класса “Мебель” под названием “ОфиснаяМебель”. Придумайте ему несколько свойству, которые будут характерны только для этого класса. Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

class Furniture {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getInfo() {
    console.log(`Price: ${this.price}`, `Name: ${this.name}`);
  }
}

class OfficeFurniture extends Furniture {
  constructor(name, price, color) {
    super(name, price);
    this.color = color;
  }
  getInfo() {
    console.log(
      `Price: ${this.price}`,
      `Name: ${this.name}`,
      `Color: ${this.color}`
    );
  }
}

const myFurniture = new OfficeFurniture("desk", 10, "red");
myFurniture.getInfo();

// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)

class User {
  constructor(name) {
    this.name = name;
    this.dateReg = new Date();
  }
  getInfo() {
    return { name: this.name, date: this.dateReg };
  }
}

class Admin extends User {
  constructor(name, superAdmin = false) {
    super(name);
    this.dateReg = new Date();
    this.superAdmin = superAdmin;
  }
  getInfo() {
    return { name: this.name, date: this.dateReg, superAdmin: this.superAdmin };
  }
}

const admin = new Admin("Vasua");
// console.log(admin);
// console.log(admin.getInfo());

class Guest extends User {
  constructor(name) {
    super(name);
    this.dateReg = new Date();
    this.validDate = new Date(new Date().setDate(this.dateReg.getDate() + 7));
  }
  getInfo() {
    return { name: this.name, date: this.dateReg, validDate: this.validDate };
  }
}

const guest = new Guest("qwer");
console.log(guest);
console.log(guest.getInfo());
