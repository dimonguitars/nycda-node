export const ADD_TO_CART = 'product/add';
export const CHECKOUT = 'cart/clear';

export function addToCart(product){
  return {
    type: ADD_TO_CART,
    payload: product
  }
}
