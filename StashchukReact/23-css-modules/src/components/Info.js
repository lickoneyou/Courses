import './Info.css'
import styles from './Info.module.css'

function Info() {
  return (
    <div className={styles.info}>
    <h1>Hello from the React component</h1>
    <button className='myButton'>Click me</button>
    </div>
  )
}

export default Info