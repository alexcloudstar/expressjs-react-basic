import api from 'api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import { FeedAction, GET_FEED, SET_LOADING, Feed } from 'store/types';

export const getFeed = (
  pageNo: number
): ThunkAction<void, RootState, null, FeedAction> => {
  return async dispatch => {
    try {
      const res = await api.get(`/feed/posts?page=${pageNo}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      });

      const resData: Feed = await res.data;

      dispatch({
        type: GET_FEED,
        payload: resData,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const setLoading = (): FeedAction => {
  return {
    type: SET_LOADING,
  };
};
