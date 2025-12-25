import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../../pages/public/Cart";
import Checkout from "../../components/cart/Checkout";
import CheckoutSuccess from "../../components/cart/CheckoutSuccess";
import CheckoutFailed from "../../components/cart/CheckoutFailed";

const CheckoutPages = () => {
    return (
        <Routes>
            <Route index element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
            <Route path="/checkout/cancel" element={<CheckoutFailed />} />
        </Routes>
    );
};

export default CheckoutPages;
