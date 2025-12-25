import StatsCard from "../../components/dashboard/utills/StatsCard";
import SalesChart from "../../components/dashboard/utills/SalesChart";
import OrderCard from "../../components/dashboard/orders/OrderCard";
import Loader from "../../components/shared/Loader";
import { useGetUserDashboardQuery } from "../../app/api/userApi";

const UsersDashboard = () => {
    const { data, isLoading } = useGetUserDashboardQuery();

    if (isLoading) return <Loader />;

    const { stats, sales, recentOrders = [] } = data || {};

    const dashboardStats = [
        { label: "My Orders", value: stats?.orders ?? 0 },
        { label: "Pending Orders", value: stats?.pendingOrders ?? 0 },
        { label: "Wishlist Items", value: stats?.wishlist ?? 0 },
        { label: "Total Spent", value: `₹${stats?.totalSpent ?? 0}` },
    ];

    return (
        <div className="space-y-8">

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {dashboardStats.map((s, i) => (
                    <StatsCard
                        key={i}
                        label={s.label}
                        value={s.value}
                    />
                ))}
            </div>

            {/* CHART */}
            <div className="bg-white p-4 rounded-xl border border-browny-50/50">
                <h2 className="text-lg font-semibold mb-4">
                    Orders & Spending
                </h2>

                {sales?.length ? (
                    <SalesChart
                        title="My Orders & Spending"
                        data={sales}
                        showOrders
                        showRevenue
                    />
                ) : (
                    <p className="text-sm text-gray-500">
                        No order activity yet.
                    </p>
                )}
            </div>

            {/* RECENT ORDERS (safe even if backend not ready) */}
            <div className="bg-white p-4 rounded-xl border border-browny-50/50">
                <h2 className="text-lg font-semibold mb-4">
                    Recent Orders
                </h2>

                {recentOrders.length === 0 ? (
                    <p className="text-sm text-gray-500">
                        You haven’t placed any orders yet.
                    </p>
                ) : (
                    <div className="space-y-3">
                        {recentOrders.map(order => (
                            <OrderCard
                                key={order._id}
                                order={order}
                                mode="user"
                            />
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default UsersDashboard;
