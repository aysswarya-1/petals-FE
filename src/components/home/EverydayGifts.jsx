import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../shared/ProductCard'

const EverydayGifts = () => {
    const products = useSelector(s => s.products.featured)
    return (
        <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="font-semibold text-lg">Everyday Gifts</h3>
                    <p className="text-xs text-gray-400">
                        Thoughtful bouquets and arrangements for birthdays, thank-yous, and “just because.”
                    </p>
                </div>
                <a className='text-sm text-rosy-500'>View all</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {products.map(p =>
                    <ProductCard key={p._id} product={p} />
                )}
            </div>
        </section>
    )
}

export default EverydayGifts
