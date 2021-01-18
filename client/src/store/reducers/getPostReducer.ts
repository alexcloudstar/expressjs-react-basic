import {
  GetPostAction,
  GET_POST,
  GetPostState,
  SET_LOADING,
} from 'store/types';

const initialState: GetPostState = {
  data: null,
  loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: GetPostAction): GetPostState => {
  switch (action.type) {
    case GET_POST:
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
