import React, { useState } from 'react'
import CommentsListHook from './CommentsListHook'

const Comment2Hook = () => {
  const [comment, setComment] = useState([])

  const selectHandler = (value) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${value}/comments`)
      .then((res) => res.json())
      .then((data) => setComment(data))
  }

  return (
    <div>
      <p>Choose post ID:</p>
      <select
        onChange={(event) => {
          selectHandler(event.target.value)
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div>
        <CommentsListHook data={comment} />
      </div>
    </div>
  )
}

export default Comment2Hook
