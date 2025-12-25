import {
    LayoutDashboard,
    Receipt,
    User,
    MapPin,
    Heart,
    MessageSquare
} from "lucide-react";

export default [
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Orders",
        path: "/dashboard/orders",
        icon: Receipt,
    },
    {
        label: "Profile",
        path: "/dashboard/profile",
        icon: User,
    },
    {
        label: "Address",
        path: "/dashboard/address",
        icon: MapPin,
    },
    {
        label: "Wishlist",
        path: "/dashboard/wishlist",
        icon: Heart,
    },
    {
        label: "Inquiries",
        path: "/dashboard/inquiries",
        icon: MessageSquare,
    },
];
