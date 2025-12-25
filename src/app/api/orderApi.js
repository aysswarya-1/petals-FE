import { baseApi } from "./baseApi";

export const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // COD order
        createCODOrder: builder.mutation({
            query: (data) => ({
                url: "/orders/cod",
                method: "POST",
                body: data,
            }),
        }),
        // my orders
        getMyOrders: builder.query({
            query: (data) => ({
                url: "/orders/my",
                method: "GET",
            }),
        }),

        // Stripe order
        createStripeSession: builder.mutation({
            query: (data) => ({
                url: "/orders/stripe",
                method: "POST",
                body: data,
            }),
        }),


        // GET all orders (admin)
        getOrders: builder.query({
            query: () => "/orders/admin/all",
            providesTags: ["Orders"],
        }),

        // UPDATE order status (admin)
        updateOrderStatus: builder.mutation({
            query: ({ id, type, status }) => ({
                url: `/orders/admin/status/${id}`,
                method: "PATCH",
                body: { type, status },
            }),
            invalidatesTags: ["Orders"],
        }),
    }),
});

export const {
    useGetOrdersQuery,
    useUpdateOrderStatusMutation,
    useCreateCODOrderMutation,
    useCreateStripeSessionMutation,
    useGetMyOrdersQuery
} = orderApi;
