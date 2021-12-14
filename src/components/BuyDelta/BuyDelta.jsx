import React from 'react'
import './buyDelta.css'
import step1 from '../../images/buy/step1.png'
import step2 from '../../images/buy/step2.png'
import step3 from '../../images/buy/step3.png'

const BuyDelta = () => {
    return (
        <div className="pt-5 buy-delta-section">
            <div className="container-fluid">
                <div className="buy-section">
                    <h1>HOW TO BUY $DELTA7?</h1>
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
                                            <p>The innovative concept of NFT Yield Farming allows NFT collections to be used in Delta7 Yield farming, which exceptionally enhances NFT collection value</p>
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
                                        <p>The innovative concept of NFT Yield Farming allows NFT collections to be used in Delta7 Yield farming, which exceptionally enhances NFT collection value</p>
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
                                            <p>PancakeSwap: https://exchange.pancakeswap.finance</p>
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
