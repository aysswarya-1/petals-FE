import React, { useState } from 'react';
import { Truck, Calendar, ShoppingCart, Heart } from 'lucide-react';
import Button from '../shared/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useWishlistQuery, useToggleWishlistMutation } from '../../app/api/userApi';
import { toast } from "react-toastify";

const ProductConfig = ({ product, onAdd }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const accessToken = useSelector((state) => state.auth.accessToken);

    const { data: wishlistData } = useWishlistQuery(undefined, { skip: !accessToken });
    const [toggleWishlist] = useToggleWishlistMutation();

    const isInWishlist = wishlistData?.some((item) => item._id === product._id);

    const handleAddAndOpenCart = () => {
        onAdd();
        navigate('/cart', { state: { background: location } });
    };

    const handleWishlistClick = async () => {
        if (!accessToken) {
            toast.warn('Please login to use wishlist.');
            return;
        }
        try {
            await toggleWishlist(product._id).unwrap();
        } catch (err) {
            console.error('Wishlist update failed', err);
        }
    };

    // Local state for selected options
    const [selectedSize, setSelectedSize] = useState(product.size || '');
    const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
    const [selectedDelivery, setSelectedDelivery] = useState(product.deliveryOptions?.[0] || '');
    const [selectedDate, setSelectedDate] = useState('');

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
            <p className="text-gray-500 mb-2">{product.subtitle}</p>

            <div className="flex items-center justify-between mb-4">
                <p className="text-xl font-bold">${product.price}</p>
                {product.tag && (
                    <span className="text-xs bg-rose-100 text-rosy-600 px-2 py-1 rounded">
                        {product.tag}
                    </span>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {/* Size */}
                <div className="border border-rosy-100 focus:outline-none rounded p-2">
                    <select
                        className="w-full outline-none bg-transparent"
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                    >
                        {[product.size, ...(product.sizes || [])].filter(Boolean).map((size) => (
                            <option key={size} value={size}>
                                {size.charAt(0).toUpperCase() + size.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Color */}
                <div className="border border-rosy-100 focus:outline-none rounded p-2">
                    <select
                        className="w-full outline-none bg-transparent"
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                    >
                        {product.colors?.map((color) => (
                            <option key={color} value={color}>
                                {color.charAt(0).toUpperCase() + color.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Delivery Options */}
                <div className="flex items-center border border-rosy-100 focus:outline-none p-2 rounded gap-2">
                    <Truck size={18} />
                    <select
                        className="outline-none bg-transparent w-full"
                        value={selectedDelivery}
                        onChange={(e) => setSelectedDelivery(e.target.value)}
                    >
                        {product.deliveryOptions?.map((option) => (
                            <option key={option} value={option}>
                                {option === 'pickup' ? 'Pickup' : 'Same Day'}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Date Picker */}
                <div className="flex items-center border border-rosy-100 focus:outline-none p-2 rounded gap-2">
                    <Calendar size={16} />
                    <input
                        type="date"
                        className="w-full text-sm outline-none"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
                <label htmlFor="qty">Qty</label>
                <input
                    id="qty"
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="w-16 border border-rosy-100 focus:outline-none rounded p-2"
                />
            </div>

            <div className="flex items-center gap-4 mb-6">
                <Link to="/cart" state={{ background: location }}>
                    <Button onClick={handleAddAndOpenCart}>
                        <ShoppingCart />
                        Add to Bag
                    </Button>
                </Link>

                <Button variant="secondary" onClick={handleWishlistClick}>
                    <Heart className={isInWishlist ? 'fill-rosy-700' : ''} />
                    {isInWishlist ? 'Saved' : 'Save'}
                </Button>
            </div>

            <p className="text-xs text-gray-400">
                Order by 2pm for same-day delivery.
            </p>
        </div>
    );
};

export default ProductConfig;
