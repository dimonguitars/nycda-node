import React, { Component } from 'react';
import './css/form.css';

class MessageForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: [],
      message: ''
    }
  }
  handleButton(){
    this.setState({
      messages: [
        ...this.state.messages,
        this.state.message
      ],
      message: ''
    })
  }
  handleText(event){
    this.setState({message: event.target.value})
  }
  render() {
    var messageList = this.state.messages.map(message => {
      return <li>{message}</li>
    })
    return (
      <div className="container">
        <div>
          <h1>All messages:</h1>
          <ul>{messageList}</ul>
        </div>
        <div className="form">
          <label>New message:</label>
          <textarea ref="text" value={this.state.message} onChange={this.handleText.bind(this)}></textarea>
          <button onClick={this.handleButton.bind(this)}>Share</button>
        </div>
      </div>
    );
  }
}

export default MessageForm;
