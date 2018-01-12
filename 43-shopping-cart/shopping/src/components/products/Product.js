import React, { Component } from 'react'

const Product = ({ products, addToCart=f=>f }) => (
  <div>
    <h1>Here is what we have in stock:</h1>
    {products.map((product, i) =>
        <div id={product.sku} key={i}>
          <h2>{product.title}</h2>
          <h3>Price: ${product.price}</h3>
          <h4>Items available: {product.quantity}</h4>
          <button onClick={() => addToCart(product)}>Add</button>
          <hr />
        </div>
    )}
  </div>
);

export default Product;
