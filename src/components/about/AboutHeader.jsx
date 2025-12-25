import React from 'react'
import BreadCrumbs from '../shared/BreadCrumbs'

const AboutHeader = () => {
    return (
        <div className='mt-5 rounded-md bg-white p-4'>
            <BreadCrumbs />

            <h1 className="text-2xl font-semibold mb-1">
                Our Story
            </h1>
            <p className="text-sm text-browny-50 mt-1">
                Design-first floristry rooted in romance, seasonality, and thoughtful service.
            </p>
        </div>
    )
}

export default AboutHeader
