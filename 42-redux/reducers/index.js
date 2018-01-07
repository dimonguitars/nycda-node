// reducers/index.js
// import { INCREMENT, INCREMENT_BY, incrementBy, DECREMENT, CLEAR } from '../actions';
//
// const initialState = 0;
// export default (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT:
//       return state + 1;
//     case INCREMENT_BY:
//       return state + action.payload;
//     case DECREMENT:
//       return state - 1;
//     case CLEAR:
//       state = 0;
//       return state;
//     default:
//       return state;
//   }
// };
import { INCREMENT, INCREMENT_BY, DECREMENT, CLEAR } from '../actions';

const initialState = 0;
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case INCREMENT_BY:
      return state + action.payload;
    case DECREMENT:
      return state - 1;
    case CLEAR:
      state = 0;
      return state;
    default:
      return state;
  }
};
