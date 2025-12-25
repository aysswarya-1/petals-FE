import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/public/Home";
import Shop from "../../pages/public/Shop";
import ProductDetails from "../../pages/public/ProductDetails";
import Account from "../../pages/public/Account";
import Weddings from "../../pages/public/Weddings";
import Contact from "../../pages/public/Contact";
import About from "../../pages/public/About";

const PublicPages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/account" element={<Account />} />
            <Route path="/weddings-events" element={<Weddings />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default PublicPages;
