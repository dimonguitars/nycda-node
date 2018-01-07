import React, { Component } from 'react'
import '../css/ShopView.css'
import Shop from './Shop'

class ShopView extends Component {
  constructor(props) {
    super(props)
    this.data = []
  }
  render() {
    var productsToRender = [];
    console.log(data);
    this.data.forEach(function (file){
      productsToRender.push(<Shop />)
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
