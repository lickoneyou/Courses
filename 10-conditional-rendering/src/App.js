import './App.css'
import PetInfo from './components/PetInfo'

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="15" hasPet></PetInfo>
      <PetInfo animal="dog" age="5" hasPet={false}></PetInfo>
    </div>
  )
}

export default App
