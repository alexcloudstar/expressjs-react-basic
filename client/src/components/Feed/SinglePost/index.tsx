import React, { useMemo } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getPostAction } from 'store/actions/getPostAction';

export const SinglePost = (props: any) => {
  const { postId } = props.match.params;
  const apiURL = 'http://localhost:8080';

  const dispatch = useDispatch();
  const postData = useSelector((state: RootState) => state.getPost.data);

  const loading = useSelector((state: RootState) => state.getPost.loading);

  useMemo(() => dispatch(getPostAction(postId)), [dispatch, postId]);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div>
          <h4>Fetched post:</h4>
          <h1>{postData?.title}</h1>
          <h4>
            Date:{' '}
            {postData &&
              new Date(postData.updatedAt).toLocaleDateString('en-US')}
          </h4>
          <img src={`${apiURL}/${postData?.imageUrl}`} alt={postData?.title} />
          <h2>{postData?.content}</h2>
        </div>
      )}
    </>
  );
};
