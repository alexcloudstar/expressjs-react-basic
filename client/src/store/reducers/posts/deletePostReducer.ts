import {
  DeletePostAction,
  DELETE_POST,
  DeletePostState,
  SET_LOADING,
} from 'store/types';

const initialState: DeletePostState = {
  data: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state = initialState,
  action: DeletePostAction
): DeletePostState => {
  switch (action.type) {
    case DELETE_POST:
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
