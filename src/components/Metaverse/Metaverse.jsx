import React from 'react'
import metaEarn from '../../images/meta/meta-earn.png'
import metaFarm from '../../images/meta/meta-farm.png'
import metaGame from '../../images/meta/meta-game.png'
import './Metaverse.css'

const Metaverse = () => {
    return (
        <div className="meta-holder" id="metaverse">
            <div className="container-fluid">
                <div className="meta-section">
                    <div className="container">
                    <h2 className='heading pt-5'>Meta<span className="text-warning">Verse</span></h2>
                    <div className="meta-cards mt-4">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-3">
                                <div className="meta-card text-center" data-aos="fade-right" data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic">
                                    <div className="meta-image">
                                        <img src={metaFarm} alt="farming with metaverse" className="img-fluid" />
                                    </div>
                                    <div className="meta-text">
                                        <h2 className="text-warning">NFT Yield Farming</h2>
                                        <p>Invest in NFTs early enough as their worth increases overtime when more players purchases a particular NFT causing an exceptional enhancement for NFT collection value!!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6  mb-3">
                                <div className="meta-card text-center" data-aos="fade-down" data-aos-delay="50"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out-cubic">
                                    <div className="meta-image">
                                        <img src={metaGame} alt="Gaming with metaverse" className="img-fluid" />
                                    </div>
                                    <div className="meta-text">
                                        <h2 className="text-warning">GamePad</h2>
                                        <p>DFCWA GamPad promotes game incubation and distribution, builds DFCWA entertainment meta-universe with a variety of games, and creates a blockchain game financial system, making games not only interesting and fun but also profitable</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6  mb-3">
                                <div className="meta-card text-center" data-aos="fade-left" data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic">
                                    <div className="meta-image">
                                        <img src={metaEarn} alt="earning with metaverse" className="img-fluid" />
                                    </div>
                                    <div className="meta-text">
                                        <h2 className="text-warning">GameFi: Play to Earn</h2>
                                        <p>Focusing on NFT gaming metaverse, DELTA7 is targeting a creation of a more pleasurable new financial system that is block chain enhanced.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Metaverse
