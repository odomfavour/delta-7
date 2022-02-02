import React from 'react'
import { Link } from 'react-router-dom';

import './footer.css'
import logo from '../../images/logo.png'
import twitter from '../../images/socials/twitter.svg'
import youtube from '../../images/socials/youtube.svg'
import facebook from '../../images/socials/facebook.svg'
import telegram from '../../images/socials/telegram.svg'
import whitepaper from '../../images/assets/delta7-whitepaper.pdf'

const Footer = () => {
    return (
        <div className="pt-5 footer-section">
            <div className="container">
                <section className="pb-4">
                    <div className="d-flex flex-lg-row flex-md-row flex-column justify-content-between align-items-baseline">
                        <div className="logo-box">
                            <img src={logo} alt="" className="img-fluid" />
                        </div>
                        <div className="d-flex flex-md-column flex-lg-row flex-column justify-content-between b-links">
                        <div className="bottom-links">
                            <ul>
                                <li><Link to="/">GameBase</Link></li>
                                <li><Link to="/">PrivatePolicy</Link></li>
                                <li><Link to="/">GameFi</Link></li>
                                <li><a href={whitepaper} target="_blank" rel="noreferrer">Whitepaper</a></li>
                                <li><Link to="/">Terms of Service</Link></li>
                                <li><Link to="/"></Link></li>
                            </ul>
                        </div>
                        <div className="social-links">
                            <ul>
                                <li><a href="https://t.me/deficonnect" target="_blank" rel="noreferrer">
                                    <img src={telegram} alt="" className="img-fluid" />
                                </a>

                                </li>
                                <li>
                                    <a href="https://web.facebook.com/deficonnect?_rdc=1&_rdr" target="_blank" rel="noreferrer">
                                        <img src={facebook} alt="" className="img-fluid" />
                                    </a></li>
                                <li>
                                    <a href="https://www.youtube.com/channel/UCYq2MxoWOXfkFHGuAr1H7dQ" target="_blank" rel="noreferrer">
                                        <img src={youtube} alt="" className="img-fluid" />
                                    </a></li>
                                <li>
                                    <a href="https://twitter.com/deficonnect" target="_blank" rel="noreferrer">
                                        <img src={twitter} alt="" className="img-fluid" />
                                    </a></li>
                            </ul>
                        </div>
                        </div>
                        
                    </div>
                </section>

            </div>
            <div className="d-flex">
                <hr className="d-md-block d-none" />
                <p className="text-center copyright">Copyright &copy; 2021 DELTA7. All right reserved</p>
                <hr className="d-md-block d-none" />
            </div>
        </div>
    )
}

export default Footer
