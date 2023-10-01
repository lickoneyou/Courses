;(function () {
  const todoList = document.getElementById('todo-list')
  const userSelect = document.getElementById('user-todo')
  const form = document.querySelector('form')

  let todos = []
  let users = []

  document.addEventListener('DOMContentLoaded', initApp)
  form.addEventListener('submit', hendleSubmit)

  function getUserName(userId) {
    const user = users.find((user) => user.id === userId)
    return user.name
  }

  function printToDo({ id, userId, title, completed }) {
    const li = document.createElement('li')
    li.className = 'todo-item'
    li.dataset.id = id
    li.innerHTML = `<span>${title} <i>By</i> <b>${getUserName(
      userId,
    )}</b></span>`

    const status = document.createElement('input')
    status.type = 'checkbox'
    status.checked = completed
    status.addEventListener('change', hendleToDoChange)

    const close = document.createElement('span')
    close.innerHTML = '&times;'
    close.className = 'close'
    close.addEventListener('click', hendleClose)

    li.prepend(status)
    li.append(close)

    todoList.prepend(li)
  }

  function createUserOption(user) {
    const option = document.createElement('option')
    option.value = user.id
    option.innerText = user.name

    userSelect.append(option)
  }

  function removeTodo(todoId) {
    todos.filter((todo) => todo.id !== todoId)

    const todo = todoList.querySelector(`[data-id="${todoId}"]`)
    todo.querySelector('input').removeEventListener('change', hendleToDoChange)
    todo.querySelector('.close').removeEventListener('click', hendleClose)

    todo.remove()
  }

  function alertErr(e) {
    alert(e.message)
  }

  function initApp() {
    Promise.all([getAllTodos(), getAllUsers()]).then((values) => {
      ;[todos, users] = values

      todos.forEach((todo) => printToDo(todo))
      users.forEach((user) => createUserOption(user))
    })
  }

  function hendleSubmit(e) {
    e.preventDefault()

    createToDo({
      userId: 1,
      id: Number(form.user.value),
      title: form.todo.value,
      completed: false,
    })
  }

  function hendleToDoChange() {
    const todoId = this.parentElement.dataset.id
    const complited = this.checked

    toggleToDoComplite(todoId, complited)
  }

  function hendleClose() {
    const todoId = this.parentElement.dataset.id

    deleteToDo(todoId)
  }

  async function getAllTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()

    return data
  }

  async function getAllUsers() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()

      return data
    } catch (error) {
      alertErr(error)
    }
  }

  async function createToDo(todo) {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const todoId = await res.json()

      printToDo({ id: todoId, ...todo })
    } catch (error) {
      alertErr(error)
    }
  }

  async function toggleToDoComplite(todoId, completed) {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        {
          method: 'PATCH',
          body: JSON.stringify({ completed }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      if (!res.ok) {
        throw new Error('Failed to connect')
      }
    } catch (error) {
      alertErr(error)
    }
  }

  async function deleteToDo(todoId) {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      if (res.ok) {
        removeTodo(todoId)
      }
    } catch (error) {
      alertErr(error)
    }
  }
})()
