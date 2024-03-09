import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';


// User signIn
export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    // console.log(error);
  }
};


// User signUp
export const signup = (formData, router) => async (dispatch) => {
    try {
      const { data } = await api.signUp(formData);
  
      dispatch({ type: AUTH, data });
  
      router.push('/');
    } catch (error) {
      // console.log(error);
    }
  };