import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import cartReducer from './cartSlice'
import authReducer from './authSlice'
import { baseApi } from './api/baseApi'
import { authApi } from './api/authApi'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        auth: authReducer,

        [baseApi.reducerPath]: baseApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // ✔ prevents errors when storing non-serializable API responses
        }).concat(baseApi.middleware),

    devTools: true,
})