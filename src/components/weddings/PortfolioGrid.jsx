import React from 'react'
import PortfolioCard from './PortfolioCard';

const PortfolioGrid = () => {
    const data = [
        { title: "Bridal Bouquet", subtitle: "Peonies, garden roses", image: "https://images.unsplash.com/photo-1553975994-f96b9c55f1b0?w=600&auto=format&fit=crop" },
        { title: "Centerpiece", subtitle: "Low lush compotes", image: "https://images.unsplash.com/photo-1690974549891-54c691419401?w=600&auto=format&fit=crop&q=60" },
        { title: "Ceremony Arch", subtitle: "Statement install", image: "https://images.unsplash.com/photo-1641834919507-b0271fe5186b?w=600&auto=format&fit=crop" },
        { title: "Hanging Install", subtitle: "Ceiling florals", image: "https://images.unsplash.com/photo-1678765983199-9e671a3f460d?w=600&auto=format&fit=crop&q=60" },
        { title: "Boutonnières", subtitle: "Tailored details", image: "https://images.unsplash.com/photo-1647275402197-3fc57ff38340?w=600&auto=format&fit=crop&q=60" },
        { title: "Aisle Florals", subtitle: "Petals & clusters", image: "https://images.unsplash.com/photo-1719355399839-12f72314e5f5?w=600&auto=format&fit=crop&q=60&" },
    ];

    return (
        <div>
            <div className="flex justify-between mb-4">
                <h3 className="font-semibold">Portfolio Highlights</h3>
                <p className="text-sm text-rosy-500 cursor-pointer">See gallery</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
                {data.map((item, i) => (
                    <PortfolioCard key={i} {...item} />
                ))}
            </div>
        </div>
    )
}

export default PortfolioGrid  
