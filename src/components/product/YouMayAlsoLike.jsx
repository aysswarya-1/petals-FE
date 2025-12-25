import React from 'react'
import ProductCard from '../shared/ProductCard'

const YouMayAlsoLike = ({ currentProduct, allProducts }) => {
    const related = allProducts
        // exclude current product
        .filter(p => p._id !== currentProduct._id)

        // match same category
        .filter(p => p.category === currentProduct.category)

        // limit to 4 items
        .slice(0, 4);

    return (
        <div className="mt-12 bg-white p-5 rounded-xl">
            <h2 className="text-lg font-semibold mb-4">You May Also Like</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                {related.length > 0 ? (
                    related.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <p className="text-gray-500 text-sm">
                        No related products found.
                    </p>
                )}
            </div>
        </div>
    )
}

export default YouMayAlsoLike
