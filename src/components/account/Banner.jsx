import React from 'react'
import BreadCrumbs from '../shared/BreadCrumbs'

const Banner = () => {
    return (
        <div className="bg-white rounded-xl p-4 border border-rose-100 shadow-sm">
            <BreadCrumbs />

            <h1 className="text-xl sm:text-3xl font-bold text-gray-900">
                Welcome back to Blush & Bloom
            </h1>

            <p className="text-xs sm:text-sm text-browny-50 mt-2 max-w-2xl">
                Create an account to save addresses, track orders, and plan your celebrations—or sign in to continue.
            </p>
        </div>
    )
}

export default Banner
