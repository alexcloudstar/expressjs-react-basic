export const GET_FEED = 'GET_FEED';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const GET_POST = 'GET_POST';
export const SET_LOADING = 'SET_LOADING';

export interface Feed {
  message: string;
  posts: [
    {
      _id: string;
      title: string;
      content: string;
      imageUrl: string;
      creator: string;
      createdAt: string;
    }
  ];
  totalItems: number;
}

export interface FeedState {
  data: Feed | null;
  loading: boolean;
}

interface GetFeedAction {
  type: typeof GET_FEED;
  payload: Feed;
}

export interface CreatePost {
  title: string;
  content: string;
  imageUrl: string;
  creator: string;
}

export interface CreatePostState {
  data: CreatePost | null;
  loading: boolean;
}

interface CPostAction {
  type: typeof CREATE_POST;
  payload: CreatePost;
}

export interface DeletePost {
  _id: string;
}

export interface DeletePostState {
  data: DeletePost | null;
  loading: boolean;
}

interface DPostAction {
  type: typeof DELETE_POST;
  payload: DeletePost;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

export type FeedAction = GetFeedAction | SetLoadingAction;
export type CreatePostAction = CPostAction | SetLoadingAction;
export type DeletePostAction = DPostAction | SetLoadingAction;
