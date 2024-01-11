import Todo from './Todo'
import styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!!todos.length ? (
        todos.map((el, ind) => (
          <Todo index={ind} deleteTodo={deleteTodo} todo={el} key={ind}></Todo>
        ))
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  )
}

export default TodoList
