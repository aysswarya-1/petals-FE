import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "../authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: "include", // REQUIRED for refresh cookie
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.accessToken;

        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }

        return headers;
    },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
        console.warn("Access token expired → refreshing...");

        const refreshResult = await baseQuery(
            {
                url: "/auth/refresh",
                method: "GET",
            },
            api,
            extraOptions
        );

        if (refreshResult?.data) {
            api.dispatch(setCredentials(refreshResult.data));
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logout());
        }
    }

    return result;
};

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Products", "User", "Cart", "Weddings", "Inquiries"],
    endpoints: () => ({}),
});
