import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

const texts = ['Click me', 'dont click me', 'mb click me?']

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Counter count={count}></Counter>
      {texts.map((el, ind) => (
        <Button onClick={incrementCount} text={el} key={ind}></Button>
      ))}
    </div>
  )
}

export default App
