import { createSlice } from "@reduxjs/toolkit";

// Persist ONLY user (optional)
const storedUser = localStorage.getItem("user");

const initialState = {
    user: storedUser ? JSON.parse(storedUser) : null,
    accessToken: null,
    isAuthenticated: storedUser ? true : false,
    authChecked: storedUser ? true : false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        setCredentials: (state, action) => {
            const { user, accessToken } = action.payload;

            state.user = user;
            state.accessToken = accessToken;
            state.isAuthenticated = true;
            state.authChecked = true;

            // Persist user only
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("accessToken", accessToken);
        },

        logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.isAuthenticated = false;
            state.authChecked = true;

            localStorage.removeItem("user");
        },

        markAuthChecked: (state) => {
            state.authChecked = true;
        },
    },
});

export const { setCredentials, logout, markAuthChecked } = authSlice.actions;
export default authSlice.reducer;
