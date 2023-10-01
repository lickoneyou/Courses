import './App.css'
import PlaceholderPostHook from './PlaceholderPostHook'
import CommentHook from './CommentHook'
import Comment2Hook from './Comment2Hook'

function App() {
  return (
    <div className="App">
      <Comment2Hook />
      <hr></hr>
      <CommentHook />
      <hr></hr>
      <PlaceholderPostHook />
    </div>
  )
}

export default App
