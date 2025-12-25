import React from 'react'
import AboutHeader from '../../components/about/AboutHeader'
import AboutHero from '../../components/about/AboutHero'
import AboutGuides from '../../components/about/AboutGuide'
import AboutValues from '../../components/about/AboutValues'
import TeamSection from '../../components/about/TeamSection'
import Layout from '../../components/layout/Layout'
import SayHelloform from '../../components/about/SayHelloform'
import ContactCard from '../../components/shared/ContactCard'

const About = () => {
    return (
        <div className='space-y-6'>
            <AboutHeader />
            <AboutHero />
            <AboutGuides />
            <AboutValues />
            <TeamSection />

            <Layout>
                <SayHelloform />
                <ContactCard />
            </Layout>
        </div>
    )
}

export default About
