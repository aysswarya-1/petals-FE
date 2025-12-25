// app/api/inquiryApi.js
import { baseApi } from "./baseApi";

export const inquiryApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // Create a new inquiry (user)
        createInquiry: builder.mutation({
            query: (data) => ({
                url: "/inquiries",
                method: "POST",
                body: data,
            }),
        }),

        // Get current user's inquiries
        getMyInquiries: builder.query({
            query: () => ({
                url: "/inquiries/my",
                method: "GET",
            }),
        }),

        // Admin: get all inquiries
        adminGetAll: builder.query({
            query: () => ({
                url: "/inquiries/admin/all",
                method: "GET",
            }),
        }),

        // Admin: update inquiry status
        updateStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `/inquiries/admin/status/${id}`,
                method: "PUT",
                body: { status },
            }),
        }),
    }),
});

export const {
    useCreateInquiryMutation,
    useGetMyInquiriesQuery,
    useAdminGetAllQuery,
    useUpdateStatusMutation,
} = inquiryApi;
