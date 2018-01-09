import React, { Component } from 'react'
import '../css/ShopView.css'
import Shop from './Shop'
var products = [
  {
    "id": 1,
    "title": "Popcorn",
    "price": 3.99,
    "quanity": 100
  },
  {
    "id": 2,
    "title": "Potato Chips",
    "price": 2.99,
    "quanity": 250
  },
  {
    "id": 3,
    "title": "Pita Chips",
    "price": 4.99,
    "quanity": 80
  }
]


class ShopView extends Component {
  constructor(props) {
    super(props)
    this.data = products
  }
  render() {
    var productsToRender = [];
    console.log(this.data);
    this.data.forEach(function (file){
      productsToRender.push(<Shop product={file} />)
    });
    return (
      <div className="container">
        <div className="products">
          <h1>Here is what we have:</h1>
          <ul>
            { productsToRender }
          </ul>
        </div>
        <div className="shopping-cart">
          <h1>Your shopping cart:</h1>
        </div>
      </div>
    );
  }
}

export default ShopView;
