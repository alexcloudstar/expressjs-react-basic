import api from 'api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import {
  CreatePostAction,
  CREATE_POST,
  SET_LOADING,
  CreatePost,
} from 'store/types';

export const createPostAction = (
  data: any
): ThunkAction<void, RootState, null, CreatePostAction> => {
  return async dispatch => {
    try {
      const res = await api.post('post', data);

      const resData: CreatePost = await res.data;

      alert(res.data.message);

      dispatch({
        type: CREATE_POST,
        payload: resData,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const setLoading = (): CreatePostAction => {
  return {
    type: SET_LOADING,
  };
};
