import React, { useState } from 'react';
import styled from 'styled-components';

// redux
import { useDispatch } from 'react-redux';
import { createPostAction } from 'store/actions/posts/createPostAction';

const AddPostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    display: block;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const AddPost = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState<any>();
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const submitHandler = (e: any) => {
    e.preventDefault();

    const data = new FormData();

    data.append('title', title);
    data.append('image', image);
    data.append('content', content);

    dispatch(createPostAction(data));
  };

  return (
    <AddPostWrapper>
      <h3>Add post</h3>
      <form id='add-post-form' onSubmit={submitHandler}>
        <div className='input-holder'>
          <label htmlFor='title'>Title </label>
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='Title'
          />
        </div>
        <div className='input-holder'>
          <label htmlFor='image'>Image </label>
          <input
            type='file'
            id='image'
            name='image'
            onChange={e => e.target.files && setImage(e.target.files[0])}
          />
        </div>
        <div className='input-holder'>
          <label htmlFor='content'>Content </label>
          <textarea
            name='content'
            id='content'
            cols={10}
            rows={3}
            onChange={e => setContent(e.target.value)}
            placeholder='Content'
          ></textarea>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </AddPostWrapper>
  );
};
