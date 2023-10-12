// 1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

// func(‘a’, ‘b’, ‘c’, ‘d’) →
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }

const foo = (a, ...args) => ({ first: a, other: args })

console.log(foo(1, 2, 3, 4, 5, 6, 7))

// 2. Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {
  name: 'Google',
  info: {
    employees: ['Vlad', 'Olga'],
    partners: ['Microsoft', 'Facebook', 'Xing'],
  },
}

function getInfo({
  name = 'Unknown',
  info: {
    partners: [a, b, ...c],
  },
}) {
  console.log(name)
  console.log(a, b)
}

getInfo(organisation)

// getInfo(organisation); →
// Name: Google
// Partners: Microsoft Facebook
