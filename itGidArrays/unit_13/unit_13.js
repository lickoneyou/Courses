// TASK 01
// По нажатию b-1 выполняется функция f1. Функция с помощью flat должна двумерный массив a1 превратить в одномерный a1_res. Вывести a1_res в out-1. Разделитель - пробел.

let a1 = [13, [4, 5], 22, [6, 7], [26, 35, 72]]
let a1_res = []

const f1 = () => {
  a1_res = a1.flat()

  document.querySelector('.out-1').innerText = a1_res.join(' ')
}

// TASK 02
// По нажатию b-2 выполняется функция f2. Функция с помощью flat должна массив a2 превратить в одномерный a2_res. Вывести a2_res в out-2. Разделитель - пробел. Обратите внимание, что при проверке будет взят массив вложенности не более указанного.

let a2 = [13, [11, 22], [33, 44, 55], [66, 77, 88], 72]
let a2_res = []

const f2 = () => {
  a2_res = a2.flat()

  document.querySelector('.out-2').innerText = a2_res.join(' ')
}

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция с помощью flat должна массив a3 превратить в одномерный a3_res. Вывести a3_res в out-3. Разделитель - пробел. Обратите внимание, что при проверке будет взят массив вложенности не более указанного.

let a3 = [13]
a3[100] = [77, 88, 99]
a3[200] = [11, 22, 33, [55]]
let a3_res = []

const f3 = () => {
  a3_res = a3.flat(Infinity)

  document.querySelector('.out-3').innerText = a3_res.join(' ')
}

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция с помощью fill должна изменить массив a4 так, что со 2 индекса по 5 будут залиты числом 7. Выведите a4 в out-4, разделитель пробел.

let a4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const f4 = () => {}

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция с помощью fill должна изменить массив a5 так, что со 2 индекса все элементы будут равны 0. Выведите a5 в out-5, разделитель пробел.

let a5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const f5 = () => {
  a5.fill(0, 2)

  document.querySelector('.out-5').innerText = a5.join(' ')
}

// TASK 06
// По нажатию b-6 выполняется функция f6. Напишем функцию, которая принимает 2 параметра - количество элементов массива и число, которым этот массив нужно заполнить. Возвращает массив указанной размерности заполненный указанным числом.

const f6 = (l, n) => {
  return Array(l).fill(n)
}

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция принимает параметр - длину массива и возвращает массив заполненный случайными целыми числами от 0 до 100 включительно указанной длины.

const f7 = (l) => {
  return Array(l)
    .fill(0)
    .map((el) => (el = Math.ceil(Math.random() * 100)))
}

// TASK 08
// По нажатию b-8 выполняется функция f8. Функция должна получить ключи из массива a8 и поместить их в массив a8_res. Результат (a8_res) - вывести в out-8. Разделитель пробел.

let a8 = [11, 22]
a8[100] = 200
a8[200] = 300
let a8_res = []

const f8 = () => {
  a8_res = Object.keys(a8)

  document.querySelector('.out-8').innerText = a8_res.join(' ')
}

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция должна получить ключи из массива a9 и поместить их в массив a9_res. Результат (a9_res) - вывести в out-9. Разделитель пробел.

let a9 = {
  t: 13,
  b: 22,
  hi: 64,
}

let a9_res = []

const f9 = () => {
  a9_res = Object.keys(a9)

  document.querySelector('.out-9').innerText = a9_res.join(' ')
}

// TASK 10
// По нажатию b-10 выполняется функция f10. Функция эмулирует работу keys с помощью цикла. Перебирает массив a10 и заполняет массив a10_res теми ключами, у которых значения не равны undefined. Результат, массив a10_res выводится в out-10. Разделитель пробел.

let a10 = [11, 22]
a10[100] = 200
a10[200] = 300

let a10_res = []

const f10 = () => {
  for (const key in a10) {
    a10_res.push(key)
  }

  document.querySelector('.out-10').innerText = a10_res.join(' ')
}

document.querySelector('.b-1').addEventListener('click', f1)
document.querySelector('.b-2').addEventListener('click', f2)
document.querySelector('.b-3').addEventListener('click', f3)
document.querySelector('.b-4').addEventListener('click', f4)
document.querySelector('.b-5').addEventListener('click', f5)
document.querySelector('.b-6').addEventListener('click', () => {
  let arr = f6(4, 7) // ожидаю [7,7,7,7];
  document.querySelector('.out-6').innerHTML = arr
})
document.querySelector('.b-7').addEventListener('click', () => {
  let arr = f7(4) // ожидаю [99, 23, 11, 3]; например
  document.querySelector('.out-7').innerHTML = arr
})
document.querySelector('.b-8').addEventListener('click', f8)
document.querySelector('.b-9').addEventListener('click', f9)
document.querySelector('.b-10').addEventListener('click', f10)
