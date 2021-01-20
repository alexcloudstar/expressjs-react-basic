import api from 'api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import { SignupAction, PUT_SIGNUP, Signup, SET_LOADING } from 'store/types';

export const signupAction = (
  data: any
): ThunkAction<void, RootState, null, SignupAction> => {
  return async dispatch => {
    try {
      const res = await api.put('/auth/signup', data);

      const resData: Signup = await res.data;

      alert(res.data.message);

      dispatch({
        type: PUT_SIGNUP,
        payload: resData,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const setLoading = (): SignupAction => {
  return {
    type: SET_LOADING,
  };
};
