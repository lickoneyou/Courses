import { useEffect, useState } from 'react'
import Post from './Post'

const API = 'https://jsonplaceholder.typicode.com/posts'
function Posts() {
  const [post, setPost] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async function () {
      try {
        const res = await fetch(API)
        const posts = await res.json()
        setPost(posts)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        post.map((el) => <Post {...el} key={el.id}></Post>)
      )}
    </>
  )
}

export default Posts
