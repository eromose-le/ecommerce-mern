import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    createOrder: (state, action) => {}
  }
});

export const { createOrder } = orderSlice.actions;
export default orderSlice.reducer;
