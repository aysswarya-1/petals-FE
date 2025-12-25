import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = ({ navConfig }) => {
    return (
        <div className="min-h-screen flex bg-rose-50">
            <DashboardSidebar navConfig={navConfig} />
            <div className="flex-1">
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
