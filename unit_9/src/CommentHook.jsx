import React, { useState } from 'react'

const CommentHook = () => {
  const [comment, setComment] = useState([])

  const selectHandler = (value) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${value}/comments`)
      .then((res) => res.json())
      .then((data) => setComment(data))
  }

  return (
    <>
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
        {comment.map((el) => (
          <li key={el.id}>{el.body}</li>
        ))}
      </div>
    </>
  )
}

export default CommentHook
