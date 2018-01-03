import React, { Component } from 'react'

class ListItem extends Component {
 render() {
   return (
    <li id={this.props.id}>{this.props.text}</li>
   )
 }
}

export default ListItem;
