import { baseApi } from "./baseApi";

export const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getProducts: builder.query({
            query: () => ({
                url: "/products",
                method: "GET",
            }),
            providesTags: ["Products"]
        }),

        getProductById: builder.query({
            query: (id) => ({
                url: `/products/${id}`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "Products", id }]
        }),

        // Admin Only
        createProduct: builder.mutation({
            query: (data) => ({
                url: "/products",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Products"]
        }),

        updateProduct: builder.mutation({
            query: ({ id, data }) => ({
                url: `/products/${id}`,
                method: "PUT",
                body: data, // FormData here
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "Products", id }],
        }),


        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Products"]
        }),
    })
})

export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productsApi