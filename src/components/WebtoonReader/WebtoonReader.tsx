import { useNavigate } from 'react-router-dom'
import './WebtoonReader.css'
import panel1 from '../../assets/images/Samba12/CH1.jpg'
import panel2 from '../../assets/images/Samba12/CH2.jpg'

const WebtoonReader = () => {
  const navigate = useNavigate()

  return (
    <div className="webtoon-reader">
      <header className="reader-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Retour
        </button>
      </header>
      
      <div className="reader-container">
        <img src={panel1} alt="Panel 1" />
        <img src={panel2} alt="Panel 2" />
        
        <div className="end-card">
          <h2 className="end-title">Fin de l'épisode</h2>
          <p className="end-subtitle">Merci d'avoir lu !</p>
          <p className="end-text">
            Tu as aimé notre travail, dis-le nous en nous suivant sur Instagram 💛
          </p>
          <button className="end-button">
            Suivre sur Insta
          </button>
        </div>
      </div>
    </div>
  )
}

export default WebtoonReader