import {
    Users,
    Package,
    ShoppingCart,
    Heart,
    IndianRupee,
    MessageSquare,
} from "lucide-react";

import { useGetDashboardStatsQuery } from "../../app/api/adminApi";
import StatsCard from "../../components/dashboard/utills/StatsCard";
import SalesChart from "../../components/dashboard/utills/SalesChart";
import RecentOrders from "../../components/dashboard/utills/RecentOrders";
import Loader from "../../components/shared/Loader";

const AdminDashboard = () => {
    const { data, isLoading } = useGetDashboardStatsQuery();

    if (isLoading) return <Loader />;

    const { stats, sales, recentOrders } = data;

    return (
        <div className="space-y-8">
            {/* ===== TOP STATS ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                <StatsCard
                    label="Users"
                    value={stats.users}
                    Icon={Users}
                />
                <StatsCard
                    label="Products"
                    value={stats.products}
                    Icon={Package}
                />
                <StatsCard
                    label="Orders"
                    value={stats.orders}
                    Icon={ShoppingCart}
                />
                <StatsCard
                    label="Wishlist Items"
                    value={stats.wishlist}
                    Icon={Heart}
                />
                <StatsCard
                    label="Revenue"
                    value={`₹${stats.revenue.toLocaleString()}`}
                    Icon={IndianRupee}
                    footer="Paid orders only"
                />
                <StatsCard
                    label="Open Inquiries"
                    value={stats.openInquiries}
                    Icon={MessageSquare}
                    footer="Pending customer requests"
                />
            </div>

            {/* ===== CHART + RECENT ORDERS ===== */}
            <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <SalesChart data={sales} />
                </div>

                <RecentOrders orders={recentOrders} />
            </div>
        </div>
    );
};

export default AdminDashboard;
