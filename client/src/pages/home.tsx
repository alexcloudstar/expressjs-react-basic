import Feed from 'components/Feed';
import React from 'react';

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
          <textarea name='content' id='content' cols={10} rows={3}></textarea>
        </form>
        <Feed />
      </div>
    </>
  );
};

export default Home;
