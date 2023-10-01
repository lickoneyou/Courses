import React from 'react'
import { useDispatch } from 'react-redux'
import { addNewUsers } from '../action/index'

export const AddUser = () => {
  const dispatch = useDispatch()

  const formHandler = (event) => {
    event.preventDefault()
    const elements = event.target.elements

    dispatch(
      addNewUsers(
        elements.passport.value,
        elements.name.value,
        elements.age.value,
      ),
    )
  }

  return (
    <form onSubmit={formHandler}>
      <input name="passport" />
      <input name="name" />
      <input name="age" />
      <input type="submit" />
    </form>
  )
}
