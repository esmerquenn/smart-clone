// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const langCodes = {
//   AZERBAIJANI: 1,
//   RUSSIAN: 2,
// };

// export const productsApi = createApi({
//   reducerPath: 'productsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://smartsistem.az/api/' }),
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: (langCode) => `Product/All?langCode=${langCode}`,
//     }),
//     addProduct: builder.mutation({
//       query: ({ product, langCode }) => ({
//         url: `Product/All?langCode=${langCode}`,
//         method: 'POST',
//         body: product,
//       }),
//     }),
//     deleteProduct: builder.mutation({
//       query: ({ productId, langCode }) => ({
//         url: `Product/All/${productId}?langCode=${langCode}`,
//         method: 'DELETE',
//       }),
//     }),
//   }),
// });

// export const { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation } = productsApi;


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const langCodes = {
  AZERBAIJANI: 1,
  RUSSIAN: 2,
};

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://smartsistem.az/api/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (langCode = langCodes.AZERBAIJANI) => `Product/All?langCode=${langCode}`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
