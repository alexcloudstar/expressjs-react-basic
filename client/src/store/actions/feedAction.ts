import api from 'api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import { FeedAction, GET_FEED, Feed } from 'store/types';

export const getFeed = (): ThunkAction<void, RootState, null, FeedAction> => {
  return async dispatch => {
    try {
      const res = await api.get('/posts');

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
