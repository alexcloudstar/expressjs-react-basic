import api from 'api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import { PostsAction, GET_POSTS, Posts } from 'store/types';

export const getPosts = (): ThunkAction<void, RootState, null, PostsAction> => {
  return async dispatch => {
    try {
      // TODO fix that actions to dispatch and call via axios
      fetch('http://localhost:8080/feed/posts').then(res => {
        res.json().then(resData => console.log(resData));
      });

      // const res = await api.get('/posts');

      // const resData: Posts = await res;

      // dispatch({
      //   type: GET_POSTS,
      //   payload: resData,
      // });
    } catch (err) {
      console.error(err);
    }
  };
};
