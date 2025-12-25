import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    submitting: false,
    error: null,
};

const inquirySlice = createSlice({
    name: "inquiry",
    initialState,
    reducers: {
        setSubmitting: (state, action) => {
            state.submitting = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const { setSubmitting, setError, clearError } = inquirySlice.actions;
export default inquirySlice.reducer;
