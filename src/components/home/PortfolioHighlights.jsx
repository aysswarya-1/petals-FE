import React from 'react'

const PortfolioHighlights = () => {
    const items = [
        { id: 1, title: 'Bridal Bouquet', img: 'https://images.unsplash.com/photo-1553975994-f96b9c55f1b0?w=600&auto=format&fit=crop&q=60' },
        { id: 2, title: 'Centerpiece', img: 'https://images.unsplash.com/photo-1690974549891-54c691419401?w=600&auto=format&fit=crop&q=60' },
        { id: 3, title: 'Ceremony Arch', img: 'https://images.unsplash.com/photo-1641834919507-b0271fe5186b?w=600&auto=format&fit=crop' },
        { id: 4, title: 'Boutonnieres', img: 'https://images.unsplash.com/photo-1647275402197-3fc57ff38340?w=600&auto=format&fit=crop&q=60' }
    ]

    return (
        <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h4 className="font-semibold">Portfolio Highlights</h4>
                    <p className="text-xs text-browny-100">A glimpse of ceremonies, tabletops, and installations we've designed.</p>
                </div>
                <a className="text-sm text-rosy-600">See gallery</a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {items.map(i => (
                    <div key={i.id} className='bg-white border border-rosy-100 rounded-md overflow-hidden shadow-md'>
                        <img src={i.img} alt={i.title} className="w-full h-36 object-cover" />
                        <div className="p-3">
                            <div className="font-semibold text-sm">{i.title}</div>
                            <div className="text-xs text-rosy-500 mt-1">Soft palettes • tailored details</div>
                            <div className="mt-3">
                                <button className="px-3 py-1 border border-rosy-400 rounded text-sm">
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PortfolioHighlights
