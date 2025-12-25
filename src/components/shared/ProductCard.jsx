import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../app/cartSlice'
import { Link, useLocation } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const location = useLocation()
    const dispatch = useDispatch()
    return (
        <div className='bg-white border border-rose-100 rounded-md overflow-hidden shadow-md'>
            <img src={product.images?.[0]?.url} alt={product.title} className="w-full h-36 md:h-44 object-cover" />
            <div className="p-3">
                <div className="font-semibold text-sm mb-1">{product.title}</div>
                <div className="text-xs text-rosy-600 mb-3">Seasonal mix • {product.tags?.[0] || "Standard"}</div>
                <div className="flex items-center justify-between">
                    <div className="font-bold">${product.price}</div>
                    <div className="flex gap-2">
                        {/* Quick Add */}
                        <Link
                            to="/cart"
                            state={{ background: location }}
                        >
                            <button
                                onClick={() => dispatch(addToCart(product))}
                                className="text-xs border border-rosy-400 px-3 py-1 rounded"
                            >
                                Quick Add
                            </button>
                        </Link>
                        <Link
                            to={`/product/${product._id}`}>
                            <button
                                className='px-3 py-1 text-xs border border-rosy-400 rounded'>
                                View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
