import React, { useState } from 'react'
import Button from '../shared/Button'
import { Send } from 'lucide-react'
import { useCreateInquiryMutation } from '../../app/api/inquiryApi'

const ConsultationForm = () => {
    const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', guests: '', venue: '', city: '', budget: '', message: '', pinterest: '' })
    const [createInquiry, { isLoading }] = useCreateInquiryMutation();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert DD/MM/YYYY to YYYY-MM-DD
        const [day, month, year] = form.date.split("/").map((v) => v.trim());
        const eventDate = new Date(`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`);


        // Map form data to backend Inquiry model
        const payload = {
            type: "consultation",
            fullName: form.name,
            email: form.email,
            phone: form.phone,
            eventDate,
            guestCount: form.guests,
            venue: form.venue,
            city: form.city,
            budgetRange: form.budget,
            vision: form.message,
            pinterestLink: form.pinterest,
        };

        try {
            await createInquiry(payload).unwrap();
            alert("Inquiry submitted successfully!");
            setForm({
                name: "",
                email: "",
                phone: "",
                date: "",
                guests: "",
                venue: "",
                city: "",
                budget: "",
                message: "",
                pinterest: "",
            });
        } catch (err) {
            console.error(err);
            alert("Failed to submit inquiry.");
        }
    };

    return (
        <form className="bg-white border border-rosy-100 p-4 rounded-md"
            onSubmit={handleSubmit}>
            <h4 className="font-semibold mb-3">Request a Consultation</h4>
            <p className="text-sm text-browny-50 mb-2">Share your event details—our team replies within 24 hours.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input name='name' value={form.name} onChange={handleChange} placeholder='Full name' className='p-2 border border-rosy-100 outline-rosy-200 rounded bg-rosy-50' />
                <input name='email' value={form.email} onChange={handleChange} placeholder='Email' className='p-2 border border-rosy-100 outline-rosy-200 rounded bg-rosy-50' />
                <input name='phone' value={form.phone} onChange={handleChange} placeholder='Phone number' className='p-2 border border-rosy-100 outline-rosy-200 rounded bg-rosy-50' />
                <input name='date' value={form.date} onChange={handleChange} placeholder='Event date' className='p-2 border border-rosy-100 outline-rosy-200 rounded bg-rosy-50' />
                <input name='guests' value={form.guests} onChange={handleChange} placeholder='Guests count' className='p-2 border border-rosy-100 outline-rosy-200 rounded bg-rosy-50' />
                <input name='venue' value={form.venue} onChange={handleChange} placeholder='Venue' className='p-2 border border-rosy-100 outline-rosy-200 rounded bg-rosy-50' />
                <input name='city' value={form.city} onChange={handleChange} placeholder='City / Region' className='p-2 border border-rosy-100 outline-rosy-200 rounded bg-rosy-50' />
                <input name='budget' value={form.budget} onChange={handleChange} placeholder='Budget range' className='p-2 border border-rosy-100 outline-rosy-200 rounded bg-rosy-50' />
                <input name='message' value={form.message} onChange={handleChange} placeholder='Share your vision, palette, and must-haves...' className='p-2 pb-16 border border-rosy-100 outline-rosy-200 rounded bg-rosy-50' />
                <input name='pinterest' value={form.pinterest} onChange={handleChange} placeholder='Pinterest / inspo link' className='p-2 pb-16 border border-rosy-100 outline-rosy-200 rounded bg-rosy-50' />
            </div>
            <div className="mt-4">
                <Button type="submit">
                    <Send />
                    {isLoading ? "Submitting..." : "Submit Inquiry"}
                </Button>
            </div>
        </form>
    )
}

export default ConsultationForm
