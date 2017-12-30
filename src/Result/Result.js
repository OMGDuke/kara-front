import React, { Component } from 'react';

class Result extends Component {
  render() {
    const result = this.props.resultData;
    return (
      <div className="Result col-md-4">
        <h3>{result.snippet.title}</h3>
        <img className="img-fluid rounded" src={result.snippet.thumbnails.high.url} alt=""/>
      </div>
    );  
  }
}

export default Result;
