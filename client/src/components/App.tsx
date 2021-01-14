import React from 'react';
import Routes from 'Routes';
import GlobalStyle from 'GlobalStyles';
import { Header } from './header';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
    </>
  );
};

export default App;
