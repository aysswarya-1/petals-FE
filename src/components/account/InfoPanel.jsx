import React from 'react'

const InfoPanel = () => {
    return (
        <div className="bg-white rounded-lg p-6 border border-rosy-100 shadow-sm h-full sm:mb-6">
            <div className="rounded-lg overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1617176756162-447320192d98?w=600&auto=format&fit=crop&q=60"
                    alt="Flower bouquet"
                    className="w-full h-64 object-cover"
                />
            </div>

            <p className="text-sm text-browny-50 mt-4">
                For everyday & forever
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-2">
                An account for every occasion
            </h2>
            <p className="text-sm text-gray-600 mt-3 max-w-xl">
                Save your favorite bouquets, remember important dates, and keep all your wedding details in one place.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-gray-500 list-disc list-inside">
                <li>Faster checkout with saved delivery details</li>
                <li>Access past orders and receipts</li>
                <li>Wishlist for birthdays, anniversaries, and weddings</li>
            </ul>
        </div>
    )
}

export default InfoPanel
