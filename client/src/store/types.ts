export const GET_FEED = 'GET_FEED';
export const CREATE_POST = 'CREATE_POST';
export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const PUT_SIGNUP = 'PUT_SIGNUP';
export const SET_LOADING = 'SET_LOADING';

// @ GET POSTS
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

// @ CREATE POST
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

// @ GET POST
export interface GetPost {
  _id: string;
  title: string;
  content: string;
  imageUrl: string;
  creator: string;
  updatedAt: string;
}

export interface GetPostState {
  data: GetPost | null;
  loading: boolean;
}

interface GPostAction {
  type: typeof GET_POST;
  payload: GetPost;
}

// @ DELETE POST
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

// @ GET POST
export interface EditPost {
  _id: string;
  title: string;
  content: string;
  imageUrl: string;
  creator: string;
  updatedAt: string;
}

export interface EditPostState {
  data: EditPost | null;
  loading: boolean;
}

interface EPostAction {
  type: typeof EDIT_POST;
  payload: EditPost;
}

// @ PUT SIGNUP
export interface Signup {
  email: string;
  name: string;
  password: string;
}

export interface SignupState {
  data: Signup | null;
  loading: boolean;
}

interface PSignupAction {
  type: typeof PUT_SIGNUP;
  payload: Signup;
}

// @ SET LOADING

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

// posts
export type FeedAction = GetFeedAction | SetLoadingAction;
export type CreatePostAction = CPostAction | SetLoadingAction;
export type GetPostAction = GPostAction | SetLoadingAction;
export type DeletePostAction = DPostAction | SetLoadingAction;
export type EditPostAction = EPostAction | SetLoadingAction;

// auth
export type SignupAction = PSignupAction | SetLoadingAction;
