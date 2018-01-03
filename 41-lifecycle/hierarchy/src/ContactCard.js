import React, { Component } from 'react'

class ContactCard extends Component{
 render() {
   return(
    <div>
      <h1>First Name: {this.props.fName}</h1>
      <h1>Last Name: {this.props.lName}</h1>
      <h3>Age: {this.props.age}</h3>
      <h3>Zip Code: {this.props.zipCode}</h3>
      <h4>State: {this.props.state}</h4>
    </div>);
 }
}

export default ContactCard;
