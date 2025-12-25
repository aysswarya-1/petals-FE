import React from 'react'
import Hero from '../../components/home/Hero'
import EverydayGifts from '../../components/home/EverydayGifts'
import WeddingEvents from '../../components/home/WeddingEvents'
import PortfolioHighlights from '../../components/home/PortfolioHighlights'
import ConsultationContact from '../../components/home/ConsultationContact'
import AboutUs from '../../components/home/AboutUs'

const Home = () => {
    return (
        <main>
            <Hero />
            <EverydayGifts />
            <WeddingEvents />
            <PortfolioHighlights />
            <ConsultationContact />
            <AboutUs />
        </main>
    )
}

export default Home
