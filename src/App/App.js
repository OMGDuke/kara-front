import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>Welcome</h1>
        <form onSubmit={() => console.log("submitted")}>
          <input type="text"/>
          <button className="btn">Submit</button>
        </form>
      </div>
    );  
  }
}

export default App;
