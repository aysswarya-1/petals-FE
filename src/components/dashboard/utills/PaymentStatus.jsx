import { useUpdateOrderStatusMutation } from "../../../app/api/orderApi";

const paymentStyles = {
    pending: "border-yellow-500 text-yellow-600 bg-yellow-500/10",
    paid: "border-green-500 text-green-600 bg-green-500/10",
    failed: "border-red-500 text-red-600 bg-red-500/10",
};

const PaymentStatus = ({ order, mode = "user" }) => {
    const isAdmin = mode === "admin";

    const [updateStatus, { isLoading }] =
        useUpdateOrderStatusMutation();

    const handleChange = (e) => {
        e.stopPropagation();
        updateStatus({
            id: order._id,
            type: "payment",
            status: e.target.value,
        });
    };

    /** ---------------- USER (READ-ONLY) ---------------- */
    if (!isAdmin) {
        return (
            <span
                className={`
                    inline-block px-3 py-1 text-xs font-medium rounded-full border
                    ${paymentStyles[order.paymentStatus]}
                `}
            >
                {order.paymentStatus}
            </span>
        );
    }

    /** ---------------- ADMIN (EDITABLE) ---------------- */
    return (
        <select
            value={order.paymentStatus}
            disabled={isLoading}
            onClick={(e) => e.stopPropagation()}
            onChange={handleChange}
            className={`
                px-3 py-1 text-xs font-medium rounded-full border cursor-pointer
                focus:outline-none
                ${paymentStyles[order.paymentStatus]}
            `}
        >
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="failed">Failed</option>
        </select>
    );
};

export default PaymentStatus;
