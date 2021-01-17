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

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface GetFeedAction {
  type: typeof GET_FEED;
  payload: Feed;
}

export type FeedAction = GetFeedAction | SetLoadingAction;
