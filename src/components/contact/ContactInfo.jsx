import React from 'react'
import { MapPin, Clock, PhoneCall, HeartHandshake, Calendar, WandSparkles } from "lucide-react";
import Button from '../shared/Button';

const ContactInfo = () => {
    return (
        <div className="bg-white border border-rosy-100 rounded-xl p-6 space-y-4">
            <h3 className="font-bold text-browny-100 mb-2 text-lg sm:text-xl">
                Visit our studio
            </h3>

            <p className="text-sm text-browny-50">
                Stop by to see our daily blooms or sit down for a design consultation.
            </p>

            <div className="space-y-3 text-sm text-browny-50">
                <div className="flex gap-2">
                    <MapPin size={16} className='mt-1' />
                    <div>
                        <p className='font-bold'>Studio address</p>
                        <p className="mb-1">
                            118 Rosewood Lane<br />Willowbrook, CA 94016</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Clock size={16} className='mt-1' />
                    <div>
                        <p className='font-bold'>Hours</p>
                        <p className='font-bold'>Mon–Fri: 10:00am – 6:00pm<br />
                            Sat: 9:00am – 4:00pm</p>
                        <p>Same-day delivery available for orders placed before 1:00om.</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <PhoneCall size={16} className='mt-1' />
                    <div>
                        <p className='font-bold'>Say hello</p>
                        <p>+1 (555) 512-1111<br />
                            hello@blushandbloom.com</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <HeartHandshake size={16} className='mt-1' />
                    <p className="font-bold">
                        For weddings & events
                    </p>
                    <p>Planning something larger? Share your details and our weddings team will be in touch</p>
                </div>
            </div>


            <div className="flex gap-3 justify-center mt-6">
                <Button variant='secondary'>
                    <Calendar />
                    Request a consultation
                </Button>
                <Button>
                    <WandSparkles />
                    Weddings & events form
                </Button>
            </div>

            {/* Map */}
            <div className="h-40 bg-rosy-50 rounded-md flex items-center justify-center text-xs text-browny-50 mt-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d46830151.11795828!2d-119.8093025!3d44.24236485000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1765181504318!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '10px' }}
                    allowFullScreen
                    loading="lazy"
                />
            </div>
        </div>
    );
}

export default ContactInfo
