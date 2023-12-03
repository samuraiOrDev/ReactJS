import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    createNewProduct: builder.mutation({
      query: (body) => ({
        url: 'products',
        method: "POST",
        body,
      }),
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
    }),
    updateProduct: builder.mutation({
      query: (body) => ({
        url: `products/${body.id}`,
        method: "PATCH",
        body: body,
      }),
    }),
  })
})

export const { useGetProductsQuery, useCreateNewProductMutation, useDeleteProductMutation, useUpdateProductMutation } = productsApi;
