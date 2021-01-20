import api from 'api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import { EditPostAction, EDIT_POST, SET_LOADING, EditPost } from 'store/types';

export const editPostAction = (
  _id: any,
  data: any
): ThunkAction<void, RootState, null, EditPostAction> => {
  return async dispatch => {
    try {
      const res = await api.patch(`/post/${_id}`, data);

      alert(res.data.message);

      const resData: EditPost = await res.data.post;

      dispatch({
        type: EDIT_POST,
        payload: resData,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const setLoading = (): EditPostAction => {
  return {
    type: SET_LOADING,
  };
};
