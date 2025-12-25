import { useWishlistQuery } from "../../app/api/userApi";
import WishlistGrid from "../../components/dashboard/utills/WishlistGrid";
import Loader from "../../components/shared/Loader";


const UserWishlist = () => {
    const { data, isLoading } = useWishlistQuery();

    if (isLoading) return <Loader />;

    const users = [
        {
            _id: "me",
            firstName: "My",
            lastName: "Wishlist",
            wishlist: data || [],
        },
    ];

    return (
        <WishlistGrid
            title="My Wishlist"
            users={users}
        />
    );
};

export default UserWishlist;
