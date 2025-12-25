import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        profile: builder.query({
            query: () => ({
                url: "/auth/profile",
                method: "GET",
            }),
        }),

        changePassword: builder.mutation({
            query: (data) => ({
                url: "/auth/change-password",
                method: "PUT",
                body: data,
            }),
        }),

        login: builder.mutation({
            query: (data) => ({
                url: "/auth/login",
                method: "POST",
                body: data,
            }),
        }),

        register: builder.mutation({
            query: (data) => ({
                url: "/auth/register",
                method: "POST",
                body: data,
            }),
        }),

        refresh: builder.query({
            query: () => ({
                url: "/auth/refresh",
                method: "GET",
            }),
        }),

        logout: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
                credentials: "include",
            }),
        }),

    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useRefreshQuery,
    useLogoutMutation,
    useProfileQuery,
    useChangePasswordMutation
} = authApi;
