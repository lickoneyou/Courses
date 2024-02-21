let { name, surName, age } = {
  name: "",
  surName: "",
  age: "",
};

name = prompt("Ваше имя");
surName = prompt("Ваша фамилия");
age = prompt("Ваш возраст");

console.log(`Привет, ${name} ${surName}! Вам ${age}`);
