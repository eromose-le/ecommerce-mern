import { createSlice } from '@reduxjs/toolkit';

const clientSlice = createSlice({
  name: 'client',
  initialState: {
    clients: [],
    isFetching: false,
    error: false
  },
  reducers: {
    // GET ALL
    getClientStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getClientSuccess: (state, action) => {
      state.isFetching = false;
      state.clients = action.payload;
    },
    getClientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // DELETE
    deleteClientStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteClientSuccess: (state, action) => {
      state.isFetching = false;
      state.clients.splice(
        state.clients.findIndex((item) => item.id === action.payload),
        1
      );
    },
    deleteClientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // CREATE
    updateClientStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateClientSuccess: (state, action) => {
      state.isFetching = false;
      state.clients[
        state.clients.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.client;
    },
    updateClientFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

export const {
  getClientStart,
  getClientSuccess,
  getClientFailure,
  deleteClientStart,
  deleteClientSuccess,
  deleteClientFailure,
  updateClientStart,
  updateClientSuccess,
  updateClientFailure
} = clientSlice.actions;
export default clientSlice.reducer;
