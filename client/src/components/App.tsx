import React, { useMemo } from 'react';
import Routes from 'Routes';
import { Header } from './header';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getPosts } from 'store/actions/postsAction';

const App = () => {
  const dispatch = useDispatch();
  const postsData = useSelector((state: RootState) => state);

  useMemo(() => dispatch(getPosts()), [dispatch]);

  console.log(postsData);
  console.log(process.env.REACT_APP_API_URL);

  return (
    <>
      <Header />
      <Routes />
    </>
  );
};

export default App;
