import {
  EditPostAction,
  EDIT_POST,
  EditPostState,
  SET_LOADING,
} from 'store/types';

const initialState: EditPostState = {
  data: null,
  loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state = initialState,
  action: EditPostAction
): EditPostState => {
  switch (action.type) {
    case EDIT_POST:
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
