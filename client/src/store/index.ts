import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import feedReducer from 'store/reducers/posts/feedReducer';
import createPostReducer from 'store/reducers/posts/createPostReducer';
import deletePostReducer from 'store/reducers/posts/deletePostReducer';
import editPostReducer from 'store/reducers/posts/editPostReducer';
import getPostReducer from 'store/reducers/posts/getPostReducer';
import signupReducer from 'store/reducers/auth/signupReducer';
import loginReducer from 'store/reducers/auth/loginReducer';

const rootReducer = combineReducers({
  posts: feedReducer,
  createPost: createPostReducer,
  deletePost: deletePostReducer,
  getPost: getPostReducer,
  editPost: editPostReducer,
  signupReducer: signupReducer,
  loginReducer: loginReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
