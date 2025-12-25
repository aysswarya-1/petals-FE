import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../app/cartSlice";
import CartItem from "./CartItem";
import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const total = items.reduce(
        (acc, i) => acc + Number(i.price) * i.qty,
        0
    );

    return (
        <main className="max-w-5xl mx-auto p-6 pb-0 h-[calc(100vh-6rem)] flex flex-col">
            {/* EMPTY */}
            {items.length === 0 && (
                <p className="text-center text-gray-500">
                    Your cart is empty.
                </p>
            )}

            {/* SCROLLABLE ITEMS */}
            {items.length > 0 && (
                <>
                    <div className="flex-1 overflow-y-auto space-y-4 pr-1 hide-scrollbar">
                        {items.map((item) => (
                            <CartItem key={item._id} item={item} />
                        ))}
                    </div>

                    {/* STICKY SUMMARY */}
                    <div className="border-t border-rose-200 pt-4 mt-4 bg-white sticky bottom-0">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold">
                                Total: ₹{total}
                            </h3>

                            <div className="flex gap-4">
                                <Button
                                    variant="secondary"
                                    onClick={() => dispatch(clearCart())}
                                >
                                    Clear
                                </Button>

                                <Button
                                    variant="primary"
                                    onClick={() => navigate("/cart/checkout")}
                                >
                                    Checkout
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
};

export default CartSummary;
