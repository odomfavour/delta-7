import React from 'react'
import './Tokenomics.css'
import Tchart from '../../images/chart.png'
import copyIcon from '../../images/copy-icon.png'

const Tokenomics = () => {
    return (
        <div className="token-section pb-3 pt-5" id="token">
            <div className="container">
                <h1 className='heading'>TOKEN<span className="text-warning">OMICS</span></h1>
                <div className="token-base">
                    <div className="row">
                        <div className="col-md-6 mb-3 pe-md-5">
                            <p>$DFC token represents the common currency of the DELTA7 gaming metaverse. IT has a very strong support system built on block chain and they include Binance Smart Chain, CoinGecko and Latoken. It utilizes a very unique system that aids the burning of tokens affecting its total supply by reducing it and this ensures fairness in the circulation and distribution of the $DFC token.</p>
                            <div className="my-4 contract-token">
                                <h5>Contract Address</h5>
                                <form action="">
                                    <input type="text" className="form-control"
                                    disabled
                                    value='0x544Dc610c25V9e34230bD4S13484Ffa101E685E9'/>
                                    <img src={copyIcon} alt="" className='img-fluid copy-icon' />
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="chart-section">
                                <h5 className="text-center d-md-block d-lg-block d-none">
                                Total: 500.000.000 DFC
                                </h5>
                                <div className="chart-box px-md-5">
                                    <img src={Tchart} alt="" className="img-fluid"/>
                                </div>
                                <h5 className="text-center d-md-none d-lg-none pt-3">
                                Total: 500.000.000 DFC
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics
