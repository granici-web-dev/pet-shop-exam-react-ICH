import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem('cart')) || [],
  },
  reducers: {
    addToCart(state, action) {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.count += action.payload.count || 1;
      } else {
        state.items.push({ ...action.payload, count: action.payload.count || 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    incrementCount(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.count += 1;
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    decrementCount(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.count > 1) item.count -= 1;
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart(state) {
      state.items = [];
      localStorage.removeItem('cart');
    },
  },
});

export const { addToCart, removeFromCart, incrementCount, decrementCount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
