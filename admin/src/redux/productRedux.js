import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    isFetching: false,
    error: false
  },
  reducers: {
    // GET ALL
    getProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.isFetching = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

export const { getProductStart, getProductSuccess, getProductFailure } =
  userSlice.actions;
export default userSlice.reducer;