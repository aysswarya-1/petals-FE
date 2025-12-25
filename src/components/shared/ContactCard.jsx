import React from 'react'
import { MapPin, Phone } from 'lucide-react'

const ContactCard = () => {
    return (
        <div className="bg-white border border-rosy-100 p-4 rounded-md">
            <h5 className="font-semibold mb-3">Contact us</h5>
            <p className="text-sm text-rosy-500">We're here Tue-Sat, 10am-6pm.</p>
            <div className="flex flex-col mt-3 space-y-3 text-sm">
                <input type='phone' placeholder='+1 (415) 555-0182' className='p-2 border border-rosy-100 outline-rosy-200 rounded bg-rosy-50' />
                <input type='text' placeholder='hello@blushandbloom.com' className='p-2 border border-rosy-100 outline-rosy-200 rounded bg-rosy-50' />
                <input placeholder='125 Rosewood Ave, San Francisco, CA' className='p-2 border border-rosy-100 outline-rosy-200 rounded bg-rosy-50' />
            </div>
            <div className="mt-4 flex gap-2">
                <button className="flex items-center gap-2 px-3 py-2 border rounded text-rosy-500 hover:bg-rose-50 transition">
                    <MapPin />
                    View Map</button>
                <button className="flex items-center gap-2 px-3 py-2 border text-rosy-500 rounded hover:bg-rose-50 transition">
                    <Phone />
                    Call Us</button>
            </div>
        </div>
    )
}

export default ContactCard
