import React from 'react'
import './Hero.css'
import gameCards from '../images/Union.png'

const Hero = () => {
    return (
        <div className="hero-section" id="home">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src={ gameCards } alt="game-cards" className="img-fluid pt-4"/>
                    </div>
                    <div className="col-md-6">
                        <div className="welcome-section">
                            <h1 className="mb-3">WELCOME TO DELTA7</h1>
                            <h5 className="mb-5">Play, explore and trade in a unique virtual world that offers monetization of gaming experience and limitless rewards.</h5>
                            <button className="btn main-btn me-3">BUY DELTA7</button>
                            <button className="btn btn-outline-warning">ENTER APP</button>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Hero
