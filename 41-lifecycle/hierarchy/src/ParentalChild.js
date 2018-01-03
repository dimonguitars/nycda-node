import React, { Component } from 'react'

class ParentalChild extends Component {
 render() {
   return <div>
    <h2>{this.props.value}</h2>
    <button onClick={this.props.onClick}>Click Me!</button>
   </div>;
 }
};

export default ParentalChild;
