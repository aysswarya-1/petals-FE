import React from 'react'
import Button from '../shared/Button'
import { CalendarHeart, Sparkles } from 'lucide-react'
const Hero = () => {
    return (
        <section className="bg-white border border-rose-100 rounded-md p-6 mb-8 mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="rounded overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1577563847084-3be2350d9a3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="hero"
                        className="w-full h-64 md:h-80 object-cover rounded" />
                </div>
                <div>
                    <h4 className="text-xs text-rosy-500">Elegant floral design</h4>
                    <h1 className="text-2xl md:text-3xl font-bold mt-2">Timeless Flowers for Every Love Story</h1>
                    <p className="text-sm text-rosy-500 mt-3">From everyday gestures to once-in-a-lifetime celebrations, our handcrafted arrangements bring softness and romance to every moment.</p>


                    <div className="mt-6 flex gap-3">
                        <Button variant="primary">
                            <Sparkles />
                            Shop Now
                        </Button>
                        <Button>
                            <CalendarHeart />
                            Request a Consultation</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
