import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// http://www.omdbapi.com/?i=tt3896198&apikey=c0571123

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: {},
      inputValue: '',
      error: ''
    }
  }

  componentWillMount() {
     axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=c0571123')
     .then((res) => {
       console.log(res.data)
       this.setState({
         data: res.data
       });
     });
  }

  handleClick(){
    let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=c0571123&t=' + this.state.inputValue.replace(' ', '+');
    // clear old error
    this.setState({
      error: ''
    })

    axios.get(url)
    .then((res) => {
      if(res.data.Error){
        this.setState({
          error: res.data.Error
        })
      }
      console.log(res.data)
      this.setState({
        data: res.data
      });
    })
    .catch(err => {
      console.log(err)
    });
  }

  handleChange(event){
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to our movie search!</h1>
        <h2>Check this movie out or use the search bar below</h2>
        <div className="error">{this.state.error}</div>
        <div className="movie">
          <h3>{this.state.data.Title}</h3>
        </div>
        <input type="text" name="search"  value={this.state.inputValue} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>Search!</button>
      </div>
    );
  }
}

export default App;
