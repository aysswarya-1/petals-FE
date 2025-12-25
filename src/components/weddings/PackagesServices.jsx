import React from 'react'

const PackagesServices = () => {

    const packages = [
        { name: "Intimate", design: "Elopments, micro-weddings", price: "From $950" },
        { name: "Signature", design: "Full floral design", price: "From $3,800" },
        { name: "Luxury", design: "Large-scale installs", price: "Custom quote" },
    ];

    return (
        <div className="bg-white p-6 rounded-md border border-rosy-100">
            <h3 className="font-semibold mb-4">Packages & Services</h3>
            <p className="text-sm text-browny-50 mb-4">Flexible offerings for different scales.</p>
            {packages.map(pkg => (
                <div key={pkg.name} className="border border-rosy-100 p-4 rounded mb-3 flex justify-between items-stretch">
                    <div className='flex flex-col gap-1'>
                        <h4 className="font-medium">{pkg.name}</h4>
                        <p className="text-sm text-browny-50 mb-2">{pkg.design}</p>
                        <p className="text-sm text-browny-100">{pkg.price}</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <button className="mt-auto border border-rosy-100 px-4 py-1 rounded-md cursor-pointer
                        hover:bg-rosy-400 hover:text-white">
                            Request</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PackagesServices
