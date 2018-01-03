import React, { Component } from 'react'

class Parental extends Component {
 render() {
   const modfiedChildren = React.Children.map(this.props.children, function(child) {
     let toReturn = child;
     console.log(child.props);
     if (child.props.value) {
       toReturn = React.cloneElement(child, {
         onClick: function(){
           console.log('Button clicked!');
         }
       });
     }
     return toReturn;
   });
   return <div>{ modfiedChildren }</div>
 }
};

export default Parental;
