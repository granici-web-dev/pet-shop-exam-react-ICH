import { configureStore } from "@reduxjs/toolkit";
import productsSlice from './slices/productsSlice';
import categoriesReducer from './slices/categoriesSlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    products: productsSlice,
    category: categoriesReducer,
    cart: cartReducer,
  },
});

export default store;