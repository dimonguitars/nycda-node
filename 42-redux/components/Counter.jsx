// Create components/Counter.jsx
import React, { Component } from 'react'

// const Counter = ({ value, onIncrement, onIncrementBy5,  onIncrementBy10, onDecrement, onClear }) => (
//   <div>
//     <h1> Value: {value} </h1>
//     <button onClick={onIncrement}> + </button>
//     <button onClick={onDecrement}> - </button>
//     <button onClick={onClear}>Clear</button>
//     <button onClick={onIncrementBy5}>Increment by 5</button>
//     <button onClick={onIncrementBy10}>Increment by 10</button>
//   </div>
// );
const Counter = ({ value, onIncrement, onIncrementBy5, onIncrementBy10, onDecrement, onClear }) => (
  <div>
    <h1> Value: {value} </h1>
    <button onClick={onIncrement}> + </button>
    <button onClick={onDecrement}> - </button>
    <button onClick={onClear}>Clear</button>
    <button onClick={onIncrementBy5}>Increment by 5</button>
    <button onClick={onIncrementBy10}>Increment by 10</button>
  </div>
);

export default Counter;
