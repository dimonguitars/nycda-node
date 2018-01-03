import React, { Component } from 'react'

class Parent extends Component {
 render() {
 const modfiedChildren = React.Children.map(this.props.children, function(child) {
   let toReturn = child;
   console.log(child.props);
   if (!child.props.hasAccess) {
     toReturn = React.cloneElement(child, {
       message: 'Sorry but you do not have access to see this message'
     });
   }
   return toReturn;
 });
 return <div>{ modfiedChildren }</div>
 }
};

export default Parent;
