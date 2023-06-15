// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1() {
  document.querySelector('.out-1').textContent = this.value
  return this.value
}

document.querySelector('.i-1').onkeyup = t1

// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(e) {
  document.querySelector('.out-2').textContent = e.keyCode
  return e.keyCode
}

document.querySelector('.i-2').onkeyup = function (e) {
  t2(e)
}

// ваше событие здесь!!!

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75

function t3(e) {
  document.querySelector('.out-3').textContent =
    e.keyCode >= 48 && e.keyCode <= 58
}

// ваше событие здесь!!!

document.querySelector('.i-3').onkeyup = function (e) {
  t3(e)
}

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4() {
  document.querySelector('.out-4').textContent = this.value.toLowerCase()
}

// ваше событие здесь!!!

document.querySelector('.i-4').onkeyup = t4

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5() {
  document.querySelector('.out-5').textContent = this.value.toUpperCase()
}

// ваше событие здесь!!!

document.querySelector('.i-5').onkeyup = t5

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(e) {
  document.querySelector('.out-6').textContent += e.shiftKey ? '' : e.key
}

// ваше событие здесь!!!

document.querySelector('.i-6').onkeypress = function (e) {
  t6(e)
}

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
  const a7 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  document.querySelector('.out-7').textContent =
    a7[Math.floor(Math.random() * 9)]
}

// ваше событие здесь!!!

document.querySelector('.i-7').onkeypress = t7

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(e) {
  let obj = {
    i: 1,
    o: 0,
    l: 7,
  }
  document.querySelector('.out-8').textContent +=
    e.key in obj ? obj[e.key] : e.key
}

// ваше событие здесь!!!

document.querySelector('.i-8').onkeypress = function (e) {
  t8(e)
}

// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let count = 0
function t9(e) {
  if (e.code == 'ArrowDown') count++
  document.querySelector('.out-9').textContent = count
}

// ваше событие здесь!!!

document.querySelector('.i-9').onkeyup = function (e) {
  t9(e)
}

// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

let png = document.querySelector('.div-10 img')
let w = png.offsetWidth
let h = png.offsetHeight

function t10(e) {
  console.log(e)
  if (e.code == 'ArrowUp' || e.code == 'ArrowDown')
    png.style.height = (h += 1) + 'px'
  if (e.code == 'ArrowLeft' || e.code == 'ArrowRight')
    png.style.width = (w += 1) + 'px'
}

// ваше событие здесь!!!

document.querySelector('.i-10').onkeyup = function (e) {
  t10(e)
}

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11(e) {
  let keys = document.querySelectorAll('.key')
  keys.forEach((el) =>
    el.getAttribute('data') == e.key.toLowerCase()
      ? el.classList.add('active')
      : el.classList.remove('active'),
  )
}

document.querySelector('.i-11').onkeydown = function (e) {
  t11(e)
}

// ваше событие здесь!!!
