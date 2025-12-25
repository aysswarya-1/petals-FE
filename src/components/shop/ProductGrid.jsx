import React from 'react'
import TaggedProductCard from './TaggedProductCard'

const ProductGrid = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map(p => (
                <TaggedProductCard key={p._id} product={p} />
            ))}
        </div>
    )
}

export default ProductGrid
