import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'http://127.0.0.1:3333';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, {fulfillWithValue, rejectWithValue}) => {
  try {
    const response = await axios.get(`${API_URL}/products/all`);

    if (response.status > 399) {
      console.log('client error');
      throw new Error('Error: Failed to fetch categories');
    }

    return fulfillWithValue(response.data)

  } catch (error) {
    return rejectWithValue(error)
  }
})

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.products = action.payload;
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export default productsSlice.reducer;