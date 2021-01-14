import React, { useMemo, useState } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getFeed } from 'store/actions/feedAction';

import Feed from 'components/Feed';
import { Loader } from 'components/Loader';
import Pagination from 'components/pagination';

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
