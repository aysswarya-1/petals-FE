import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // GET all users (admin)
        getUsers: builder.query({
            query: () => "/users",
            providesTags: ["Users"],
        }),

        getAllWishlists: builder.query({
            query: () => "/admin/all",
        }),

        // UPDATE user role
        updateUserRole: builder.mutation({
            query: ({ id, role }) => ({
                url: `/users/${id}`,
                method: "PUT",
                body: { role },
            }),
            invalidatesTags: ["Users"],
        }),

        // DELETE user
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Users"],
        }),

        updateAddress: builder.mutation({
            query: (formData) => ({
                url: `/users/address`,
                method: "PUT",
                body: formData
            }),
            invalidatesTags: ["Users"]
        }),
        // ================= USER DASHBOARD
        getUserDashboard: builder.query({
            query: () => "/users/dashboard",
        }),

        // ================= WISHLIST (USER)
        wishlist: builder.query({
            query: () => ({
                url: `/wishlist`,
                method: "GET",
            }),
            providesTags: ["Wishlist"],
            refetchOnMountOrArgChange: true,
        }),

        toggleWishlist: builder.mutation({
            query: (productId) => ({
                url: `/wishlist/${productId}`,
                method: "POST",
            }),
            invalidatesTags: ["Wishlist"],
        }),

        // ================= WISHLIST (ADMIN)
        getAllWishlists: builder.query({
            query: () => "/wishlist/admin/all",
        }),

    }),
});

export const {
    useGetUsersQuery,
    useUpdateUserRoleMutation,
    useDeleteUserMutation,
    useUpdateAddressMutation,
    useGetAllWishlistsQuery,
    useWishlistQuery,
    useToggleWishlistMutation,
    useGetUserDashboardQuery
} = userApi;
