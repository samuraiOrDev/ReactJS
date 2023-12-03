import { createAsyncThunk } from "@reduxjs/toolkit";
export const getProductsAsync = createAsyncThunk(
  'products/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:3000/products");

      if (!response.ok) {
        throw new Error("Error al realizar la solicitud");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);
