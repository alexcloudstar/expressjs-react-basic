import { signupAction } from 'store/actions/auth/signupAction';
import {
  SignupAction,
  PUT_SIGNUP,
  SignupState,
  SET_LOADING,
} from 'store/types';

const initialState: SignupState = {
  data: null,
  loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: SignupAction): SignupState => {
  switch (action.type) {
    case PUT_SIGNUP:
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
