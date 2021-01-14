export const GET_FEED = 'GET_FEED';

export interface Feed {
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

export interface FeedState {
  data: Feed | null;

  // TODO loading
}

interface GetFeedAction {
  type: typeof GET_FEED;
  payload: Feed;
}

export type FeedAction = GetFeedAction;
