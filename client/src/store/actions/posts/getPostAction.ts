import api from 'api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import { GetPostAction, GET_POST, SET_LOADING, GetPost } from 'store/types';

export const getPostAction = (
  _id: any
): ThunkAction<void, RootState, null, GetPostAction> => {
  return async dispatch => {
    try {
      const res = await api.get(`/feed/post/${_id}`);

      const resData: GetPost = await res.data.post;

      dispatch({
        type: GET_POST,
        payload: resData,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const setLoading = (): GetPostAction => {
  return {
    type: SET_LOADING,
  };
};
