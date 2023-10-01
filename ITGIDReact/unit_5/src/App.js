import React, { useState } from 'react'
import './App.css'

function App() {
  const [comments, setComments] = useState([])
  const refTask1 = React.createRef()
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [buttonCount, setButtonCount] = useState(0)
  const [change, setChange] = useState('')
  const [select, setSelect] = useState('one')
  const [color, setColor] = useState('white')
  const [divReplace, setDivReplace] = useState('')
  const [range, setRange] = useState('50')
  const [inpState, setInpState] = useState([])

  const f1 = () => {
    setComments([...comments, refTask1.current.value])
    refTask1.current.value = ''
  }

  const task2 = () => {
    let myCount = count
    myCount++
    setCount(myCount)
  }

  const task3 = (event) => {
    setText(event.target.value)
  }

  const task4 = () => {
    let myButtonCount = buttonCount
    myButtonCount++
    setButtonCount(myButtonCount)
  }

  const task5 = (event) => {
    event.target.checked ? setChange(event.target.value) : setChange(0)
  }

  const task6 = (event) => {
    setSelect(event.target.value)
  }

  function randomInt() {
    return Math.floor(Math.random() * (255 - 0 + 1) + 0)
  }

  const task7 = () => {
    setColor(`rgb(${randomInt()},${randomInt()},${randomInt()})`)
  }

  const task8 = (event) => {
    setDivReplace(replacer(event.target))
  }

  function replacer(elem) {
    return elem.value.replace(/[0-9]/g, '1').replace(/[a-z]/gi, '0')
  }

  const task9 = (event) => {
    setRange(event.target.value)
  }

  const task10 = () => {
    let input = document.querySelector('.i-10')
    setInpState([...inpState, input.value])
    input.value = ''
  }

  return (
    <div className="App">
      <section>
        <input ref={refTask1} />
        <button className="task-1" onClick={f1}>
          Click1
        </button>
        <div>
          <ul>
            {comments.map((el, ind) => (
              <li key={el + ind}>{el}</li>
            ))}
          </ul>
        </div>
      </section>
      <hr />
      <section>
        <div className="task2" onMouseEnter={task2}></div>
        <div className="out2">{count}</div>
      </section>
      <hr />
      <section>
        <input className="task-3" onInput={task3} />
        <div className="out3">{text}</div>
      </section>
      <hr />
      <section>
        <button className="task-4" onClick={task4}>
          MyButton
        </button>
        <div className="out4">{buttonCount}</div>
      </section>
      <hr />
      <section>
        <input
          className="task-5"
          type="checkbox"
          onChange={task5}
          value="check"
        />
        <div className="out-5">{change}</div>
      </section>
      <hr />
      <section>
        <select className="task-6" onChange={task6}>
          <option>one</option>
          <option>two</option>
          <option>three</option>
        </select>
        <div className="out6">{select}</div>
      </section>
      <hr />
      <section>
        <button className="task-7" onClick={task7}>
          Button 7
        </button>
        <div className="block7" style={{ backgroundColor: color }}></div>
      </section>
      <hr />
      <section>
        <input className="task-8" onKeyUp={task8} />
        <div className="out-8">{divReplace}</div>
      </section>
      <hr />
      <section>
        <input className="task-9" type={'range'} onInput={task9} />
        <div className="out-9">{range}</div>
      </section>
      <hr />
      <section>
        <input className="i-10" />
        <button className="task-10" onClick={task10}>
          MyBtn
        </button>
        <div className="out-10">
          <ul>
            {inpState.map((el, ind) => (
              <li key={el + ind}>{el}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default App
