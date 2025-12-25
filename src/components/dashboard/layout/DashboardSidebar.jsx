import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { LayoutDashboard } from "lucide-react";

const DashboardSidebar = ({ navConfig }) => {
    const { user } = useSelector((state) => state.auth);
    const [open, setOpen] = useState(false);

    const roleTitle =
        user?.role?.charAt(0).toUpperCase() + user?.role?.slice(1);

    return (
        <>
            {/* MOBILE COLLAPSED ICON (LEFT STRIP) */}
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="
            md:hidden
            fixed left-2 top-1/2 -translate-y-1/2
            z-40
            bg-white border border-rosy-400/60
            p-3 rounded-xl shadow
          "
                >
                    <LayoutDashboard size={22} className="text-rosy-700" />
                </button>
            )}

            {/* SIDEBAR */}
            <aside
                className={`
          fixed md:static top-0 left-0 z-50
          h-screen md:h-auto
          w-64
          bg-white
          border border-rosy-400/60
          shadow-md
          rounded-none md:rounded-xl
          mt-0 md:mt-5
          flex flex-col
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
            >
                {/* HEADER */}
                <div className="p-6 font-semibold text-lg text-rosy-700 flex justify-between items-center">
                    {roleTitle} Panel
                    <button
                        onClick={() => setOpen(false)}
                        className="md:hidden text-xl"
                    >
                        ✕
                    </button>
                </div>

                {/* NAV */}
                <nav className="flex-1 flex flex-col gap-1 px-4">
                    {navConfig.map((item) => {
                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition
                                ${isActive ? "bg-rose-100 text-rosy-700" : "hover:bg-rose-50 text-gray-700"}`
                                }
                            >
                                <Icon size={18} />
                                <span>{item.label}</span>
                            </NavLink>

                        );
                    })}
                </nav>

                {/* FOOTER */}
                <div className="text-xs p-4 font-medium text-browny-100 truncate">
                    {user?.email}
                </div>
            </aside>
        </>
    );
};

export default DashboardSidebar;
