import React from 'react'
import BreadCrumbs from '../shared/BreadCrumbs'

const ContactHeader = () => {
    return (
        <div className='mt-5 rounded-md bg-white p-4 pt-0'>
            <BreadCrumbs />

            <h1 className="text-2xl font-semibold mb-1">
                Contact Blush & Bloom
            </h1>
            <p className="text-sm text-browny-50 mt-1">
                We'd love to help with everyday gifts, weddings, and all of your most romantic moments.
                Send us a note and we'll reply within one business day.
            </p>
        </div>
    )
}

export default ContactHeader
