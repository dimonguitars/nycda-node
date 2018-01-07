/* global window, document */
/* eslint no-render-return-value: 0, jsx-filename-extension: 0 */

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
// import Counter from './components/Counter';
import CounterApp from './components/CounterApp';
import counter from './reducers';
// import { INCREMENT, INCREMENT_BY, incrementBy, DECREMENT, CLEAR } from './actions';


/* eslint-disable no-underscore-dangle */
const store = createStore(counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */
// const render = () => ReactDOM.render(
//   <Counter
//     value={store.getState()}
//     onIncrement={() => store.dispatch({ type: INCREMENT })}
//     onDecrement={() => store.dispatch({ type: DECREMENT })}
//     onClear={() => store.dispatch({ type: CLEAR })}
//     onIncrementBy5={() => store.dispatch(incrementBy(5))}
//     onIncrementBy10={() => store.dispatch(incrementBy(10))}
//   />,
//   document.getElementById('root')
// );
const render = () => ReactDOM.render(
  <Provider store={store}>
    <CounterApp />
  </Provider>,
  document.getElementById('root')
);

render();
store.subscribe(render);
