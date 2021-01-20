import api from 'api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import { LoginAction, POST_LOGIN, Login, SET_LOADING } from 'store/types';

export const loginAction = (
  data: any
): ThunkAction<void, RootState, null, LoginAction> => {
  return async dispatch => {
    try {
      const res = await api.post('/auth/login', data);

      const resData: Login = await res.data;

      alert(res.data.message);

      dispatch({
        type: POST_LOGIN,
        payload: resData,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const setLoading = (): LoginAction => {
  return {
    type: SET_LOADING,
  };
};
