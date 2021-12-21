import React from 'react'
import './GamePlay.css'
// import fightShow from '../images/fight-show.png'
import fightShow1 from '../images/fight-show-1.png'
import fightShow2 from '../images/fight-show-2.png'
import fightShow3 from '../images/fight-show-3.png'
// Import Swiper React components
import { Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/autoplay/autoplay.min.css'; // core Swiper
// import 'swiper/modules/navigation/react'; // Navigation module
// import 'swiper/modules/pagination/react'; // Pagination module

const GamePlay = () => {
    return (
        <div className="game-play-section">
            <div className="container">
                <h1 className="pt-5 heading">Game<span className="text-warning">Play</span></h1>
                <section className="my-5">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        autoplay
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        <SwiperSlide>
                            <div className="text-center">
                                <img src={fightShow1} alt="wolf and man" className="img-fluid" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center">
                                <img src={fightShow2} alt="wolf and man" className="img-fluid" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center">
                                <img src={fightShow3} alt="wolf and man" className="img-fluid" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="text-center mb-5 pb-5">
                        <h5>Play with Friends</h5>
                        <p>Share strategies, donate cards to help your teammates, build your own community! Compete against each other to 
                            see who is the best earner in Defiwar</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default GamePlay
