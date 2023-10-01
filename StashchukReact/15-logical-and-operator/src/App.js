import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'
import Reset from './components/Reset'

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }
  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <Counter count={count}></Counter>
      <Button onClick={incrementCount}></Button>
      <Button onClick={incrementCount}></Button>
      {!!count && <Reset onClick={resetCount}></Reset>}
    </div>
  )
}

export default App
