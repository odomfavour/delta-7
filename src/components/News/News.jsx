import React from 'react'
import './News.css'
// import GameSlide1 from '../../images/game-slide-1.png'
// import GameSlide2 from '../../images/game-slide-2.png'
// import GameSlide3 from '../../images/game-slide-3.png'

// Import Swiper React components
import { Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/autoplay/autoplay.min.css'; // core Swiper
import 'swiper/modules/navigation/navigation.min.css'; // core Swiper
import 'swiper/modules/navigation/navigation.js'; // core Swiper
const News = () => {
    return (
        <div className="py-5 news-section" id="news">
            <div className="container-fluid">
                <h2 className="py-4 text-center heading">NEWS</h2>
                <section className="mt-5">
                <div className="container-fluid">
                <Swiper 
                        modules={[Autoplay, Navigation]}
                        spaceBetween={20}
                        slidesPerView={3}
                        navigation={true}
                        autoplay
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetweenSlides: 50
                            },
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
                            <div className='d-flex justify-content-center align-items-center news-card'>
                                <div className='text-center'>
                                    <h5>DELTA7 PARTNER ANNOUNCEMENT</h5>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="col-md-12">
                        <div className='d-flex justify-content-center align-items-center news-card'>
                                <div className='text-center'>
                                    <h5>DELTA7 FEATURES COMING SOON</h5>
                                    <p>UPGRADING PETS: STAR, LEVEL, SKILL LEVEL</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="col-md-12">
                        <div className='d-flex justify-content-center align-items-center news-card'>
                                <div className='text-center'>
                                    <h5>PARTNERSHIP ANNOUNCEMENT DELTA7</h5>
                                    <p>WELCOME OUR NEW PARTNER</p>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="col-md-12">
                        <div className='d-flex justify-content-center align-items-center news-card'>
                                <div className='text-center'>
                                    <h5>BACKER ANNOUNCEMENT</h5>
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="col-md-12">
                        <div className='d-flex justify-content-center align-items-center news-card'>
                                <div className='text-center'>
                                    <h5>PARTNERSHIP ANNOUNCEMENT DELTA7</h5>
                                    <p>WELCOME OUR NEW PARTNER
</p>
                                </div>
                            </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
            
                </div>
                </section>
            </div>
        </div>
    )
}

export default News
