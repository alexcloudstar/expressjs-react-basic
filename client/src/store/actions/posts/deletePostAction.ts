import api from 'api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import {
  DeletePostAction,
  DELETE_POST,
  SET_LOADING,
  DeletePost,
} from 'store/types';

export const deletePostAction = (
  _id: any
): ThunkAction<void, RootState, null, DeletePostAction> => {
  return async dispatch => {
    try {
      const res = await api.delete(`/feed/post/${_id}`);

      alert(res.data.message);

      const resData: DeletePost = await res.data;

      dispatch({
        type: DELETE_POST,
        payload: resData,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const setLoading = (): DeletePostAction => {
  return {
    type: SET_LOADING,
  };
};
