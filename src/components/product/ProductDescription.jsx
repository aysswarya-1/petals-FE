import React from 'react'

const ProductDescription = ({ product }) => {
    return (
        <div className='container mx-auto mt-8 bg-white p-4 rounded-xl grid md:grid-cols-1 gap-6'>

            <div>
                <h3 className="font-semibold mb-2 text-browny-100">Description</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
            </div>

            <div className='py-4 border-y-3 border-muted'>
                <h3 className="font-semibold mb-2 text-browny-100">What's Included</h3>
                <ul className="text-sm text-gray-600 list-disc ml-4 space-y-1">
                    <li>Hand-tied bouquet</li>
                    <li>Care card & water pack</li>
                    <li>Complimentary note card</li>
                </ul>
            </div>
            <div>
                <h3 className="font-semibold mb-2">Care</h3>
                <p className="text-sm text-browny-50">
                    Trim stems and keep in fresh water away from heat.
                </p>
            </div>
        </div>
    )
}

export default ProductDescription
