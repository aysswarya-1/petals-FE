import { useUpdateOrderStatusMutation } from "../../../app/api/orderApi";

const statusStyles = {
    processing: "border-yellow-500 text-yellow-600 bg-yellow-500/10",
    confirmed: "border-blue-500 text-blue-600 bg-blue-500/10",
    shipped: "border-purple-500 text-purple-600 bg-purple-500/10",
    delivered: "border-green-500 text-green-600 bg-green-500/10",
    cancelled: "border-red-500 text-red-600 bg-red-500/10",
};

const OrderStatus = ({ order, mode = "user" }) => {
    const isAdmin = mode === "admin";

    const [updateStatus, { isLoading }] =
        useUpdateOrderStatusMutation();

    const handleChange = (e) => {
        e.stopPropagation();
        updateStatus({
            id: order._id,
            type: "order",
            status: e.target.value,
        });
    };

    /** ---------------- USER (READ-ONLY) ---------------- */
    if (!isAdmin) {
        return (
            <span
                className={`
                    inline-block px-3 py-1 text-xs font-medium rounded-full border max-w-20
                    ${statusStyles[order.orderStatus]}
                `}
            >
                {order.orderStatus}
            </span>
        );
    }

    /** ---------------- ADMIN (EDITABLE) ---------------- */
    return (
        <select
            value={order.orderStatus}
            disabled={isLoading}
            onClick={(e) => e.stopPropagation()}
            onChange={handleChange}
            className={`
                px-3 py-1 text-xs font-medium rounded-full border cursor-pointer
                focus:outline-none 
                ${statusStyles[order.orderStatus]}
            `}
        >
            <option value="processing">Processing</option>
            <option value="confirmed">Confirmed</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
        </select>
    );
};

export default OrderStatus;
