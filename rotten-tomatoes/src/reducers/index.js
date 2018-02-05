import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { createForms } from 'react-redux-form';

import movie_reducer from './movie_reducer';

const initialUserState = {
  firstName: '',
  lastName: ''
};

const Reducers = combineReducers({
    movie_reducer,
    routing: routerReducer,
    ...createForms({
      user: initialUserState,
    })
});

export default Reducers;
