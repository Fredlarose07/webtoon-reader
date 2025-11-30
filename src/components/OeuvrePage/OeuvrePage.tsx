import { useNavigate } from 'react-router-dom'
import './OeuvrePage.css'
import originalImg from '../../assets/images/il-faut-flinguer-ramirez 3.png'
import cardImg from '../../assets/images/il-faut-flinguer-ramirez 3.png'


const OeuvrePage = () => {
    const navigate = useNavigate()

    return (
        <>
            <section className="oeuvre-section">
                <div
                    className="background-blur"
                    style={{ backgroundImage: `url(${originalImg})` }}
                ></div>

                <div className="container">
                    <div className="card">
                        <img src={cardImg} alt="Card" />

                        <div className="card-overlay">
                            <h1 className="card-title">SAMBA-12</h1>
                            <p className="card-description">
                                Qorem ipsum dm dolor sit arnet, consectetu olor sit arnet,
                                consectetu adipiscing elit. Qorem ipsum dolor sit arnet,
                                consectetu Qorem ipsum dolor sit arnet, consectetu
                            </p>

                        </div>

                        <button className="card-button" onClick={() => navigate('/lire')}>
                            Lire
                        </button>
                    </div>
                </div>
            </section>

            <div style={{ height: '200vh' }}></div>
        </>
    )
}

export default OeuvrePage