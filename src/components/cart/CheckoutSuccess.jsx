import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const CheckoutSuccess = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-rose-50 text-center">
            <CheckCircle size={72} className="text-green-500 mb-4" />
            <h1 className="text-3xl font-bold mb-2">Payment Successful!</h1>
            <p className="text-gray-600 mb-6">
                Thank you for your order. Your payment has been received successfully.
            </p>
            <Link to="/shop">
                <button className="bg-rosy-600 text-white px-6 py-2 rounded-lg hover:bg-rosy-700 transition">
                    Continue Shopping
                </button>
            </Link>
        </div>
    );
};

export default CheckoutSuccess;
