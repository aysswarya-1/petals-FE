import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryTabs from '../../components/shop/CategoryTabs'
import SearchBar from '../../components/shop/SearchBar'
import Filters from '../../components/shop/Filters'
import SpringBanner from '../../components/shop/SpringBanner'
import ProductGrid from '../../components/shop/ProductGrid'
import Pagination from '../../components/shared/Pagination'
import BreadCrumbs from '../../components/shared/BreadCrumbs'
import { useGetProductsQuery } from '../../app/api/productsApi'
import { setProducts } from '../../app/productsSlice'


export default function Shop() {
    const dispatch = useDispatch();
    const { data, isLoading, error } = useGetProductsQuery();

    useEffect(() => {
        if (data) dispatch(setProducts(data));
    }, [data, dispatch]);

    const allProducts = useSelector(state => state.products.items)

    const [active, setActive] = useState('All')
    const [search, setSearch] = useState('')
    const [price, setPrice] = useState({ min: '', max: '' })
    const [page, setPage] = useState(1)
    const [filters, setFilters] = useState({
        colors: [],
        size: [],
        delivery: [],
    });

    const perPage = 8

    const filtered = allProducts.filter((p) => {
        // ✅ Search
        const matchesSearch = p.title
            .toLowerCase()
            .includes(search.toLowerCase());

        // ✅ Category Tabs
        const matchesCategory =
            active === "All" || p.category === active;

        // ✅ Price
        const matchesPrice =
            (!price.min || p.price >= price.min) &&
            (!price.max || p.price <= price.max);

        // ✅ Colors (product colors is array)
        const matchesColor =
            filters.colors.length === 0 ||
            p.colors.some((c) => filters.colors.includes(c));

        // ✅ Size (single value)
        const matchesSize =
            filters.size.length === 0 ||
            filters.size.includes(p.size);

        // ✅ Delivery (product deliveryOptions is array)
        const matchesDelivery =
            filters.delivery.length === 0 ||
            p.deliveryOptions.some((d) => filters.delivery.includes(d));

        return (
            matchesSearch &&
            matchesCategory &&
            matchesPrice &&
            matchesColor &&
            matchesSize &&
            matchesDelivery
        );
    });


    const totalPages = Math.ceil(filtered.length / perPage)
    const visible = filtered.slice((page - 1) * perPage, page * perPage)


    return (
        <main className="max-w-7xl mt-5">
            <BreadCrumbs />
            <div className='bg-white p-4 rounded-xl  mt-4'>

                <h1 className="text-3xl font-bold mb-1">Everyday Gifts</h1>
                <p className="text-gray-500 text-sm mb-2">
                    Handcrafted bouquets and arrangements ready to delight—delivered same day in select areas.
                </p>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <CategoryTabs active={active} setActive={setActive} />
                    <SearchBar value={search} onChange={setSearch} />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-5">
                <Filters setPrice={setPrice} filters={filters} setFilters={setFilters} />


                <section className="lg:col-span-3">
                    <SpringBanner />
                    <ProductGrid products={visible} />
                    <Pagination page={page} setPage={setPage} total={totalPages} />
                </section>
            </div>


        </main>
    )
}