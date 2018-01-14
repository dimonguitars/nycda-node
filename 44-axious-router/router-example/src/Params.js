import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    console.log(this.props)
  }
  render() {
    return (
          <h1 className="App-title">Params: {this.props.match.params.foo}</h1>
    );
  }
}

export default Contact;
