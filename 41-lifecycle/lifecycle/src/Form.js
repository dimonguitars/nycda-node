import React, { Component } from 'react'
import './Form.css'
import ListItem from './ListItem'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hidden: false
    }
    // this.data = ['File 1', 'File 2', 'File 3']
    this.data = [
      {
        text: 'File 1',
        id: 0
      },
      {
        text: 'File 2',
        id: 1
      },
      {
        text: 'File 3',
        id: 2
      }
    ]
  }
  // // You can use this function instead of defining state in the consructor
  // getInitialState(){
  //   this.setState({
  //     hidden: false
  //   })
  // }
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
    var toRender = [];
    this.data.forEach(function (file){
      toRender.push(<ListItem text={file.text} id={file.id} key={file.id} />)
    });
    console.log(this.props.children);
    return (
      <div className="form-container">
        <h1>Home Folder:</h1>
        <ul className={ulClass}>
          { toRender }
        </ul>
        <button onClick={this.handleToggle.bind(this)}>{buttonText}</button>
      </div>
    );
  }
}

export default Form;
