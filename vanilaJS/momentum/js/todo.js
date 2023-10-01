const todoForm = document.querySelector('.js-todoForm')
const todoInput = todoForm.querySelector('input')
const todoLlist = document.querySelector('.js-todoList')

const TODOS_LS = 'todos'
let todos = []

function loadTodos() {
  const todos = localStorage.getItem(TODOS_LS)
  if (todos) {
    const parseTodos = JSON.parse(todos)
    parseTodos.forEach((el) => showTodos(el.name))
  }
}

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(todos))
}

function deleteTodo(event) {
  const li = event.target.parentNode
  todoLlist.removeChild(li)
  todos = todos.filter((el) => el.id != li.id)
  saveTodos()
}

function showTodos(text) {
  const li = document.createElement('li')
  const delBtn = document.createElement('button')
  delBtn.addEventListener('click', deleteTodo)
  const span = document.createElement('span')
  const newId = todos.length + 1
  delBtn.innerText = 'X'
  span.innerText = text

  li.appendChild(delBtn)
  li.appendChild(span)
  li.id = newId
  todoLlist.appendChild(li)

  const todoObject = {
    name: text,
    id: newId,
  }

  todos.push(todoObject)
  saveTodos()
}

function submitHandler(event) {
  event.preventDefault()
  const currentValue = todoInput.value
  showTodos(currentValue)
  todoInput.value = ''
}

function init() {
  loadTodos()
  todoForm.addEventListener('submit', submitHandler)
}

init()
