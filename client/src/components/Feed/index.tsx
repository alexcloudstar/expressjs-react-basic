import React from 'react';
import styled from 'styled-components';

const FeedWrapper = styled.div`
  display: grid;
  padding: 4rem;
  grid-gap: 4rem;
  margin: 0 auto;
  width: max-content;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
`;

const FeedPost = styled.div<{ imageUrl: any }>`
  width: 15em;
  height: 18em;
  display: flex;
  font-size: 1.5em;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  background-size: cover;
  border: 3px solid #ccc;
  background-position: center;
  background-repeat: no-repeat;
  flex-direction: column-reverse;
  box-shadow: 0 0 5em -1em black;
  background: url(${props => props.imageUrl});

  div {
    padding: 0 0.5em;
    color: #ff623e;
    border-radius: 5px;
    background-color: rgba(23, 64, 25, 0.8);
  }
`;

const Feed = ({ posts }: any) => {
  return (
    <FeedWrapper>
      {posts && posts.length ? (
        posts.map((post: any) => {
          return (
            <FeedPost
              imageUrl={`http://localhost:8080/${post.imageUrl}`}
              key={post._id}
            >
              <div>
                <h4>{post.title}</h4>
                <h5>Created by: {post.creator}</h5>
                <h6>
                  Date: {new Date(post.createdAt).toLocaleDateString('en-US')}
                </h6>
                {/* <img
                alt='post-title'
                src={`http://localhost:8080/${post.imageUrl}`}
              /> */}
                <p>{post.content}</p>
              </div>
            </FeedPost>
          );
        })
      ) : (
        <div>
          <h3>No posts found...</h3>
        </div>
      )}
    </FeedWrapper>
  );
};

export default Feed;
