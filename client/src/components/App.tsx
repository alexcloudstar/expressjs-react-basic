import React, { useEffect } from 'react';
import Routes from 'Routes';
import { Header } from './header';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getPosts } from 'store/actions/postsAction';

const App = () => {
  const dispatch = useDispatch();
  const postsData = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(getPosts());
    console.log(postsData);
  }, [getPosts]);

  return (
    <>
      <Header />
      <Routes />
    </>
  );
};

export default App;
