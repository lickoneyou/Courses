import './App.css'
import React, { useState } from 'react'

function App() {
  const [inpState, setInpState] = useState([])
  const [value, setValue] = useState('')

  const h1 = React.createElement('h1', {}, 'unit_08.')
  const h2 = React.createElement('h2', { className: 'text-orange' }, 'header 2')
  const p = React.createElement('p', { style: { color: 'red' } }, 'his is p')
  const input = React.createElement('input', { value: 55 })
  const p1 = React.createElement('p', {}, 'hi')
  const p2 = React.createElement('p', {}, 'world')
  const div = React.createElement('div', { className: 'text-grey' }, [p1, p2])

  const input2 = React.createElement('input', {
    value: value,
    onChange: function (event) {
      setValue(event.target.value)
    },
  })
  const button = React.createElement(
    'button',
    { onClick: () => setInpState([...inpState, value]) },
    'Click',
  )

  return (
    <>
      {h1}
      {h2}
      {p}
      {input}
      {div}
      <hr></hr>
      {input2}
      {button}
      <ul>
        {inpState.map((el, ind) => (el ? <li key={ind+el}>{el}</li> : false))}
      </ul>
    </>
  )
}

export default App
