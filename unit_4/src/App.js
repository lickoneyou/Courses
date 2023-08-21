import './App.css'
import React, { useState } from 'react'

function App() {
  const div5ref = React.useRef()
  const selectRef = React.useRef()
  const block7 = React.useRef()
  const [selectValue, setSelectValue] = useState('1')
  const [divValue, setDivValue] = useState('')
  const input8 = React.useRef()

  const task1 = () => {
    console.log('task2')
  }

  const task2 = (event) => {
    console.log('work')
    event.target.classList.add('active')
  }

  const task3 = (event) => {
    console.log(event.target.value)
  }

  function count() {
    let myCount = 0
    return () => {
      myCount++
      console.log(myCount)
    }
  }

  const count4 = count()

  const task5 = (event) => {
    event.target.checked
      ? (div5ref.current.innerText = 1)
      : (div5ref.current.innerText = 0)
  }

  const task6 = () => {
    setSelectValue(selectRef.current.value)
  }

  const task7 = () => {
    block7.current.style.backgroundColor = `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`
  }

  function randomInt() {
    return Math.floor(Math.random() * (255 - 0 + 1) + 0)
  }

  const task8 = () => {
    setDivValue(input8.current.value)
  }

  return (
    <div className="App">
      <button className="task-1" onClick={task1}>
        click
      </button>
      <div className="task-2" onMouseEnter={task2}></div>
      <input className="task-3" onInput={task3} />
      <button className="task-4" onClick={count4}>
        Counter
      </button>
      <section>
        <input className="task-5" type="checkbox" onChange={task5} />
        <div className="out-5" ref={div5ref}></div>
      </section>
      <section>
        <select className="task-6" onChange={task6} ref={selectRef}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <div className="out-6">{selectValue}</div>
      </section>
      <section>
        <button className="task-7" onClick={task7}>
          myButton
        </button>
        <div className="block-7" ref={block7}></div>
      </section>
      <section>
        <input className="task-8" onKeyUp={task8} ref={input8} />
        <div className="out-8">{divValue}</div>
      </section>
    </div>
  )
}

export default App
