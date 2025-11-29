import { Routes, Route } from 'react-router-dom'
import OeuvrePage from './components/OeuvrePage/OeuvrePage'
import WebtoonReader from './components/WebtoonReader/WebtoonReader'
import './App.css'

function App() {
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