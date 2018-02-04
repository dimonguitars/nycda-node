import React from 'react';
import MovieListContainer from './containers/MovieListContainer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={MovieListContainer} />
      </div>
    </Router>
  )
};

export default Routes;
