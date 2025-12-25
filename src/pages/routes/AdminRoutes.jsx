import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../../components/dashboard/layout/DashboardLayout";
import adminNav from "../../components/dashboard/navigation/adminNav";
import AdminDashboard from "../../pages/admin/AdminDashboard";
import AdminUsers from "../../pages/admin/AdminUsers";
import AdminProducts from "../../pages/admin/AdminProducts";
import EditProduct from "../../components/dashboard/products/EditProduct";
import AddProduct from "../../components/dashboard/products/AddProduct";
import AdminOrders from "../../pages/admin/AdminOrders";
import AdminInquiries from "../../pages/admin/AdminInquiries";
import AdminWishlists from "../../components/dashboard/utills/AdminWishlists";
import AdminProfile from "../../pages/admin/AdminProfile";
import AdminAddress from "../../pages/admin/AdminAddress";

const AdminPages = () => {
    return (
        <Routes>
            <Route element={<DashboardLayout navConfig={adminNav} />}>
                <Route index element={<AdminDashboard />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="products/edit/:id" element={<EditProduct />} />
                <Route path="products/add" element={<AddProduct />} />
                <Route path="orders" element={<AdminOrders />} />
                <Route path="inquiries" element={<AdminInquiries />} />
                <Route path="wishlist" element={<AdminWishlists />} />
                <Route path="profile" element={<AdminProfile />} />
                <Route path="address" element={<AdminAddress />} />
            </Route>
        </Routes>
    );
};

export default AdminPages;
