import { AnyAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit"
import productsReducer from "./productsReducer";

import { productsApi } from "../services/products";
import { getProductsAsync } from "./actionsAsync";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(getProductsAsync());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AsyncAppDispatch = ThunkDispatch<RootState, void, AnyAction>;