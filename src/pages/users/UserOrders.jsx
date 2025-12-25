import { useNavigate } from "react-router-dom";
import { useGetMyOrdersQuery } from "../../app/api/orderApi";
import Loader from "../../components/shared/Loader";
import OrderCard from "../../components/dashboard/orders/OrderCard";

const UserOrders = () => {
    const { data, isLoading } = useGetMyOrdersQuery();
    const orders = data?.orders || [];

    if (isLoading) return <Loader />;

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-center sm:text-left text-xl font-semibold mb-6">My Orders</h1>

            <div className="space-y-4">
                {orders.map((order) => (
                    <OrderCard
                        key={order._id}
                        mode="user"
                        order={order}
                    />
                ))}
            </div>
        </div>
    );
};

export default UserOrders;
