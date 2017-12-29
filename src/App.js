import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <input ref={(input) => { this.name = input; }} value="" type="text"/>
        <h1>Hello {this.name.value}</h1>
      </div>
    );  
  }
}

export default App;
