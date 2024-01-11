import './Post.css'

function Post({ userId, id, title, body }) {
  return (
    <div className='post'>
      <h2>{title}</h2>
      <small>id: {id}</small>
      <p>{body}</p>
      <h3>userId: {userId}</h3>
    </div>
  )
}

export default Post
