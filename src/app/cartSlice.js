import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.items.find(i => i._id === action.payload._id)
            if (item) {
                item.qty += 1
            } else {
                state.items.push({ ...action.payload, qty: 1 })
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(i => i._id !== action.payload)
        },
        updateQty: (state, action) => {
            const { id, qty } = action.payload;
            const item = state.items.find((i) => i._id === id);

            if (item) {
                item.qty = qty > 0 ? qty : 1;
            }
        },

        clearCart: (state) => {
            state.items = []
        }
    }
})

export const { addToCart, removeFromCart, updateQty, clearCart } = cartSlice.actions
export default cartSlice.reducer