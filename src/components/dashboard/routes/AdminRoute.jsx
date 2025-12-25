import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
    const { user, authChecked, isAuthenticated } = useSelector(
        (state) => state.auth);

    // Wait until bootstrap (refresh) finishes
    if (!authChecked) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/account" replace />;
    }

    // Only allow access if user is authenticated and role is admin
    if (!isAuthenticated || user?.role !== "admin") {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default AdminRoute;
