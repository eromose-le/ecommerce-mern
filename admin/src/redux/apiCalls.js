import { publicRequest } from '../requestMethods';
import {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutFunc
} from './userRedux';
import {
  getProductFailure,
  getProductStart,
  getProductSuccess
} from './productRedux';

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

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get('/products');
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const logout = async (dispatch, user) => {
  dispatch(logoutFunc(user));
};
