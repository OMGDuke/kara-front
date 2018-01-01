import React, { Component } from 'react';
// import classnames from 'classnames';
import './Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {value: ''}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/search/${this.state.value}`)
  }

  render() {
    return (
      <div className="Search container">
        <form className="form-group" onSubmit={this.handleSubmit}>
                <input className="form-control" type="text" placeholder="Enter an artist or song..." value={this.state.value} onChange={this.handleChange}  />
                <button className="btn btn-default btn-success btn-block">Search</button>                 
        </form> 
      </div>
    );  
  }
}

export default Search;
