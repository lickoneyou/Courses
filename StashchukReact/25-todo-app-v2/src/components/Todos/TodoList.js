import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!!todos.length ? (
        todos.map((el) => (
          <Todo
            deleteTodo={deleteTodo}
            todo={el}
            key={el.id}
            toggleTodo={toggleTodo}
          ></Todo>
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  )
}

export default TodoList
