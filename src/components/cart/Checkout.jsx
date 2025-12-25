import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../app/cartSlice";
import Button from "../shared/Button";
import {
    useCreateCODOrderMutation,
    useCreateStripeSessionMutation,
} from "../../app/api/orderApi";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [createCODOrder, { isLoading: isCODLoading }] =
        useCreateCODOrderMutation();
    const [createStripeSession, { isLoading: isStripeLoading }] =
        useCreateStripeSessionMutation();

    const total = items.reduce(
        (sum, item) => sum + Number(item.price) * item.qty,
        0
    );

    const navigate = useNavigate();

    // COD
    const handleCOD = async () => {
        try {
            await createCODOrder({
                items,
                paymentMethod: "COD",
                totalAmount: total,
            }).unwrap();

            dispatch(clearCart());
            navigate("/cart/checkout-success");
        } catch (err) {
            console.error(err);
            navigate("/cart/checkout-failed");
        }
    };

    // Stripe
    const handleStripe = async () => {
        try {
            const res = await createStripeSession({ items }).unwrap();

            if (!res.url) throw new Error("Stripe URL missing");

            window.location.href = res.url; // Stripe checkout
        } catch (err) {
            console.error(err);
            navigate("cart/checkout/cancel");
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">
                Checkout
            </h1>

            {/* Order Summary */}
            <div className="bg-white border-browny-50 rounded-xl p-6 shadow-sm mb-8">
                <h2 className="text-lg font-semibold mb-4 text-gray-700">
                    Order Summary
                </h2>

                <div className="space-y-3">
                    {items.map((item) => (
                        <div
                            key={item._id}
                            className="flex justify-between text-sm text-gray-600"
                        >
                            <span>
                                {item.title} × {item.qty}
                            </span>
                            <span className="font-medium">
                                ₹{item.price * item.qty}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="border-t border-browny-50 mt-4 pt-4 flex justify-between text-base font-semibold text-gray-800">
                    <span>Total</span>
                    <span>₹{total}</span>
                </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white border-browny-50 rounded-xl p-6 shadow-sm space-y-4 space-x-5 text-center sm:text-left">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                    Payment Method
                </h2>

                <Button
                    variant="secondary"
                    onClick={handleCOD}
                    disabled={isCODLoading}
                >
                    {isCODLoading ? "Placing Order..." : "Cash on Delivery"}
                </Button>

                <Button
                    variant="primary"
                    onClick={handleStripe}
                    disabled={isStripeLoading}
                >
                    {isStripeLoading
                        ? "Redirecting to Stripe..."
                        : "Pay with Card (Stripe)"}
                </Button>
            </div>
        </div>
    );
};

export default Checkout;
