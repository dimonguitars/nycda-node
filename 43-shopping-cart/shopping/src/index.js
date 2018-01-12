import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Products from './components/products/ProductContainer';
import Cart from './components/cart/CartContainer';

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

const render = () => ReactDOM.render(
  <Provider store={store}>
    <div>
      <Products />
      <Cart />
    </div>
  </Provider>,
  document.getElementById('root')
);

render();
store.subscribe(render);
