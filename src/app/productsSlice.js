import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        featured: [],
        loading: false,
        error: null
    },
    reducers: {
        setProducts(state, action) {
            state.items = action.payload
            state.featured = action.payload.slice(0, 4)
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        }
    }
})

export const { setProducts, setLoading, setError } = productsSlice.actions
export default productsSlice.reducer