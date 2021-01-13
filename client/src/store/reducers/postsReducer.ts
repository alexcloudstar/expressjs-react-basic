import { PostsAction, GET_POSTS, PostsState } from 'store/types';

const initialState: PostsState = {
  data: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: PostsAction): PostsState => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
