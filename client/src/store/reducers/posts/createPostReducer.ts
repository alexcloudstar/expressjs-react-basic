import {
  CreatePostAction,
  CREATE_POST,
  CreatePostState,
  SET_LOADING,
} from 'store/types';

const initialState: CreatePostState = {
  data: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state = initialState,
  action: CreatePostAction
): CreatePostState => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
