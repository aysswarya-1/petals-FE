import React from 'react'

const AboutUs = () => {
    return (
        <section className="rounded-md p-6 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="rounded overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1649738308588-07716edfa020?w=600&auto=format&fit=crop&q=60"
                        alt="About Blush & Bloom"
                        className="w-full h-72 md:h-72 object-cover rounded"
                    />
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-3">About Us</h2>
                    <p className="text-sm text-browny-100 mb-4">Founded by designers who believe flowers are poetry in color and form. We source the season’s best blooms and craft with care, sustainability, and romance.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                        <div className="bg-rosy-50 p-4 rounded-md border border-rosy-100">
                            <h4 className="font-semibold mb-2">Our Craft</h4>
                            <p className="text-xs text-rosy-500">Garden-inspired, refined, and balanced — never overdone.</p>
                        </div>


                        <div className="bg-rosy-50 p-4 rounded-md border border-rosy-100">
                            <h4 className="font-semibold mb-2">Sourcing</h4>
                            <p className="text-xs text-rosy-500">Local growers first; mindful, seasonal selections.</p>
                        </div>


                        <div className="bg-rosy-50 p-4 rounded-md border border-rosy-100">
                            <h4 className="font-semibold mb-2">Service</h4>
                            <p className="text-xs text-rosy-500">Concierge care from first mood board to last petal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
