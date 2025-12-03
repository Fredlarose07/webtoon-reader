import { Routes, Route, useLocation } from 'react-router-dom'
import OeuvrePage from './components/OeuvrePage/OeuvrePage'
import WebtoonReader from './components/WebtoonReader/WebtoonReader'
import './App.css'
import { useEffect } from 'react'

function App() {

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<OeuvrePage />} />
        <Route path="/lire" element={<WebtoonReader />} />
      </Routes>
    </div>
  )
}

export default App