import React from 'react'
import './Hero.css'
import gameCards from '../images/Union.png'

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src={ gameCards } alt="game-cards" className="img-fluid pt-4"/>
                    </div>
                    <div className="col-md-6">
                        <div className="welcome-section">
                            <h1 className="mb-3">WELCOME TO <br/> DEFIWAR</h1>
                            <h5 className="mb-5">The best metaverse on BSC DEFIWAR METAVERSE = <br/> NFT + GameBase + GameFi</h5>
                            <button className="btn main-btn me-4">BUY DEFIWAR</button>
                            <button className="btn btn-outline-warning">ENTER APP</button>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Hero
