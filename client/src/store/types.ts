import { AxiosResponse } from 'axios';

export const GET_POSTS = 'GET_POSTS';

export interface Posts {
  message: string;
  posts: [
    {
      title: string;
      content: string;
      imageUrl: string;
      creator: string;
      createdAt: string;
    }
  ];
  totalItems: number;
}

export interface PostsState {
  data: Posts | null | AxiosResponse;

  // TODO loading
}

interface GetPostsAction {
  type: typeof GET_POSTS;
  payload: Posts;
}

export type PostsAction = GetPostsAction;
