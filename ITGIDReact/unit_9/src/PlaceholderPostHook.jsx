import React, { useEffect, useState } from 'react'

const PlaceholderPostHook = () => {
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then((response) => response.json())
      .then((data) => setPost(data))
  }, [])

  return (
    <div>
      {post.map((el) => (
        <section key={el.id}>
          <h2>
            {el.id} {el.title}
          </h2>
          <p>{el.body}</p>
        </section>
      ))}
    </div>
  )
}

export default PlaceholderPostHook
