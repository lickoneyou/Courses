// 1. Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен.

function promiseCreator(time, text) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(text);
    }, time);
  });
}
const prom = promiseCreator(500, "Ok!");
prom.then(console.log);
// Ok!
