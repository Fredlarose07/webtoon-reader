import { useNavigate } from 'react-router-dom'
import './WebtoonReader.css'
import panel1 from '../../assets/images/Samba12/CH1.jpg'
import panel2 from '../../assets/images/Samba12/CH2.jpg'
import ReadingProgress from '../ReadingProgress/ReadingProgress'
import { useEffect, useState } from 'react'


const WebtoonReader = () => {
  const navigate = useNavigate()
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll vers le bas → cache le header
        setIsHeaderVisible(false)
      } else {
        // Scroll vers le haut → montre le header
        setIsHeaderVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])


  return (
    <div className="webtoon-reader">
      <header className={`reader-header ${!isHeaderVisible ? 'hidden' : ''}`}>
        <button className="back-button" onClick={() => navigate('/')}>
          ← Retour
        </button>
      </header>
      <ReadingProgress></ReadingProgress>

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