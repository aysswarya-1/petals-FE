import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const { user, isAuthenticated, authChecked } = useSelector(state => state.auth);

    // Wait until refresh/bootstrap completes
    if (!authChecked) {
        return <div>Loading...</div>; // or spinner
    }

    // If not authenticated, redirect
    if (!isAuthenticated) {
        return <Navigate to="/account" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
