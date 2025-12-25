import { useNavigate } from "react-router-dom";
import { useGetOrdersQuery } from "../../app/api/orderApi";
import Loader from "../../components/shared/Loader";
import OrderCard from "../../components/dashboard/orders/OrderCard";

const AdminOrders = () => {
    const { data, isLoading } = useGetOrdersQuery();
    const orders = data?.orders || [];
    const navigate = useNavigate();

    if (isLoading) return <Loader />;

    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-center sm:text-left text-xl font-semibold mb-6">Orders</h1>

            <div className="space-y-4">
                {orders.map((order) => (
                    <OrderCard
                        key={order._id}
                        order={order}
                        onClick={() => navigate(`/admin/orders/${order._id}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default AdminOrders;
