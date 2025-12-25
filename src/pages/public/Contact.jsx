import React from 'react'
import ContactHeader from '../../components/contact/ContactHeader'
import ContactForm from '../../components/contact/ContactForm'
import ContactInfo from '../../components/contact/ContactInfo'

const Contact = () => {
    return (
        <div className='space-y-6'>
            <ContactHeader />
            <div className="grid md:grid-cols-2 gap-6">
                <ContactForm />
                <ContactInfo />
            </div>
        </div>
    )
}

export default Contact
