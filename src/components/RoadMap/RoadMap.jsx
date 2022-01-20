import React from 'react'
import './roadMap.css'
import roadMap from '../../images/roadmap.png'

const RoadMap = () => {
    return (
        <div className="pt-5 road-map-section">
            <div className="container">
                <div className="roadmap-holder">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="d-flex justify-content-start align-items-center h-100">
                                <h4 className='heading'>Road<span className="text-warning">Map</span></h4>
                            </div>
                        </div>
                        <div className="col-md-8 mb-3">
                            <div className="image-box">
                                <img src={roadMap} alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadMap
