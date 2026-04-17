import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {},
});

export default cartSlice.reducer;
