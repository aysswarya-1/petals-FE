import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../app/cartSlice'
import ImageGallery from '../../components/product/ImageGallery'
import ProductConfig from '../../components/product/ProductConfig'
import ProductDescription from '../../components/product/ProductDescription'
import YouMayAlsoLike from '../../components/product/YouMayAlsoLike'
import BreadCrumbs from '../../components/shared/BreadCrumbs'
import { useGetProductsQuery } from '../../app/api/productsApi'
import { setProducts } from '../../app/productsSlice'

const ProductDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const { data: apiProducts } = useGetProductsQuery(id);
    const products = useSelector(state => state.products.items)

    useEffect(() => {
        if (products.length === 0 && apiProducts) {
            dispatch(setProducts(apiProducts));
        }
    }, [products, apiProducts, dispatch]);

    const product = products.find(p => p._id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-600">
                Product not found...
            </div>
        );
    }

    const handleAdd = () => dispatch(addToCart(product));

    return (
        <div className='min-h-screen mt-5'>
            <BreadCrumbs />
            <div className="mx-auto grid lg:grid-cols-2 gap-10 rounded-xl mt-5">
                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                    <ImageGallery images={product.images} />
                </div>

                <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
                    <ProductConfig product={product} onAdd={handleAdd} />
                    <ProductDescription product={product} />
                </div>
            </div>
            <YouMayAlsoLike allProducts={products} currentProduct={product} />
        </div>
    )
}

export default ProductDetails
