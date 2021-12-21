import React from 'react'
import './Tokenomics.css'
import Tchart from '../../images/chart.png'

const Tokenomics = () => {
    return (
        <div className="token-section py-5" id="token">
            <div className="container-fluid">
                <h1 className='heading'>TOKEN<span className="text-warning">OMICS</span></h1>
                <div className="token-base">
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <p>DFCWA Token is issued and supported by Binance Smart Chain, Laatoken and CoinGecko, which are completely decentralized. It adopts a super combustible mechanism to make the number of Tokens burn very quickly,</p>
                            <p>drastically reducing the supply in circulation. Under the premise of fair issuance, DFCWA will trigger the corresponding Token distribution for each transfer or transaction on the chain which includes Token burn, currency holding income, and NFT mining pool, and will burn all private keys to ensure its fairness</p>
                            <div className="my-4 contract-token">
                                <h5>Contract Address</h5>
                                <form action="">
                                    <input type="text" className="form-control" placeholder='0x544Dc610c25V9e34230bD4S13484Ffa101E685E9'/>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="chart-section">
                                {/* <h5 className="text-center">
                                Total: 500.000.000 DFCWA
                                </h5> */}
                                <div className="chart-box px-5">
                                    <img src={Tchart} alt="" className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics
