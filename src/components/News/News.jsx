import React from 'react'
import './News.css'
import GameSlide1 from '../../images/game-slide-1.png'
import GameSlide2 from '../../images/game-slide-2.png'
import GameSlide3 from '../../images/game-slide-3.png'

const News = () => {
    return (
        <div className="py-5 news-section">
            <div className="container-fluid">
                <h2 className="py-4 text-center">NEWS</h2>
                <section className="mt-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 mb-3">
                                <img src={GameSlide1} alt="man with a sword" className="img-fluid" />
                            </div>
                            <div className="col-lg-3 col-md-4 mb-3">
                                <img src={GameSlide2} alt="man with a sword" className="img-fluid" />
                            </div>
                            <div className="col-lg-3 col-md-4 mb-3">
                                <img src={GameSlide3} alt="man with a sword" className="img-fluid" />
                            </div>
                            <div className="col-lg-3 col-md-4 mb-3">
                                <img src={GameSlide1} alt="man with a sword" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default News
