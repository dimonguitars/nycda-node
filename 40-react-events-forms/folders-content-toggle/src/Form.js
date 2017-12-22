import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false
    }
  }
  handleToggle(){
    this.setState({
      hidden: !this.state.hidden
    })
  }
  // remember you will have to bind your event function, I did it the bind in render way (see more info here https://reactjs.org/docs/faq-functions.html)
  render() {
    var ulClass, buttonText;
    if(this.state.hidden){
      ulClass = 'hidden'
      buttonText = 'Show'
    }
    else{
      ulClass = 'visible'
      buttonText = 'Hide'
    }
    return (
      <div className="form-container">
        <h1>Home Folder:</h1>
        <ul className={ulClass}>
          <li>File 1</li>
          <li>File 2</li>
          <li>File 3</li>
        </ul>
        <button onClick={this.handleToggle.bind(this)}>{buttonText}</button>
      </div>
    );
  }
}

export default Form;
