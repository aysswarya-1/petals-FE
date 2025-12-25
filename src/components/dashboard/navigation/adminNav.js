import {
    LayoutDashboard,
    User,
    MapPin,
    Users,
    Package,
    Heart,
    Receipt,
    MessageSquare,
} from "lucide-react";

export default [
    {
        label: "Dashboard",
        path: "/admin",
        icon: LayoutDashboard,
    },
    {
        label: "Profile",
        path: "/admin/profile",
        icon: User,
    },
    {
        label: "Address",
        path: "/admin/address",
        icon: MapPin,
    },
    {
        label: "Users",
        path: "/admin/users",
        icon: Users,
    },
    {
        label: "Products",
        path: "/admin/products",
        icon: Package,
    },
    {
        label: "Wishlist",
        path: "/admin/wishlist",
        icon: Heart,
    },
    {
        label: "Orders",
        path: "/admin/orders",
        icon: Receipt,
    },
    {
        label: "Inquiries",
        path: "/admin/inquiries",
        icon: MessageSquare,
    },
];
