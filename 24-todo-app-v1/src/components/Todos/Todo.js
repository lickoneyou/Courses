import styles from './Todo.module.css'
import { RiTodoFill } from 'react-icons/ri'

function Todo({ todo, deleteTodo, index }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
}

export default Todo
