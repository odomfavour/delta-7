import React from 'react'
import './Counter.css'
import innerCard from '../images/inner-card.png'
import GameSlide1 from '../images/game-slide-1.png'
import GameSlide2 from '../images/game-slide-2.png'
import GameSlide3 from '../images/game-slide-3.png'
// Import Swiper React components
import { Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/autoplay/autoplay.min.css'; // core Swiper

const Counter = () => {
    return (
        <div className="counter-section">
            <section className="container-fluid">
                <div className="row py-5">
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
            <section className="mt-5">
                <div className="container-fluid">
                <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation
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
                            <img src={GameSlide1} alt="man with a sword" className="img-fluid" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="col-md-12">
                            <img src={GameSlide1} alt="man with a sword" className="img-fluid" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="col-md-12">
                            <img src={GameSlide2} alt="man with a sword" className="img-fluid" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="col-md-12">
                            <img src={GameSlide3} alt="man with a sword" className="img-fluid" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="col-md-12">
                            <img src={GameSlide1} alt="man with a sword" className="img-fluid" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="col-md-12">
                            <img src={innerCard} alt="man with a sword" className="img-fluid" />
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="col-md-12">
                            <img src={GameSlide1} alt="man with a sword" className="img-fluid" />
                        </div>
                        </SwiperSlide>
                    </Swiper>
            
                </div>
            </section>
        </div>
    )
}

export default Counter
