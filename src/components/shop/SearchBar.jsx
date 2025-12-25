import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({ value, onChange }) => {
    return (
        <div className='relative w-full md:w-72'>
            <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
            <input
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder='Search flowers, palettes, occasions…'
                className='w-full pl-10 pr-3 py-2 border border-rosy-100 focus:outline-rose-200 rounded text-sm'
            />
        </div>
    )
}

export default SearchBar
