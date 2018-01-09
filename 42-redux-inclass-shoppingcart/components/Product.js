// Create components/Counter.jsx
import React, { Component } from 'react'

const Product = ({ product, onAddToCart }) => (
  <div className="product">
    <h1>Product: {product.title} </h1>
    <button onClick={onAddToCart}>Add To Cart</button>
  </div>
);

export default Product;
