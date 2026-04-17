import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  // extraReducers: (builder) => {},
});

export default categoriesSlice.reducer;
