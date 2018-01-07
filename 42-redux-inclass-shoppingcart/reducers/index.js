// reducers/index.js
import { ADD_TO_CART, CHECKOUT } from '../actions';
import products from '../data/products.json'

const initialState = {
  products: products
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return state ;
    case CHECKOUT:
      return state;
    default:
      return state;
  }
};
