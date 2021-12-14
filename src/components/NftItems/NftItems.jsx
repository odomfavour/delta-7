import React, {useState} from 'react'
import './NftItems.css'
import bullyd from '../../images/nft-items/Bullyd.png'
import bullydFull from '../../images/nft-items/BullydFull.png'
import { characters } from './nftData'

// Import Swiper React components
import { Autoplay, Navigation, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css'; // core Swiper
import 'swiper/modules/autoplay/autoplay.min.css'; // core Swiper
// import 'swiper/modules/navigation/react'; // Navigation module
// import 'swiper/modules/pagination/react'; // Pagination module



const NftItems = () => {
    const [character, setCharacter] = useState({
        "id" : 3,
        "name" : "Bullyd",
        "image" : bullyd,
        "fullImage" : bullydFull,
        "description" : "Share strategies, donate cards to help your team mates, build your own community!",
    })
    const displayCharacter  = (e, character) => {
         console.log(character)
         setCharacter({
             name : character.name,
             description : character.description,
             fullImage: character.fullImage,
             image: character.image
           })
     }
    return (
        <div className="nft-section pt-5">
            <h2 className="text-center mb-3">NFT <span className="text-warning">ITEMS</span></h2>
            <p className="text-center mb-5">Earn and trade your NFT items on the marketplace to make more money</p>
            <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={10}
                        slidesPerView={6}
                        navigation
                        autoplay
                        breakpoints={{
                            375: {
                                slidesPerView: 2,
                                spaceBetweenSlides: 10
                            },
                            // when window width is <= 999px
                            768: {
                                slidesPerView: 4,
                                spaceBetweenSlides: 10
                            },
                            999: {
                                slidesPerView: 7,
                                spaceBetweenSlides: 10
                            }

                        }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        {characters.map((character) => (
                    <SwiperSlide>
                    <div className="nft-item-box" onClick={(e) => displayCharacter(e, character)}>
                    <img src={character.image} alt={character.name} className="img-fluid"/>
                </div>
                    </SwiperSlide>
                    
                ))}
                        
                    </Swiper>
            <div className="nft-character-display pt-5 pb-3">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-1"></div>
                    <div className="col-lg-8 col-md-11">
                        <div className="d-flex">
                            <div className="character-box">
                                <img src={character.fullImage} alt="yuan with snakes" className="img-fluid"/>
                            </div>
                            <div className="character-text">
                                <h3 className="text-warning text-uppercase">{character.name}</h3>
                                <p>{character.description} </p>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NftItems
