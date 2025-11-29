import { useNavigate } from 'react-router-dom'
import './WebtoonReader.css'

const WebtoonReader = () => {
  const navigate = useNavigate()

  return (
    <div className="webtoon-reader">
      <button onClick={() => navigate('/')}>← Retour</button>
      <h1>Lecteur Webtoon</h1>
      <p>On va créer ça à l'étape 3 !</p>
    </div>
  )
}

export default WebtoonReader