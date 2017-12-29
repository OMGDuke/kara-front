import React, { Component } from 'react';
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Searching for:', this.input.value);
  }

  render() {
    return (
      <div className="Search container">
        <form className="form-group" onSubmit={this.handleSubmit}>
            <label className="control-label" htmlFor="search">Search</label>
            <div className="input-group">
                <input className="form-control" type="text" name="search" placeholder="Enter an artist or song..." ref={(input) => this.input = input} />
                <span className="input-group-btn"><button className="btn btn-default btn-success">Search</button></span>
            </div>                    
        </form> 
      </div>
    );  
  }
}

export default Search;
