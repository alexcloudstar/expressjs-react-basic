import React from 'react';

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
      <div className='home'>
        <h3>Add post</h3>
        <form action=''>
          <label htmlFor='title'>Title </label>
          <input type='text' name='title' id='title' />
          <br />
          <label htmlFor='creator'>Creator </label>
          <input type='text' name='creator' id='creator' />
          <br />
          <label htmlFor='img'>Image </label>
          <input type='file' name='img' id='img' />
          <br />
          <label htmlFor='content'>Content </label>
          <textarea name='content' id='content' cols='10' rows='3'></textarea>
        </form>
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
