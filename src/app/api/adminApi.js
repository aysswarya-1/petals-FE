import { baseApi } from "./baseApi";

export const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // dashboard stats
        getDashboardStats: builder.query({
            query: () => "/admin/dashboard",
        }),
    }),
});

export const {
    useGetDashboardStatsQuery
} = adminApi;
