import React, { useMemo } from 'react';
import styled from 'styled-components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getFeed } from 'store/actions/feedAction';

const FeedContainer = styled.div`
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

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((state: RootState) => state);

  useMemo(() => dispatch(getFeed()), [dispatch]);

  console.log(feedData);

  return (
    <>
      <FeedContainer>
        <FeedPosts>
          <h4>This is an awesome post title!</h4>
          <h5>Created by: Alex Cloudstar</h5>
          <h6>Date: 01-01-2020</h6>
          <img alt='post-title' src='https://via.placeholder.com/150' />
          <p>Here's an awesome description</p>
        </FeedPosts>
      </FeedContainer>
    </>
  );
};

export default Feed;
