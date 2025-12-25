import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../shared/Loader";

const UserRoute = () => {
    const { user, authChecked, isAuthenticated } = useSelector(
        (state) => state.auth);
    if (!authChecked) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/account" replace />;
    }

    if (!isAuthenticated || user?.role !== "user") {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default UserRoute;
