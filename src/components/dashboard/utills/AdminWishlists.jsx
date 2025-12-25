import { useGetAllWishlistsQuery } from "../../../app/api/userApi";

const AdminWishlists = () => {
    const { data: users = [], isLoading } = useGetAllWishlistsQuery();

    if (isLoading) return <p>Loading wishlists...</p>;

    if (!users.length)
        return <p className="text-gray-500">No wishlists found</p>;

    return (
        <>
            <h1 className="text-lg text-center sm:text-left font-semibold mb-4">Wishlists</h1>
            <div className="space-y-8">
                {users.map((user) => (
                    <div
                        key={user._id}
                        className="bg-white border border-browny-50/50 rounded-xl p-4"
                    >
                        <h2 className="font-semibold text-sm mb-3">
                            {user.firstName} {user.lastName}
                            <span className="text-gray-400 ml-2 text-xs">
                                ({user.email})
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {user.wishlist.map((product) => (
                                <div
                                    key={product._id}
                                    className="border border-browny-50/50 rounded-lg p-2"
                                >
                                    <img
                                        src={product.images?.[0]?.url}
                                        className="h-28 w-full object-cover rounded"
                                    />
                                    <p className="text-sm mt-1">{product.title}</p>
                                    <p className="text-rosy-600 text-sm font-semibold">
                                        ₹{product.price}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AdminWishlists;
