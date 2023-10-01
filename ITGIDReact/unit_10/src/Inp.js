import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTest, text } from './app/taskReducerSlice'

const Inp = () => {
  const inpRef = useRef()
  const task1 = useSelector(selectTest)
  const dispatch = useDispatch()

  const textHandler = () => {
    dispatch(text(inpRef.current.value))
  }

  return (
    <div>
      <hr></hr>
      <div>
        <input ref={inpRef} />
        <button onClick={textHandler}>text</button>
        <p>{task1}</p>
      </div>
    </div>
  )
}

export default Inp
