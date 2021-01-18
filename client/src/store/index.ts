import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';

import feedReducer from 'store/reducers/feedReducer';
import createPostReducer from './reducers/createPostReducer';
import deletePostReducer from './reducers/deletePostReducer';

const rootReducer = combineReducers({
  posts: feedReducer,
  createPost: createPostReducer,
  deletePost: deletePostReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
