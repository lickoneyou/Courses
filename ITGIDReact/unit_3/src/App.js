import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About'
import Category from './Components/Category'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Error404 from './Components/Error404'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cat" element={<Category />} />
          <Route path="/cat/:catID" element={<Category />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
