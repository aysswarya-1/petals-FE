import React from "react";
import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";

const CheckoutFailed = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-rose-50 text-center">
            <XCircle size={72} className="text-red-500 mb-4" />
            <h1 className="text-3xl font-bold mb-2">Payment Failed</h1>
            <p className="text-gray-600 mb-6">
                Something went wrong with your payment. Please try again.
            </p>
            <Link to="/checkout">
                <button className="bg-rosy-600 text-white px-6 py-2 rounded-lg hover:bg-rosy-700 transition">
                    Retry Checkout
                </button>
            </Link>
        </div>
    );
};

export default CheckoutFailed;
