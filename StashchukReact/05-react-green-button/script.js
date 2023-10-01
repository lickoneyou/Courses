const App = ({newButtonText, buttonClass}) => {
  const [buttonText, setButtonText] = React.useState(newButtonText)
  const [classesList, setClassesList] = React.useState(buttonClass)
  const onButtonClick = () => {
    setClassesList('greenBtn')
    setButtonText('hello from react')}
  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>{buttonText}</button>
    </div>
  )
}

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)
root.render(<App newButtonText='Click me' buttonClass='redBtn'/>)
