import React from 'react'
import { Sparkles, Flower2, Archive, Home, Layout } from 'lucide-react'

const WeddingsFilters = ({ active, setActive, search, setSearch }) => {
    const filters = [
        { name: "All", icon: Sparkles },
        { name: "Bouquets", icon: Flower2 },
        { name: "Centerpieces", icon: Archive },
        { name: "Arches", icon: Home },
        { name: "Installations", icon: Layout },
    ]

    return (
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap gap-2">
                {filters.map(({ name, icon: Icon }) => (
                    <button
                        key={name}
                        onClick={() => setActive(name)}
                        className={`flex items-center gap-2 px-3 py-1 rounded border border-rosy-100 text-sm transition
              ${active === name ? 'bg-rosy-600 text-white' : 'bg-white hover:bg-rosy-50'}
            `}
                    >
                        <Icon size={14} />
                        {name}
                    </button>
                ))}
            </div>

            <input
                type="text"
                placeholder="Search styles, palettes, venues..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-4 py-2 border border-rosy-100 focus:outline-none rounded-md text-sm w-72"
            />
        </div>
    );
}

export default WeddingsFilters
