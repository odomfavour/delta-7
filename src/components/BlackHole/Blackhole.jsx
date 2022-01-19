import React from 'react'
import  './Blackhole.css'
import safeFarmingn from '../../images/black-hole/safe-farming.png'
import indestructible from '../../images/black-hole/indestructible.png'
import decentralized from '../../images/black-hole/decentralized.png'
import fairLaunch from '../../images/black-hole/fair-launch.png'
import risingGraph from '../../images/black-hole/rising-graph.png'
import whaleSafety from '../../images/black-hole/whale-safety.png'


const Blackhole = () => {
    return (
        <div className="blackhole-section pt-md-5">
            <div className="container-fluid">
                <div className="black-hole-holder">
                    <h2 className="text-center heading">BLACK HOLE </h2>
                    <h2 className="text-center text-warning mb-5 heading">ALGORITHM</h2>
                    <div className="mt-4">
                        <div className="row">
                            <div className="col-md-4 col-6 mb-3">
                                <div className="image-box text-center">
                                    <img src={safeFarmingn} alt="" className="img-fluid"/>
                                </div>
                                <div className="algo-text text-center">
                                    <p>Safe Auto -farming</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-6 mb-3">
                                <div className="image-box text-center">
                                    <img src={indestructible} alt="" className="img-fluid"/>
                                </div>
                                <div className="algo-text text-center">
                                    <p>Indestructible</p>
                                </div>
                            </div>
                            <div className="col-md-4  col-6 mb-3">
                                <div className="image-box text-center">
                                    <img src={decentralized} alt="" className="img-fluid"/>
                                </div>
                                <div className="algo-text text-center">
                                    <p>Decentralized</p>
                                </div>
                            </div>
                            <div className="col-md-4  col-6 mb-3">
                                <div className="image-box text-center">
                                    <img src={fairLaunch} alt="" className="img-fluid"/>
                                </div>
                                <div className="algo-text text-center">
                                    <p>Fair Launch</p>
                                </div>
                            </div>
                            <div className="col-md-4  col-6 mb-3">
                                <div className="image-box text-center">
                                    <img src={risingGraph} alt="" className="img-fluid"/>
                                </div>
                                <div className="algo-text text-center">
                                    <p>Continuously Rising Price Floor</p>
                                </div>
                            </div>
                            <div className="col-md-4  col-6 mb-3">
                                <div className="image-box text-center">
                                    <img src={whaleSafety} alt="" className="img-fluid"/>
                                </div>
                                <div className="algo-text text-center">
                                    <p>Whale Stock Safety</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blackhole
