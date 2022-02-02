import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header';
import clock from '../../images/nft-items/coming-soon/clock.png'

import './coming-soon.css'

const ComingSoon = () => {
  return (
      <section>
            <Header/>
                <div className="nft-market">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-center clock-box">
                            <div className="text-center text-white coming-text">
                                <h1 className='pt-md-5'>COMING <span className='text-warning'>SOON</span></h1>
                            </div>
                        </div>
                        <div className="image-box">
                            <img src={clock} alt="" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            <Footer className="mt-5"/>
      </section>
  );
};

export default ComingSoon;
