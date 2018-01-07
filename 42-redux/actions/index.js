// actions/index.js
// Namespace actions
// export const INCREMENT = 'counter/INCREMENT';
// export const INCREMENT_BY = 'counter/INCREMENT_BY';
// export const DECREMENT = 'counter/DECREMENT';
// export const CLEAR = 'counter/CLEAR';
//
// export function incrementBy(num){
//   return {
//     type: INCREMENT_BY,
//     payload: num
//   }
// }
export const INCREMENT = 'counter/INCREMENT';
export const INCREMENT_BY = 'counter/INCREMENT_BY';
export const DECREMENT = 'counter/DECREMENT';
export const CLEAR = 'counter/CLEAR';

export function incrementBy(num){
  return {
    type: INCREMENT_BY,
    payload: num
  }
}
