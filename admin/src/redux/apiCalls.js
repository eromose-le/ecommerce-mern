import { publicRequest, userRequest } from '../requestMethods';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutFunc
} from './userRedux';
import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess
} from './productRedux';
import {
  getClientStart,
  getClientSuccess,
  getClientFailure,
  deleteClientFailure,
  deleteClientStart,
  deleteClientSuccess,
  updateClientStart,
  updateClientSuccess,
  updateClientFailure
} from './clientRedux';

// AUTH
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch, user) => {
  dispatch(logoutFunc(user));
};

// ---------------------------------------------------------------
// GET PRODUCTS
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get('/products');
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

// DELETE PRODUCTS
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

// UPDATE PRODUCTS
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

// CREATE PRODUCTS
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post('/products', product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

// ---------------------------------------------------------------
// GET CLIENTS
export const getClients = async (dispatch) => {
  dispatch(getClientStart());
  try {
    const res = await userRequest.get('/users');
    dispatch(getClientSuccess(res.data));
  } catch (err) {
    dispatch(getClientFailure());
  }
};

// DELETE CLIENT
export const deleteClient = async (id, dispatch) => {
  dispatch(deleteClientStart());
  try {
    const res = await userRequest.delete(`/users/${id}`);
    dispatch(deleteClientSuccess(id));
  } catch (err) {
    dispatch(deleteClientFailure());
  }
};

// UPDATE CLIENT
export const updateClient = async (id, client, dispatch) => {
  dispatch(updateClientStart());
  try {
    const res = await userRequest.put(`/users/${id}`, client);
    dispatch(updateClientSuccess({ id, client }));
  } catch (err) {
    dispatch(updateClientFailure());
  }
};
