import React from 'react'
import Button from '../shared/Button'

const PortfolioCard = ({ title, subtitle, image }) => {
    return (
        <div className="bg-white border border-rosy-100 rounded-lg overflow-hidden">
            <img src={image} className="h-44 w-full object-cover" />

            <div className="p-4 flex justify-between">
                <div>
                    <h4 className="font-medium">{title}</h4>
                    <p className="text-sm text-gray-500">{subtitle}</p>
                </div>

                <Button
                    variant='secondary'>
                    View
                </Button >
            </div>
        </div>
    )
}

export default PortfolioCard
