const WishlistGrid = ({ users = [], title = "Wishlists" }) => {
    if (!users.length) {
        return <p className="text-gray-500">No wishlists found</p>;
    }

    return (
        <div className="space-y-6">
            <h1 className="text-lg text-center sm:text-left font-semibold">
                {title}
            </h1>

            {users.map((user) => (
                <div
                    key={user._id}
                    className="bg-white/50 border border-browny-50/50 rounded-xl p-4"
                >
                    {/* USER HEADER */}
                    <h2 className="font-semibold text-sm mb-3">
                        {user.firstName} {user.lastName}
                        {user.email && (
                            <span className="text-gray-400 ml-2 text-xs">
                                ({user.email})
                            </span>
                        )}
                    </h2>

                    {/* PRODUCTS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {user.wishlist?.map((product) => (
                            <div
                                key={product._id}
                                className="border border-browny-50/50 rounded-lg p-2 flex flex-col"
                            >
                                <img
                                    src={product.images?.[0]?.url}
                                    alt={product.title}
                                    className="h-28 w-full object-cover rounded"
                                />

                                <p className="text-sm mt-2 line-clamp-2">
                                    {product.title}
                                </p>

                                <p className="text-rosy-600 text-sm font-semibold mt-auto">
                                    ₹{product.price}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WishlistGrid;
