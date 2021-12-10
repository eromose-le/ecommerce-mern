import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      localStorage.setItem('presist:root', 'token');
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutFunc: (state) => {
      state.currentUser = null;
    }
  }
});

export const { loginStart, loginSuccess, loginFailure, logoutFunc } =
  userSlice.actions;
export default userSlice.reducer;
