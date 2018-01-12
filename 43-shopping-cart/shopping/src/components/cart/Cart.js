import React, { Component } from 'react'

const Cart = ({ cart, clear }) => (
  <div>
    <h1>Shopping Cart</h1>
    {cart.map((product, i) =>
        <div id={product.sku} key={i}>
          <h2>{product.title}</h2>
          <h3>Price: ${product.price}</h3>
          <hr/>
        </div>
    )}
    {cart.length > 0 ? (
      <button onClick={clear}>Checkout</button>
    ) : (<hr/>)}
  </div>
);

export default Cart;
