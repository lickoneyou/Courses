import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

function App() {
  const [todos, setTodos] = useState([])
  function addTodoHendler(text) {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }

    setTodos([...todos, newTodo])
  }

  function deleteTodoHandler(id) {
    setTodos(todos.filter((el) => el.id !== id))
  }

  function toggleTodoHandler(id) {
    setTodos(
      todos.map((el) => {
        return el.id === id
          ? { ...el, isCompleted: !el.isCompleted }
          : { ...el }
      }),
    )
  }

  function resetTodosHandler() {
    setTodos([])
  }

  function deleteCompletedTodosHandler() {
    setTodos(todos.filter((el) => !el.isCompleted))
  }

  const completedTodosCount = todos.filter((el) => el.isCompleted).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHendler} />
      {!!todos.length && (
        <TodosActions
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
          completedTodosExist={!!completedTodosCount}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  )
}

export default App
