import React, { useMemo, useState } from 'react';
import styled from 'styled-components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getFeed } from 'store/actions/posts/feedAction';

import Feed from 'components/Feed';
import { Loader } from 'components/Loader';
import Pagination from 'components/pagination';
import { AddPost } from 'components/AddPost';

const PostActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(2);

  const dispatch = useDispatch();
  const feedData = useSelector((state: RootState) => state.posts.data);
  const totalItems = useSelector(
    (state: RootState) => state.posts.data?.totalItems
  );
  const loading = useSelector((state: RootState) => state.posts.loading);

  useMemo(() => dispatch(getFeed(currentPage)), [dispatch, currentPage]);

  // change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      {loading ? (
        <div>
          <Loader message={'Loading data...'} />
        </div>
      ) : (
        <div className='home'>
          {/* // TODO make a modal here on click open Add Post component  */}
          <PostActionsWrapper>
            <AddPost />
          </PostActionsWrapper>
          <Feed posts={feedData?.posts} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={totalItems}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      )}
    </>
  );
};

export default Home;
