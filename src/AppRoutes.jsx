import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/account/ProtectedRoute";
import AdminRoute from "./components/dashboard/routes/AdminRoute";
import UserRoute from "./components/dashboard/routes/UserRoute";

import PublicPages from "./pages/routes/PublicPages";
import CheckoutPages from "./pages/routes/CheckoutPages";
import AdminPages from "./pages/routes/AdminRoutes";
import UserPages from "./pages/routes/UserRoutes";

const AppRoutes = () => {
    const location = useLocation();
    const background = location.state?.background;

    return (
        <>
            <Routes location={background || location}>
                <Route path="/*" element={<PublicPages />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/cart/*" element={<CheckoutPages />} />
                </Route>

                <Route element={<AdminRoute />}>
                    <Route path="/admin/*" element={<AdminPages />} />
                </Route>

                <Route element={<UserRoute />}>
                    <Route path="/dashboard/*" element={<UserPages />} />
                </Route>
            </Routes>

            {background && (
                <Routes>
                    <Route path="/cart/*" element={<CheckoutPages />} />
                </Routes>
            )}
        </>
    );
};

export default AppRoutes;
