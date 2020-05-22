import React, { FC } from 'react';
import { hot } from 'react-hot-loader/root';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'routes';

import GlobalStyle from 'styles/global';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
};

export default hot(App);
