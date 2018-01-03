import React, { Component } from 'react'

class MyComponent extends Component {
 constructor(props) {
   super(props);
   this.state = {
      name: props.name
    }
 }
 componentWillReceiveProps(nextProps) {
   console.log('Hi from componentWillReceiveProps');
   console.log(nextProps);
 }
 shouldComponentUpdate(nextProps, nextState) {
   console.log('Hi from shouldComponentUpdate');
   console.log(nextProps);
   console.log(nextProps == this.props);
   // only update is props are different
   if(nextProps == this.props){
     return false
   }
   else{
     return true;
   }
 }
 componentWillUpdate(nextProps, nextState) {
   console.log('Hi from componentWillMount');
   console.log(nextProps);
   console.log(nextState);
 }
 componentWillMount() {
   this.setState({
     name: 'Changed name in componentWillMount'
   })
 }
 componentDidMount() {
   let ref = this.props
   // window.setTimeout(function() {
   //   console.log(ref);
   // }, 1000)
   this.setState({
     name: 'Changed name in componentDidMount'
   })
   console.log(this.state);
 }
 componentWillUnmount(){
   console.log('Should be cleaning now..');
 }
 render () {
   return(
     <div>
      <h1>{this.props.name}</h1>
      <h2>{this.props.myProp1}</h2>
      <h3>{this.state.name}</h3>
     </div>
   )
 }
}

MyComponent.defaultProps = {
 name: 'Antonina',
 myProp1: 'someVal'
}

export default MyComponent;
