/* global window, document */
/* eslint no-render-return-value: 0, jsx-filename-extension: 0 */

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ShopView from './components/ShopView';
import shop from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(shop,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

const render = () => ReactDOM.render(
  <Provider store={store}>
    <ShopView />
  </Provider>,
  document.getElementById('root')
);

render();
store.subscribe(render);
