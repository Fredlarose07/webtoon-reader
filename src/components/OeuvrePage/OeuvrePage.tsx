import './OeuvrePage.css'
import originalImg from '../../assets/images/il-faut-flinguer-ramirez 3.png'
import cardImg from '../../assets/images/il-faut-flinguer-ramirez 3.png'


const OeuvrePage = () => {
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
                    </div>
                </div>
            </section>

            <div style={{ height: '200vh' }}></div>
        </>
    )
}

export default OeuvrePage