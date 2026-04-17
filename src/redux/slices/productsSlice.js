import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {},
});

export default productsSlice.reducer;