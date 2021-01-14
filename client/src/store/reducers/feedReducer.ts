import { FeedAction, GET_FEED, FeedState } from 'store/types';

const initialState: FeedState = {
  data: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: FeedAction): FeedState => {
  switch (action.type) {
    case GET_FEED:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
