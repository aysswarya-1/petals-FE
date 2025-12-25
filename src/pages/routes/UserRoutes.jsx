import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../../components/dashboard/layout/DashboardLayout";
import userNav from "../../components/dashboard/navigation/userNav";
import UsersDashboard from "../../pages/users/UserDashboard";
import UserOrders from "../../pages/users/UserOrders";
import UserProfile from "../../pages/users/UserProfile";
import UserAddress from "../../pages/users/UserAddress";
import UserWishlist from "../../pages/users/UserWishlist";
import UserInquiries from "../../pages/users/UserInquiry";

const UserPages = () => {
    return (
        <Routes>
            <Route element={<DashboardLayout navConfig={userNav} />}>
                <Route index element={<UsersDashboard />} />
                <Route path="orders" element={<UserOrders />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="address" element={<UserAddress />} />
                <Route path="wishlist" element={<UserWishlist />} />
                <Route path="inquiries" element={<UserInquiries />} />
            </Route>
        </Routes>
    );
};

export default UserPages;
