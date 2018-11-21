import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader';
import Helmet from 'react-helmet';

const App = () => (
  <Fragment>
    <Helmet>
      <title>Hello World</title>
    </Helmet>
    <div>Hello World</div>
  </Fragment>
);

export default hot(module)(App);