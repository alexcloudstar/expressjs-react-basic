import { FeedAction, GET_FEED, FeedState, SET_LOADING } from 'store/types';

const initialState: FeedState = {
  data: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: FeedAction): FeedState => {
  switch (action.type) {
    case GET_FEED:
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
