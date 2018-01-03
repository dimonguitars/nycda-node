import React, { Component } from 'react'

class Child extends Component {
 render() {
   return <div>Name: {this.props.childName}, Message: {this.props.message}</div>;
 }
};

export default Child;
