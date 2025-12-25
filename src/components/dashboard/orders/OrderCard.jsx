import PaymentStatus from "../utills/PaymentStatus";
import OrderStatus from "./OrderStatus";

const OrderCard = ({ order, onClick, mode = "user" }) => {
    const firstImage = order.items?.[0]?.product?.images?.[0]?.url;
    const isAdmin = mode === "admin";

    return (
        <div
            onClick={onClick}
            className="flex flex-col sm:flex-row gap-4 bg-white border border-browny-50/40 rounded-xl p-4 cursor-pointer hover:shadow-md transition"
        >
            {/* IMAGE */}
            <img
                src={firstImage}
                alt="Product"
                className="w-full sm:w-20 h-40 sm:h-20 rounded-lg object-cover"
            />

            {/* CONTENT */}
            <div className="flex-1">
                {/* Order number + status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-medium text-sm truncate">
                        Order #{order.orderNumber}
                    </h3>

                    <OrderStatus order={order} mode={mode} />
                </div>

                {/* Admin-only: user info */}
                {isAdmin && (
                    <p className="text-xs text-gray-500 mt-1">
                        {order.user?.firstName} {order.user?.lastName}
                    </p>
                )}

                {/* Items count */}
                <p className="text-xs text-gray-500 mt-1">
                    {order.items.length} items
                </p>

                {/* Payment method */}
                <p className="text-xs text-rosy-700 mt-1">
                    {order.paymentMethod}
                </p>

                {/* Payment status */}
                <div className="mt-1">
                    <PaymentStatus order={order} mode={mode} />
                </div>

                {/* Total + date */}
                <div className="flex items-center justify-between mt-3">
                    <p className="text-sm font-semibold">
                        ₹ {order.total}
                    </p>

                    <p className="text-xs text-gray-400">
                        {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
