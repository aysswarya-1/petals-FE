import { useCreateStripeSessionMutation } from "../../app/api/orderApi";
import { stripePromise } from "../../lib/stripe"

const CheckoutButton = ({ cartItems, totalAmount }) => {
    const [createStripeOrder] = useCreateStripeSessionMutation();

    const handleCheckout = async () => {
        try {
            const { sessionId } = await createStripeOrder({
                items: cartItems,
                totalAmount,
            }).unwrap();

            const stripe = await stripePromise;
            await stripe.redirectToCheckout({ sessionId });
        } catch (err) {
            console.error("Stripe checkout error:", err);
        }
    };

    return (
        <button onClick={handleCheckout} className="btn btn-primary">
            Pay with Stripe
        </button>
    );
};

export default CheckoutButton;