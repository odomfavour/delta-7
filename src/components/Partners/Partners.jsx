import React from 'react'
import './partners.css'
import seen1 from '../../images/seen/seen1.png'
import seen2 from '../../images/seen/seen22.png'
import seen3 from '../../images/seen/seen3.png'
import seen4 from '../../images/seen/seen4.png'
import seen5 from '../../images/seen/seen55.png'
import seen6 from '../../images/seen/seen6.png'

const Partners = () => {
    return (
        <div className="pt-5 partners-section" id="partners">
            <div className="container">
                <h2 className="text-uppercase text-center heading">Partners <span className="text-warning">and</span> investors</h2>
                <div className="mt-5">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                    </div>
                </div>

                <div className="mt-5">
                    <h2 className="text-center">SEEN </h2>
                    <div className="seen-display">
                        <div className="row py-4">
                            <div className="col-lg-2 col-md-3 mb-3">
                                <div className="image-box">
                                    <img src={seen1} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 mb-3">
                                <div className="image-box">
                                    <img src={seen2} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 mb-3">
                                <div className="image-box">
                                    <img src={seen3} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 mb-3">
                                <div className="image-box">
                                    <img src={seen4} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 mb-3">
                                <div className="image-box">
                                    <img src={seen5} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3">
                                <div className="image-box">
                                    <img src={seen6} alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="text-center">Secured By</h2>
                    <div className="secured-display">
                        <div className="row py-5">
                            <div className="col-lg-3 col-md-1"></div>
                            <div className="col-lg-3 col-md-5 mb-3">
                                <div className="secured-box">
                                <img src={seen2} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 mb-3">
                            <div className="secured-box">
                                <img src={seen5} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners
