import { useState } from 'react';
import BreadCrumbs from '../shared/BreadCrumbs'
import WeddingsFilters from './WeddingsFilters';

const WeddingsHeader = () => {
    const [active, setActive] = useState('All')
    const [search, setSearch] = useState('')
    return (
        <div className='mt-5 bg-white  rounded-xl'>
            <BreadCrumbs />
            <div className="p-4">
                <h1 className="text-2xl font-semibold">Bespoke Weddings & Events</h1>
                <p className="text-sm text-browny-50 mt-1 max-w-2xl">
                    From intimate elopements to grand soirées—custom florals designed around your story, palette, and venue.
                </p>
                <div className='mt-2'>
                    <WeddingsFilters
                        active={active}
                        setActive={setActive}
                        search={search}
                        setSearch={setSearch}
                    />
                </div>
            </div>
        </div>
    );
}
export default WeddingsHeader