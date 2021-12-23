import React from 'react'
import './Counter.css'
// import GameLabel from '../images/game-slide-label.png'
import GameSlide1 from '../images/game-slide--1.png'
import GameSlide2 from '../images/game-slide--2.png'
// import GameSlideInner from '../images/game-slide-inner.png'
// Import Swiper React components
import { Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/autoplay/autoplay.min.css'; // core Swiper
import 'swiper/modules/navigation/navigation.min.css'; // core Swiper
import 'swiper/modules/navigation/navigation.js'; // core Swiper

const Counter = () => {
    return (
        <div className="counter-section">
            <section className="container">
                <div className="row pt-4 pb-3 px-5 count-box-upper">
                    <div className="col-md-3 col-6">
                        <div className="d-flex justify-content-center align-items-center count-box">
                            <div className="text-center">
                                <h1 className="text-warning">96K+ </h1>
                                <p>Telegram</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="d-flex justify-content-center align-items-center count-box">
                            <div className="text-center">
                                <h1 className="text-warning">55K+ </h1>
                                <p>Facebook</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="d-flex justify-content-center align-items-center count-box">
                            <div className="text-center">
                                <h1 className="text-warning">83K+ </h1>
                                <p>Youtube</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="d-flex justify-content-center align-items-center count-box">
                            <div className="text-center">
                                <h1 className="text-warning">96K+ </h1>
                                <p>Twitter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-3">
                <div className="container-fluid">
                <Swiper 
                        modules={[Autoplay, Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation={true}
                        autoplay
                        breakpoints={{
                            375: {
                                slidesPerView: 1,
                                spaceBetweenSlides: 50
                            },
                            // when window width is <= 999px
                            768: {
                                slidesPerView: 2,
                                spaceBetweenSlides: 50
                            },
                            999: {
                                slidesPerView: 4,
                                spaceBetweenSlides: 50
                            }

                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        <SwiperSlide>
                        <div className="col-md-12">
                            {/* <div className='d-flex justify-content-center align-items-center partner-card'>
                                <div className='text-center'>
                                    <h5>Backer Partners</h5>
                                    <img src={GameLabel} alt="man with a sword" className="img-fluid" />
                                </div>
                            </div> */}
                            <img src={GameSlide2} alt="" className='img-fluid' />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="col-md-12">
                            <img src={GameSlide1} alt="" className='img-fluid' />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="col-md-12">
                            <img src={GameSlide2} alt="" className='img-fluid' />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="col-md-12">
                        <img src={GameSlide1} alt="" className='img-fluid' /> 
                        </div>
                        </SwiperSlide>
                    </Swiper>
            
                </div>
            </section>
        </div>
    )
}

export default Counter
