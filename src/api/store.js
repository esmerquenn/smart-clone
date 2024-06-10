import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./slices/allProduct";

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), productsApi.middleware],
});

export default store;
