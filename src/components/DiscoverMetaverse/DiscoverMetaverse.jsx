import React from 'react'
import './discoverMetaverse.css'
import vision from '../../images/vision.png'

const DiscoverMetaverse = () => {
    return (
        <div className='discoverMetaverse-section py-3' id="about">
            <div className="container">
                <div className="pt-4">
                <div className="row">
                    <div className="col-md-7 side-text">
                    <h1 className="pt-5 pb-3 heading">DISCOVER <span className="text-warning">DELTA7 METAVERSE</span></h1>
                        <p>With the world shifting into the virtual world at a fast pace, we present to you a unique online event you’ve never seen before.</p>
                        <ul>
                            <li>Delta7: The best metaverse built on BSC blockchain with NFTs and GameFi</li>
                            <li>The beautiful part is that, as a Standard Registered Member, the more you play, the more you stand a chance to win FREE DFC</li>
                        </ul>
                        <section className="other-section">
                            <h5>OTHER BENEFITS</h5>
                            <ul>
                                <li>You can play games with friends in a virtual world</li>
                                <li>You can build up your teammates</li>
                                <li>Share strategize and build your community</li>
                                <li>Play against each other to see who is the king to earn more in Delta7</li>
                                <li>Play more to earn NFTs which you can trade immediately in the market for quick cash</li>
                                <li>Owning an NFT, gives you the opportunity to earn passively while others play with your NFT characters.</li>
                            </ul>
                            <h5>Don’t wait so that you don’t waste, start playing and start earning now. <br/> You’re just one step away</h5>
                            <p>NFTs ranging from common to epic, epic to rare, and from rare to ultimate ( All depends on the rarity of the NFTs)</p>
                        </section>
                        <section>
                            {/* <h5>Earn NFTs like:</h5>
                            <ul>
                                <li><span className='bold-text'>BullyD</span> which is worth $DFC</li>
                                <li><span className='bold-text'>Gismo</span> which is worth $__</li>
                                <li><span className='bold-text'>ElChapo</span> which is worth $__</li>
                                <li><span className='bold-text'>Goblins</span> which is worth $__</li>
                            </ul> */}
                            <p>Come take a virtual tour with us on Delta 7, earn big and live your dream life, Spaces are filling up fast, take action now and be first set of teammates to join</p>
                        </section>
                    </div>
                    <div className="col-md-5 side-image d-flex align-items-center justify-content-center">
                        <div className="text-center">
                            <img src={vision} alt="about displaying vision"  className='img-fluid'/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default DiscoverMetaverse
