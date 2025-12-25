import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../app/cartSlice";
import { Link, useLocation } from "react-router-dom";
import { Heart } from "lucide-react";
import { useWishlistQuery, useToggleWishlistMutation } from "../../app/api/userApi";

const TaggedProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const accessToken = useSelector((state) => state.auth.accessToken);

    // Fetch user's wishlist
    const { data: wishlistData } = useWishlistQuery(undefined, {
        skip: !accessToken, // don't fetch if not logged in
    });

    const [toggleWishlist] = useToggleWishlistMutation();

    // Check if product is in wishlist
    const isInWishlist = wishlistData?.some((item) => item._id === product._id);

    const handleWishlistClick = async (e) => {
        e.stopPropagation(); // Prevent card click navigation
        if (!accessToken) {
            alert("Please login to use wishlist.");
            return;
        }

        try {
            await toggleWishlist(product._id).unwrap();
        } catch (err) {
            console.error("Wishlist update failed", err);
        }
    };

    return (
        <div className="group border-2 border-rosy-100 rounded-md overflow-hidden bg-white relative">
            {/* Tag */}
            {product?.tags?.length > 0 && (
                <span className="absolute top-2 left-2 z-20 text-xs bg-rosy-600 text-white px-2 py-1 rounded">
                    {product.tags[0]}
                </span>
            )}

            {/* Wishlist Button */}
            <button
                onClick={handleWishlistClick}
                className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition"
            >
                <Heart
                    className={`w-5 h-5 ${isInWishlist
                            ? "text-rosy-600 fill-rosy-600"
                            : "text-white hover:fill-white"
                        }`}
                />
            </button>

            {/* Image Wrapper */}
            <div className="relative overflow-hidden">
                <img
                    src={product.images?.[0]?.url}
                    alt={product.title}
                    className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300" />

                {/* View Details Button */}
                <Link
                    to={`/product/${product._id}`}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <button
                        className="
                            opacity-0 
                            group-hover:opacity-100
                            translate-y-16 
                            group-hover:translate-y-12
                            transition-all duration-300
                            bg-rosy-500/90 text-sm px-4 py-2 rounded
                            border-2 border-rosy-700
                        "
                    >
                        View Details
                    </button>
                </Link>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col">
                <h4 className="font-semibold">{product.title}</h4>
                <p className="text-xs text-rosy-600 mb-3">{product.category}</p>

                <div className="mt-auto flex justify-between items-center">
                    <span className="font-semibold">${product.price}</span>

                    {/* Quick Add */}
                    <Link to="/cart" state={{ background: location }}>
                        <button
                            onClick={() => dispatch(addToCart(product))}
                            className="text-xs border border-rosy-400 px-3 py-1 rounded"
                        >
                            Quick Add
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TaggedProductCard;
