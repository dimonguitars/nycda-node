import { ADD_TO_CART, CHECKOUT } from '../actions';

const initialState = {
  products:[
    {
      sku: 123,
      title: 'iPhone 8',
      price: 900,
      quantity: 10000
    },
    {
      sku: 789,
      title: 'OnePlus 5',
      price: 800,
      quantity: 100
    },
    {
      sku: 456,
      title: 'Samsung Galaxy 14',
      price: 900,
      quantity: 1000
    }
  ],
  cart: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [
        ...state.cart,
        action.payload
      ]};
    case CHECKOUT:
      return {
        products: state.products,
        cart: []
      };
    default:
      return state;
  }
};
