import React from 'react';
import { Header } from '../components/header/index';
import styled from 'styled-components';

const Feed = styled.div`
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

const Home = () => {
  return (
    <>
      <Header />
      <div className='home'>
        <Feed>
          <h3>Feed</h3>
          <FeedPosts>
            <h4>This is an awesome post title!</h4>
            <h5>Created by: Alex Cloudstar</h5>
            <h6>Date: 01-01-2020</h6>
            <img alt='post-title' src='https://via.placeholder.com/150' />
            <p>Here's an awesome description</p>
          </FeedPosts>
        </Feed>
      </div>
    </>
  );
};

export default Home;
