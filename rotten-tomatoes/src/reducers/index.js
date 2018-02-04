import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movie_reducer from './movie_reducer';

const Reducers = combineReducers({
    movie_reducer,
    routing: routerReducer
});

export default Reducers;
