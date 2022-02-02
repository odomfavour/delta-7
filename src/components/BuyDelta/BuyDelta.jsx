import React from 'react'
import './buyDelta.css'
import step1 from '../../images/buy/step1.png'
import step2 from '../../images/buy/step2.png'
import step3 from '../../images/buy/step3.png'

const BuyDelta = () => {
    return (
        <div className="pt-5 buy-delta-section">
            <div className="container">
                <div className="buy-section pt-5">
                    <h1 className='heading pt-5'>HOW TO BUY $<span className='text-warning'>DELTA7</span>?</h1>
                    <div className="mt-5">
                        <div className="row">
                            <div className="col-lg-5 col-md-7 mb-3">
                                <div className="row">
                                    <div className="col-md-5">
                                    <div className="icon-box text-center">
                                        <img src={step1} alt="" className="img-fluid"/>
                                    </div>
                                    </div>
                                    <div className="col-md-7">
                                        <div className="buy-text">
                                            <h5>Create A Wallet</h5>
                                            <p>Visit Google Chrome, download the Trust Wallet or Binance app and set up a wallet. Android or iOS users can download the app</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-5"></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 col-md-5"></div>
                            <div className="col-lg-5 col-md-7 mb-3">
                                <div className="row">
                                    <div className="col-md-5">
                                    <div className="icon-box text-center">
                                        <img src={step2} alt="" className="img-fluid"/>
                                    </div>
                                    </div>
                                    <div className="col-md-7">
                                    <div className="buy-text">
                                    <h5>Send $DFC to Binance Chain Wallet</h5>
                                        <p>After buying DFC from the PancakeSwap or other <a href="https://deficonnect.tech/markets" target="_blank" rel="noreferrer" className='text-warning'>DFC Market</a> where , transfer it to Trust Wallet wallet address.</p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-5 col-md-7 mb-3">
                                <div className="row">
                                    <div className="col-md-5">
                                    <div className="icon-box text-center">
                                        <img src={step3} alt="" className="img-fluid"/>
                                    </div>
                                    </div>
                                    <div className="col-md-7">
                                    <div className="buy-text">
                                    <h5>Use BNB to exchange DELTA7</h5>
                                    <ul className="">
                                        <li>Open your wallet and click on the DApps tab at the bottom</li>
                                        <li>Search for PancakeSwapV2, then click “ Choose Currency”</li>
                                        <li>Enter the contract address in the search bar, and you will see Delta7</li>
                                        <li>Enter the contract address in the search bar, and you will see Delta7 counterparty address</li>
                                        <li>Before the exchange is completed, click the gear and set the slide to 10-15%</li>
                                        <li>Set the amount you want to buy and click on the exchange button</li>
                                            </ul>
                                            <p>PancakeSwap: <span className='text-warning'><a href="https://exchange.pancakeswap.finance" className="text-warning">https://exchange.pancakeswap.finance</a></span></p>
                                    </div>
                                    </div>
                                </div>
                            <div className="d-flex">
                                    
                                    
                                </div>
                            </div>
                            <div className="col-md-6 col-md-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyDelta
