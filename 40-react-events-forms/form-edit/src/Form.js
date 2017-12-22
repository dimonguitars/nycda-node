import React, { Component } from 'react';
import './css/form.css';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstName: 'Antonina',
      lastName: 'Howard',
      lname: '',
      fname: '',
      editing: false
    }
  }
  handleEdit(){
    this.setState({
      editing: true
    })
  }
  handleFirstNameChange(event){
    this.setState({
      fname: event.target.value
    })
  }
  handleLastNameChange(event){
    this.setState({
      lname: event.target.value
    })
  }
  handleSave(){
    this.setState({
      lastName: this.state.lname,
      firstName: this.state.fname,
      editing: false
    })
  }
  handleCancel(){
    this.setState({
      editing: false
    })
  }
  render() {
    var editClass, btnClass;
    if(this.state.editing){
      editClass = 'visible'
      btnClass = 'hidden'
    }
    else{
      btnClass = 'visible'
      editClass = 'hidden'
    }
    return (
      <div>
        <div className="form">
          <h1>Hello {this.state.firstName} {this.state.lastName}!</h1>
          <button className={btnClass} onClick={this.handleEdit.bind(this)}>Edit</button>
        </div>
        <div className={editClass}>
          <label>First Name: </label>
          <input onChange={this.handleFirstNameChange.bind(this)} defaultValue={this.state.firstName} />
          <label>Last Name: </label>
          <input onChange={this.handleLastNameChange.bind(this)} defaultValue={this.state.lastName} />
          <button onClick={this.handleSave.bind(this)}>Save</button>
          <button onClick={this.handleCancel.bind(this)}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default Form;
