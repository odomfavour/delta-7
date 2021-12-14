import React from 'react'
import Blackhole from '../components/BlackHole/Blackhole'
import BuyDelta from '../components/BuyDelta/BuyDelta'
import Counter from '../components/Counter'
import Footer from '../components/Footer/Footer'
import GamePlay from '../components/GamePlay'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Metaverse from '../components/Metaverse/Metaverse'
import News from '../components/News/News'
import NftItems from '../components/NftItems/NftItems'
import Partners from '../components/Partners/Partners'
import RoadMap from '../components/RoadMap/RoadMap'
import Tokenomics from '../components/Tokenomics/Tokenomics'

const index = () => {
    return (
        <div>
           <Header/>
           <Hero/>
           <Counter/>
           <GamePlay/>
           <NftItems/>
           <Metaverse/>
           <Tokenomics/>
           <Blackhole/>
           <RoadMap/>
           <BuyDelta/>
           <Partners/>
           <News/>
           <Footer/>
        </div>
    )
}

export default index
