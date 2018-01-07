// Create components/Counter.jsx
import React, { Component } from 'react'

const Product = ({ product, onAddToCart }) => (
  <div className="product">
    <h1>Product: {product.name} </h1>
    <button onClick={onAddToCart}>Add To Cart</button>
  </div>
);

export default Product;
