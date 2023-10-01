import { useState } from 'react'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  function onSubmitHendler(e) {
    e.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHendler}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter new todo"
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default TodoForm
