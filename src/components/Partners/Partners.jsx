import React from 'react'
import './partners.css'
import yf from '../../images/seen/yf.png'
import tp from '../../images/seen/tp.png'
import mw from '../../images/seen/mw.png'
import digitalCoin from '../../images/seen/deficonnect-digitalcoin.png'
// import seen5 from '../../images/seen/seen5.png'
import certikDefi from '../../images/seen/certik-deficonnect-logo.png'
// import seen55 from '../../images/seen/seen55.png'
import sp from '../../images/seen/sp.png'

const Partners = () => {
    return (
        <div className="pt-5 partners-section" id="partners">
            <div className="container">
                {/* <h2 className="text-uppercase text-center heading">Partners <span className="text-warning">and</span> investors</h2>
                <div className="mt-5">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                    </div>
                </div> */}

                <div className="mt-5">
                    <h2 className="text-center mb-4">SEEN </h2>
                    <div className="seen-display">
                        <div className="row p-4">
                            <div className="col-lg-3 col-md-3 col-6 mb-3">
                                <div className="image-box">
                                    <a href="https://news.yahoo.com/news/defi-connect-warms-defipay-launch-154000063.html" target="_blank" rel="noopener noreferrer">
                                        <img src={yf} alt="" className="img-fluid"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6 mb-3">
                                <div className="image-box">
                                    <a href="https://techpoint.africa/2021/09/14/defi-connect-launches-a-crypto-coin-you-can-spend-like-dollars/" target="_blank" rel="noopener noreferrer">
                                        <img src={tp} alt="" className="img-fluid"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6 mb-3">
                                <div className="image-box">
                                    <a href="https://www.marketwatch.com/press-release/defi-connect-warms-up-for-defipay-launch-for-more-convenient-payments-2021-09-27?tesla=y" target="_blank" rel="noopener noreferrer">
                                        <img src={mw} alt="" className="img-fluid"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-6 mb-3">
                                <div className="image-box">
                                    <a href="https://digitalcoinprice.com/blog/deficonnect-spikes-300-growth"  target="_blank" rel="noopener noreferrer">
                                        <img src={digitalCoin} alt="" className="img-fluid"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="text-center">Secured By</h2>
                    <div className="secured-display">
                        <div className="row py-md-5 py-3">
                            <div className="col-lg-3 col-md-1"></div>
                            <div className="col-lg-3 col-md-5 col-6 mb-3 px-2">
                                <div className="secured-box s-blue px-2">
                                <a href="https://github.com/solidproof/smart-contract-audits/blob/main/SmartContract_Audit_Solidproof_DefiConnect.pdf" target="_blank" rel="noopener noreferrer">
                                    <img src={sp} alt="" className="img-fluid"/>
                                </a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5 col-6 mb-3 px-2">
                            <div className="secured-box">
                                <img src={certikDefi} alt="" className="img-fluid"/>
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
