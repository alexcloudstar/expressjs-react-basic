import { LoginAction, POST_LOGIN, LoginState, SET_LOADING } from 'store/types';

const initialState: LoginState = {
  data: null,
  loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: LoginAction): LoginState => {
  switch (action.type) {
    case POST_LOGIN:
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
