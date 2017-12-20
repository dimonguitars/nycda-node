import React, { Component } from 'react';
import './ContactCard.css';

class ContactCard extends Component {
  render() {
    return (
      <div className="ContactCard">
        <div>Name: {this.props.name}</div>
        <div>Mobile Number: {this.props.mobileNumber}</div>
        <div>Work Number: {this.props.workNumber}</div>
        <div>Email: {this.props.email}</div>
      </div>
    );
  }
}

ContactCard.propTypes = {
  name: function(props, propName){
    if (!props[propName]){
      return new Error(`name is required!`)
    }
    if (typeof props[propName] !== 'string'){
      return new Error(`name must be a string! Was a ${typeof props[propName]}`)
    }
  },
  mobileNumber: function(props, propName){
    if (!props[propName]){
      return new Error(`mobileNumber is required!`)
    }
    if (typeof props[propName] !== 'string'){
      return new Error(`MobileNumber must be a string! Was a ${typeof props[propName]}`)
    }
  },
  workNumber: function(props, propName){
    if (typeof props[propName] !== 'string'){
      return new Error(`workNumber must be a string! Was a ${typeof props[propName]}`)
    }
  },
  email: function(props, propName){
    if (!props[propName]){
      return new Error(`email is required!`)
    }
    if (typeof props[propName] !== 'string'){
      return new Error(`email must be a string! Was a ${typeof props[propName]}`)
    }
  }
}

export default ContactCard;
