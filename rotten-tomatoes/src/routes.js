import React from 'react';
import MovieListContainer from './containers/MovieListContainer';
import MovieDetailsContainer from './containers/MovieDetailsContainer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={MovieListContainer} />
        <Route exact path="/movie/:id" component={MovieDetailsContainer} />
      </div>
    </Router>
  )
};

export default Routes;
