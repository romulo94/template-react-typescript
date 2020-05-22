import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />

    {/* TODO not found */}
    <Route component={() => <h1>Not Found</h1>} />
  </Switch>
);

export default Routes;
