import { useState, useEffect } from 'react'
import './ReadingProgress.css'

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Hauteur totale de la page
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      
      // Position actuelle du scroll
      const currentScroll = window.scrollY
      
      // Calcul du pourcentage
      const scrollPercentage = (currentScroll / totalHeight) * 100
      
      setProgress(scrollPercentage)
    }

    // Écouter le scroll avec throttle pour la performance
    let timeoutId: number | null = null
    const throttledScroll = () => {
      if (timeoutId === null) {
        timeoutId = window.setTimeout(() => {
          handleScroll()
          timeoutId = null
        }, 10) // 10ms de throttle
      }
    }

    window.addEventListener('scroll', throttledScroll)
    
    // Calculer la progression initiale
    handleScroll()

    return () => {
      window.removeEventListener('scroll', throttledScroll)
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <div className="reading-progress-container">
      <div 
        className="reading-progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ReadingProgress