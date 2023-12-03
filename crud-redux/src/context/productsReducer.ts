import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from "../interfaces";
import { getProductsAsync } from "./actionsAsync";


export interface ProducstState {
  products: ProductType[],
  loading: boolean | undefined | null,
  error: boolean,
}

const initialState = {
  products: [] as ProductType[],
  isLoading: false,
  error: false,
}


export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts: (state, action: PayloadAction<ProductType[]>) => {
      return {
        ...state,
        products: action.payload,
      }
    },
    addNewProduct: (state, action: PayloadAction<ProductType>) => {
      return {
        ...state,
        products: [...state.products, action.payload],
      }
    },
    deleteProductById: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload),
      }
    },
    updateProductById: (state, action: PayloadAction<ProductType>) => {
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              ...action.payload,
            }
          }
          return product;
        }),
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      return {
        ...state,
        products: action.payload,
      }
    });
    builder.addCase(getProductsAsync.pending, (state) => {
      return {
        ...state,
      }
    });
    builder.addCase(getProductsAsync.rejected, (state) => {
      return {
        ...state,
      }
    });
  }

});


export const { getAllProducts, addNewProduct, deleteProductById, updateProductById } = productsSlice.actions;
export default productsSlice.reducer;