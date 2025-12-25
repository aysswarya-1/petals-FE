import React from 'react'
// import { Sparkles } from 'lucide-react'
const categories = ['All', 'Bouquets', 'Arrangements', 'Occasions', 'Same-Day']

const CategoryTabs = ({ active, setActive }) => {
    return (
        <div className='flex flex-wrap gap-2 mb-4'>
            {categories.map(tab => (
                <button
                    key={tab}
                    onClick={() => setActive(tab)}
                    className={`px-3 py-1 rounded border border-rosy-100 text-sm ${active === tab ? 'bg-rosy-600 text-white'
                        : ''
                        }`}
                >
                    {/* <Sparkles /> */}
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default CategoryTabs
