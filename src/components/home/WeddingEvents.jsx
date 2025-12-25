import { Image, PenLine } from 'lucide-react'
import React from 'react'
import Button from '../shared/Button'

const WeddingEvents = () => {
    return (
        <section className='bg-muted border border-rose-100 rounded-md p-6 mb-8 mt-5'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                    <h4 className="text-xs text-rosy-500">Weddings & Events</h4>
                    <h1 className="text-2xl md:text-3xl font-bold mt-2">Romance, Perfected</h1>
                    <p className="text-sm text-rosy-500 mt-3">Bespoke florals for ceremonies, receptions, and milestone celebrations. Explore our portfolio and tell us your vision.</p>

                    <div className="mt-6 flex gap-3">
                        <Button variant="primary">
                            <PenLine />
                            Start an Inquiry
                        </Button>
                        <Button>
                            <Image />
                            View Portfolio</Button>
                    </div>
                </div>
                <div className="rounded overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1762805088436-ffa7b89779a9?q=80&w=687&auto=format&fit=crop"
                        alt="hero"
                        className="w-full h-64 md:h-80 object-cover rounded" />
                </div>
            </div>

        </section>
    )
}

export default WeddingEvents
