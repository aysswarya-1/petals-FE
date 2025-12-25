const RecentOrders = ({ orders = [] }) => {
    return (
        <div className="bg-white p-5 rounded-2xl border border-browny-50/40">
            <h3 className="font-semibold mb-4">Recent Orders</h3>

            {orders.length === 0 ? (
                <p className="text-sm text-gray-500">
                    No recent orders
                </p>
            ) : (
                <ul className="space-y-3">
                    {orders.map((order) => (
                        <li
                            key={order._id}
                            className="flex justify-between text-sm border-b border-dashed border-browny-50/50"
                        >
                            <span>
                                {order.user?.firstName}{" "}
                                {order.user?.lastName}
                            </span>
                            <span className="font-medium mb-1">
                                ₹{order.total}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RecentOrders;
