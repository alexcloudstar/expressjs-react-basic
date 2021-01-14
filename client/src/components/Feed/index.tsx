import React from 'react';
import styled from 'styled-components';

const FeedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h3 {
    color: #229ae6;
    font-size: 25px;
    font-weight: 600;
  }
`;

const FeedPosts = styled.div`
  h4,
  h5,
  h6 {
    margin: 4px 0;
    text-align: left;
  }

  h4 {
    font-size: 20px;
    font-weight: 600;
    color: #1d899d;
  }

  h5,
  h6 {
    font-size: 18px;
  }

  img {
    margin: 5px 0;
  }
`;

const Feed = ({ posts }: any) => {
  return (
    <FeedWrapper>
      {posts &&
        posts.map((post: any) => {
          return (
            <FeedPosts key={post._id}>
              <h4>{post.title}</h4>
              <h5>Created by: {post.creator}</h5>
              <h6>
                Date: {new Date(post.createdAt).toLocaleDateString('en-US')}
              </h6>
              <img
                alt='post-title'
                src={`http://localhost:8080/${post.imageUrl}`}
              />
              <p>{post.content}</p>
            </FeedPosts>
          );
        })}
    </FeedWrapper>
  );
};

export default Feed;
