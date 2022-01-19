import React from 'react'
import './discoverMetaverse.css'
import vision from '../../images/vision.png'

const DiscoverMetaverse = () => {
    return (
        <div className='discoverMetaverse-section py-3' id="about">
            <div className="container">
                <h1 className="pt-5 pb-3 heading">DISCOVER <span className="text-warning">DELTA 7 METAVERSE</span></h1>
                <div className="row">
                    <div className="col-md-8 side-text">
                        <p>With the world shifting into the virtual world at a fast pace, we present to you a unique online event you’ve never seen before.</p>
                        <ul>
                            <li>Delta7: The best metaverse built on bsc blockchain with NFTs and Gamebase</li>
                            <li>The beautiful part is that, as a Standard Registered Member, the more you play, the more you stand a chance to win FREE Deficonnect</li>
                        </ul>
                        <section className="other-section">
                            <h5>OTHER BENEFITS</h5>
                            <ul>
                                <li>You can play games with friends in a virtual world</li>
                                <li>You can build up your teammates</li>
                                <li>Share strategies and build your community</li>
                                <li>Play against each other to see who is the king to earn more in Defiwar</li>
                                <li>Play more to earn NFTs which you can trade immediately in the market for quick cash</li>
                            </ul>
                            <h5>Don’t wait so that you don’t waste, start playing and start earning now. <br/> You’re just one step away</h5>
                            <p>NFTs raging from common to epic, epic to rare, and from rare to ultimate ( All depends on the rarity of the NFTs)</p>
                        </section>
                        <section>
                            <h5>Earn NFTs like:</h5>
                            <ul>
                                <li><span className='bold-text'>BullyD</span> which is worth $__</li>
                                <li><span className='bold-text'>Gismo</span> which is worth $__</li>
                                <li><span className='bold-text'>ElChapo</span> which is worth $__</li>
                                <li><span className='bold-text'>Goblins</span> which is worth $__</li>
                            </ul>
                            <p>Come take a virtue tour with us on Delta 7, earn big and live your dream life, Spaces are filling up fast, take action now and be first set of teammates to join</p>
                        </section>
                    </div>
                    <div className="col-md-4 side-image">
                        <div className="p-4">
                            <img src={vision} alt="about displaying vision"  className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DiscoverMetaverse
