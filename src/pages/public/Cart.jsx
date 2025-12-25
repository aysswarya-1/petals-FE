import React from 'react'
import { useNavigate } from 'react-router-dom'
import CartSummary from '../../components/cart/CartSummary'

const Cart = () => {
    const navigate = useNavigate()
    return (
        <>
            <div
                onClick={() => navigate(-1)}
                className="fixed inset-0 bg-black/50 z-40"
            />

            <div className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-white z-50 shadow-xl animate-slideIn">
                <div className="p-4 border-b border-rosy-200 flex justify-between items-center">
                    <h2 className="text-lg font-bold">Your Cart</h2>
                    <button onClick={() => navigate(-1)} className="text-xl">✕</button>
                </div>

                <div className="overflow-y-auto h-[calc(100%-60px)]">
                    <CartSummary />
                </div>
            </div>
        </>
    )
}

export default Cart
